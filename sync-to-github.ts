import { Octokit } from '@octokit/rest';
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, relative } from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings?.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('Token not found');
  }

  const response = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  );
  
  const data = await response.json();
  connectionSettings = data.items?.[0];
  const accessToken = connectionSettings?.settings?.access_token || connectionSettings?.settings?.oauth?.credentials?.access_token;

  if (!accessToken) {
    throw new Error('GitHub not connected properly');
  }
  
  return accessToken;
}

const IGNORE_PATTERNS = [
  'node_modules',
  '.git',
  'dist',
  '.replit',
  'replit.nix',
  '.cache',
  '.config',
  '.upm',
  'attached_assets',
  '.local',
  'asd',
  'sync-to-github.ts'
];

function shouldIgnore(filePath: string): boolean {
  return IGNORE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function getAllFiles(dirPath: string, baseDir: string = dirPath): string[] {
  const files: string[] = [];
  
  try {
    const items = readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = join(dirPath, item);
      const relativePath = relative(baseDir, fullPath);
      
      if (shouldIgnore(relativePath)) continue;
      
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...getAllFiles(fullPath, baseDir));
      } else if (stat.isFile()) {
        files.push(relativePath);
      }
    }
  } catch (e) {
    console.error(`Error reading directory ${dirPath}:`, e);
  }
  
  return files;
}

async function syncToGitHub() {
  try {
    console.log('🔄 Getting GitHub access token...');
    const accessToken = await getAccessToken();
    console.log('✅ Token obtained');
    
    const octokit = new Octokit({ auth: accessToken });
    
    const owner = 'rodrigofprates2015-ctrl';
    const repo = 'Dessavez';
    const branch = 'main';
    
    console.log(`📦 Syncing to ${owner}/${repo}...`);
    
    // Get the current commit SHA
    const { data: refData } = await octokit.git.getRef({
      owner,
      repo,
      ref: `heads/${branch}`
    });
    const latestCommitSha = refData.object.sha;
    console.log(`📌 Current commit: ${latestCommitSha.substring(0, 7)}`);
    
    // Get current tree
    const { data: commitData } = await octokit.git.getCommit({
      owner,
      repo,
      commit_sha: latestCommitSha
    });
    
    // Get all files to upload
    const files = getAllFiles('.');
    console.log(`📄 Found ${files.length} files to sync`);
    
    // Create blobs for all files
    const treeItems: any[] = [];
    
    for (const file of files) {
      try {
        const content = readFileSync(file);
        const base64Content = content.toString('base64');
        
        const { data: blobData } = await octokit.git.createBlob({
          owner,
          repo,
          content: base64Content,
          encoding: 'base64'
        });
        
        treeItems.push({
          path: file,
          mode: '100644',
          type: 'blob',
          sha: blobData.sha
        });
        
        process.stdout.write('.');
      } catch (e) {
        console.error(`\n⚠️ Error processing ${file}:`, e);
      }
    }
    
    console.log('\n🌳 Creating new tree...');
    
    // Create new tree
    const { data: newTree } = await octokit.git.createTree({
      owner,
      repo,
      base_tree: commitData.tree.sha,
      tree: treeItems
    });
    
    console.log('📝 Creating commit...');
    
    // Create new commit
    const { data: newCommit } = await octokit.git.createCommit({
      owner,
      repo,
      message: 'Sync from Replit - Restore Impostor version',
      tree: newTree.sha,
      parents: [latestCommitSha]
    });
    
    console.log('🚀 Pushing to GitHub...');
    
    // Update reference
    await octokit.git.updateRef({
      owner,
      repo,
      ref: `heads/${branch}`,
      sha: newCommit.sha
    });
    
    console.log(`✅ Successfully synced! New commit: ${newCommit.sha.substring(0, 7)}`);
    console.log('🔄 Railway will automatically deploy the new version.');
    
  } catch (error: any) {
    console.error('❌ Error:', error.message || error);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
    process.exit(1);
  }
}

syncToGitHub();
