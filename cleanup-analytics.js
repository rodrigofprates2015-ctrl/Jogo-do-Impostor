#!/usr/bin/env node

/**
 * Script para limpar dados incorretos de analytics
 * 
 * Este script remove:
 * - Eventos duplicados de unique_visitor do mesmo visitor_id
 * - Mantém apenas o primeiro registro de unique_visitor por visitante
 * 
 * Uso:
 * node cleanup-analytics.js
 */

import pg from 'pg';
const { Pool } = pg;

const DATABASE_URL = process.env.DATABASE_URL || 
  'postgresql://tikjogos_db_user:Pot5AKexb4lEKnI3MUqZEYU2xX4MfrKK@dpg-d5h0p2t6ubrc73flm1q0-a.virginia-postgres.render.com:5432/tikjogos_db?sslmode=require';

async function cleanup() {
  console.log('🔌 Conectando ao banco de dados...');
  
  const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log('✅ Conectado!');
    
    // Verificar dados antes
    const beforeStats = await pool.query(`
      SELECT 
        event_type,
        COUNT(*) as total,
        COUNT(DISTINCT visitor_id) as unique_visitors
      FROM analytics_events
      GROUP BY event_type
      ORDER BY event_type
    `);
    
    console.log('\n📊 Estatísticas ANTES da limpeza:');
    beforeStats.rows.forEach(row => {
      console.log(`  ${row.event_type}: ${row.total} eventos, ${row.unique_visitors} visitantes únicos`);
    });
    
    // Limpar unique_visitor duplicados
    console.log('\n🧹 Removendo unique_visitor duplicados...');
    
    const cleanupResult = await pool.query(`
      DELETE FROM analytics_events
      WHERE id IN (
        SELECT id
        FROM (
          SELECT 
            id,
            ROW_NUMBER() OVER (
              PARTITION BY visitor_id, event_type 
              ORDER BY created_at ASC
            ) as rn
          FROM analytics_events
          WHERE event_type = 'unique_visitor'
        ) t
        WHERE rn > 1
      )
    `);
    
    console.log(`✅ Removidos ${cleanupResult.rowCount} registros duplicados`);
    
    // Verificar dados depois
    const afterStats = await pool.query(`
      SELECT 
        event_type,
        COUNT(*) as total,
        COUNT(DISTINCT visitor_id) as unique_visitors
      FROM analytics_events
      GROUP BY event_type
      ORDER BY event_type
    `);
    
    console.log('\n📊 Estatísticas DEPOIS da limpeza:');
    afterStats.rows.forEach(row => {
      console.log(`  ${row.event_type}: ${row.total} eventos, ${row.unique_visitors} visitantes únicos`);
    });
    
    console.log('\n🎉 Limpeza concluída com sucesso!');
    console.log('\n💡 Agora:');
    console.log('1. Aguarde o redeploy no Render');
    console.log('2. Acesse /dashadmin');
    console.log('3. Os números devem estar corretos!');
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

cleanup();
