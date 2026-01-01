# Sistema de Tratamento de Erros - TikJogos

## Visão Geral

O TikJogos implementa um sistema de tratamento de erros que diferencia entre erros de API e erros de roteamento do SPA (Single Page Application).

## Arquitetura

### Servidor (Express)

#### Error Handler Principal
Localização: `server/index.ts`

O error handler do Express foi configurado para:

1. **Rotas de API (`/api/*`)**:
   - Retorna JSON com mensagem de erro
   - Status code apropriado (400, 401, 404, 500, etc.)
   - Exemplo: `{ "message": "Não autorizado" }`

2. **Rotas do SPA (todas as outras)**:
   - NÃO exibe página de erro "Oops!"
   - Passa o controle para o próximo handler
   - Permite que o React Router trate a rota
   - Vite/Static server serve o `index.html`

#### Middleware de Catch-All
Antes do error handler, há um middleware que:
- Intercepta rotas não encontradas
- Diferencia entre API e SPA
- Evita que erros cheguem ao error handler para rotas SPA

### Cliente (React)

#### Admin Dashboard
Localização: `client/src/pages/AdminDashboard.tsx`

Tratamento especial para erros de autenticação:
- Detecta status 401 (Unauthorized)
- Limpa token do localStorage
- Redireciona para tela de login
- Previne loops infinitos de requisições

## Fluxo de Erro

### Cenário 1: Erro em Rota de API
```
Requisição → /api/admin/rooms
↓
Erro 401 (não autorizado)
↓
Error Handler detecta /api/*
↓
Retorna JSON: { "message": "Não autorizado" }
↓
Cliente trata o erro (limpa auth, redireciona)
```

### Cenário 2: F5 em Rota do SPA
```
Requisição → /dashadmin
↓
Servidor não encontra rota
↓
Catch-all middleware detecta não-API
↓
Passa para próximo handler
↓
Static/Vite serve index.html
↓
React Router carrega /dashadmin
```

### Cenário 3: Erro Não Tratado (Antigo - CORRIGIDO)
```
❌ ANTES:
Erro qualquer → Error Handler → Página "Oops!" → Usuário preso

✅ AGORA:
Erro em não-API → Passa adiante → SPA funciona normalmente
```

## Problemas Corrigidos

### 1. Página "Oops!" no Dashadmin
**Sintoma**: Ao dar F5 no `/dashadmin`, aparecia página de erro

**Causa**: Error handler interceptava e mostrava HTML de erro

**Solução**: Error handler agora passa controle para SPA em rotas não-API

### 2. Loop de Erro após Reload
**Sintoma**: Após erro, F5 não resolvia, ficava preso

**Causa**: Erro era cacheado e error handler sempre mostrava "Oops!"

**Solução**: 
- Error handler não interfere com SPA
- Admin Dashboard limpa auth em 401
- Cache não afeta mais o funcionamento

### 3. Necessidade de Limpar Cache
**Sintoma**: Precisava limpar cookies/histórico para voltar

**Causa**: Token inválido + error handler bloqueando

**Solução**: 401 agora limpa token automaticamente

## Logs e Debug

### Servidor
```bash
[Error Handler] 401 GET /api/admin/rooms
[Error Handler] Message: Não autorizado
[Admin] Unauthorized, clearing auth
```

### Cliente (Console)
```javascript
[Admin] Unauthorized, clearing auth
[Admin] Error fetching rooms: 401
```

## Boas Práticas

### Ao Adicionar Novas Rotas de API
```typescript
app.get("/api/nova-rota", async (req, res) => {
  try {
    // ... código
    res.json(data);
  } catch (error) {
    // Erro será capturado pelo error handler
    // Retornará JSON automaticamente
    throw error;
  }
});
```

### Ao Adicionar Novas Rotas do SPA
```typescript
// Em App.tsx
<Route path="/nova-pagina" component={NovaPagina} />

// Servidor automaticamente serve index.html
// React Router carrega o componente
```

### Tratamento de Erros no Cliente
```typescript
const fetchData = async () => {
  try {
    const response = await fetch("/api/endpoint");
    
    if (response.ok) {
      const data = await response.json();
      // ... usar data
    } else if (response.status === 401) {
      // Limpar auth e redirecionar
      localStorage.removeItem("token");
      setIsAuthenticated(false);
    } else {
      console.error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
};
```

## Troubleshooting

### Ainda vejo "Oops!" após atualização
1. Limpe o cache do navegador (Ctrl + Shift + Delete)
2. Faça um hard refresh (Ctrl + F5)
3. Verifique se está na versão mais recente do código

### Erro 401 em loop
1. Verifique se o token está sendo limpo corretamente
2. Confira o console para logs de "[Admin] Unauthorized"
3. Tente fazer logout e login novamente

### Página em branco após erro
1. Abra o console do navegador (F12)
2. Verifique se há erros JavaScript
3. Tente acessar a home (/) primeiro
4. Depois navegue para a rota desejada

## Referências

- Código do error handler: `server/index.ts` (linhas 70-95)
- Admin auth handling: `client/src/pages/AdminDashboard.tsx` (linhas 135-175)
- Documentação Express: https://expressjs.com/en/guide/error-handling.html
