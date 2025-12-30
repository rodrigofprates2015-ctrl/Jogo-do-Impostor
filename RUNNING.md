# Como Rodar o TikJogos

## Desenvolvimento

### Opção 1: Script de Início Rápido
```bash
./start-server.sh
```

### Opção 2: Comando Manual
```bash
npm install
NODE_ENV=development npm run dev
```

O servidor estará disponível em `http://localhost:5000`

## Produção

### Build
```bash
npm run build
```

### Executar
```bash
NODE_ENV=production npm start
```

## Variáveis de Ambiente (Opcional)

Para funcionalidades completas, configure:

- `SESSION_SECRET` - Segredo para sessões (obrigatório em produção)
- `DATABASE_URL` - URL do PostgreSQL (opcional, usa memória se não configurado)
- `GITHUB_CLIENT_ID` - ID do OAuth GitHub (opcional)
- `GITHUB_CLIENT_SECRET` - Secret do OAuth GitHub (opcional)

## Portas

- **5000** - Servidor principal (API + Frontend)

## Troubleshooting

### Site mostra "Oops!"
1. Verifique se o servidor está rodando: `curl http://localhost:5000/api/game-modes`
2. Limpe o cache do navegador (Ctrl+Shift+Delete)
3. Reinicie o servidor: `./start-server.sh`

### Erro "Port already in use"
```bash
# Mate processos na porta 5000
pkill -f "tsx.*server/index"
pkill -f "node.*dist/index"
```

### Dependências não instaladas
```bash
rm -rf node_modules package-lock.json
npm install
```

## Testes

### Criar Sala
```bash
curl -X POST http://localhost:5000/api/rooms/create \
  -H "Content-Type: application/json" \
  -d '{"hostId":"test","hostName":"Test"}'
```

### Entrar em Sala
```bash
curl -X POST http://localhost:5000/api/rooms/join \
  -H "Content-Type: application/json" \
  -d '{"code":"ROOM_CODE","playerId":"player","playerName":"Player"}'
```

## Logs

Logs do servidor são salvos em `/tmp/server.log` quando usando o script de início.
