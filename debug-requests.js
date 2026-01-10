#!/usr/bin/env node

/**
 * Script para verificar quais eventos estão sendo registrados
 */

import pg from 'pg';
const { Pool } = pg;

const DATABASE_URL = process.env.DATABASE_URL || 
  'postgresql://tikjogos_db_user:Pot5AKexb4lEKnI3MUqZEYU2xX4MfrKK@dpg-d5h0p2t6ubrc73flm1q0-a.virginia-postgres.render.com:5432/tikjogos_db?sslmode=require';

async function debug() {
  const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log('🔍 Analisando eventos de analytics...\n');
    
    // Últimos 20 eventos
    const recent = await pool.query(`
      SELECT 
        event_type,
        page_path,
        visitor_id,
        created_at,
        TO_CHAR(created_at, 'HH24:MI:SS') as time
      FROM analytics_events
      ORDER BY created_at DESC
      LIMIT 20
    `);
    
    console.log('📋 Últimos 20 eventos:');
    console.log('─'.repeat(80));
    recent.rows.forEach(row => {
      const visitorShort = row.visitor_id.substring(0, 8);
      console.log(`${row.time} | ${row.event_type.padEnd(15)} | ${row.page_path.padEnd(30)} | ${visitorShort}...`);
    });
    
    // Estatísticas por página
    console.log('\n📊 Eventos por página:');
    console.log('─'.repeat(80));
    const byPage = await pool.query(`
      SELECT 
        page_path,
        event_type,
        COUNT(*) as total
      FROM analytics_events
      GROUP BY page_path, event_type
      ORDER BY page_path, event_type
    `);
    
    byPage.rows.forEach(row => {
      console.log(`${row.page_path.padEnd(40)} | ${row.event_type.padEnd(15)} | ${row.total}`);
    });
    
    // Eventos por visitante
    console.log('\n👥 Eventos por visitante:');
    console.log('─'.repeat(80));
    const byVisitor = await pool.query(`
      SELECT 
        visitor_id,
        COUNT(*) FILTER (WHERE event_type = 'unique_visitor') as unique_count,
        COUNT(*) FILTER (WHERE event_type = 'pageview') as pageview_count,
        COUNT(*) as total
      FROM analytics_events
      GROUP BY visitor_id
      ORDER BY total DESC
    `);
    
    byVisitor.rows.forEach(row => {
      const visitorShort = row.visitor_id.substring(0, 8);
      console.log(`${visitorShort}... | unique: ${row.unique_count} | pageviews: ${row.pageview_count} | total: ${row.total}`);
    });
    
    // Eventos duplicados (mesma página, mesmo visitante, < 5 segundos)
    console.log('\n⚠️  Possíveis duplicatas (< 5s de diferença):');
    console.log('─'.repeat(80));
    const duplicates = await pool.query(`
      WITH ranked AS (
        SELECT 
          visitor_id,
          page_path,
          event_type,
          created_at,
          LAG(created_at) OVER (PARTITION BY visitor_id, page_path, event_type ORDER BY created_at) as prev_time
        FROM analytics_events
      )
      SELECT 
        visitor_id,
        page_path,
        event_type,
        created_at,
        prev_time,
        EXTRACT(EPOCH FROM (created_at - prev_time)) as seconds_diff
      FROM ranked
      WHERE prev_time IS NOT NULL
        AND EXTRACT(EPOCH FROM (created_at - prev_time)) < 5
      ORDER BY created_at DESC
      LIMIT 10
    `);
    
    if (duplicates.rows.length > 0) {
      duplicates.rows.forEach(row => {
        const visitorShort = row.visitor_id.substring(0, 8);
        console.log(`${visitorShort}... | ${row.page_path.padEnd(30)} | ${row.event_type.padEnd(15)} | ${row.seconds_diff.toFixed(2)}s`);
      });
    } else {
      console.log('✅ Nenhuma duplicata encontrada!');
    }
    
    console.log('\n' + '─'.repeat(80));
    console.log('💡 Análise:');
    console.log('- Se houver múltiplos pageviews da mesma página em < 2s: debounce não funcionou');
    console.log('- Se houver múltiplos unique_visitor do mesmo visitor_id: verificação no banco falhou');
    console.log('- Se houver páginas estranhas (/api/*, assets): filtros não funcionaram');
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await pool.end();
  }
}

debug();
