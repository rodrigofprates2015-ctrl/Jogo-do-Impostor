#!/usr/bin/env node

/**
 * Script para criar a tabela analytics_events no PostgreSQL
 * 
 * Uso:
 * node create-analytics-table.js
 */

import pg from 'pg';
const { Pool } = pg;

const DATABASE_URL = process.env.DATABASE_URL || 
  'postgresql://tikjogos_db_user:Pot5AKexb4lEKnI3MUqZEYU2xX4MfrKK@dpg-d5h0p2t6ubrc73flm1q0-a.oregon-postgres.render.com:5432/tikjogos_db?sslmode=require';

const SQL = `
-- Criar tabela analytics_events
CREATE TABLE IF NOT EXISTS analytics_events (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_id VARCHAR(36) NOT NULL,
  event_type VARCHAR(20) NOT NULL,
  ip_address VARCHAR(45),
  user_agent TEXT,
  page_path VARCHAR(500),
  referrer VARCHAR(500),
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Criar índices
CREATE INDEX IF NOT EXISTS idx_analytics_visitor_id ON analytics_events(visitor_id);
CREATE INDEX IF NOT EXISTS idx_analytics_event_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics_events(created_at);
`;

async function createTable() {
  console.log('🔌 Conectando ao banco de dados...');
  console.log('📍 URL:', DATABASE_URL.replace(/:[^:@]+@/, ':****@')); // Hide password
  
  const pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log('✅ Conectado!');
    console.log('📝 Criando tabela analytics_events...');
    
    await pool.query(SQL);
    
    console.log('✅ Tabela criada com sucesso!');
    
    // Verificar
    const result = await pool.query('SELECT COUNT(*) FROM analytics_events');
    console.log('📊 Registros na tabela:', result.rows[0].count);
    
    console.log('\n🎉 Tudo pronto! Agora você pode:');
    console.log('1. Acessar seu site');
    console.log('2. Ir em /dashadmin');
    console.log('3. Ver a seção "Analytics de Tráfego"');
    
  } catch (error) {
    console.error('❌ Erro:', error.message);
    console.error('\n💡 Dicas:');
    console.error('- Verifique se DATABASE_URL está correto');
    console.error('- Confirme que tem ?sslmode=require no final');
    console.error('- Tente executar via Render Dashboard');
    process.exit(1);
  } finally {
    await pool.end();
  }
}

createTable();
