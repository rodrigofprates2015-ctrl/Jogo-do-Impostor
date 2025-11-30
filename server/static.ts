import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "dist");
  
  if (!fs.existsSync(distPath)) {
    console.error(`Attempted to serve from: ${distPath}`);
    console.error(`__dirname: ${__dirname}`);
    console.error(`Available files:`, fs.readdirSync(__dirname).slice(0, 10));
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    if (!fs.existsSync(indexPath)) {
      return res.status(404).json({ error: "index.html not found" });
    }
    res.sendFile(indexPath);
  });
}
