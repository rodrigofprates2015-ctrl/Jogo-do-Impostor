# 🛍️ Como Adicionar Produtos de Afiliados

## 📋 Guia Rápido

### 1. Obter Link de Afiliado

**Amazon Associates**:
1. Acesse: https://associados.amazon.com.br/
2. Busque o produto
3. Copie o link curto: `https://amzn.to/XXXXXX`

**Shopee Affiliates**:
1. Acesse: https://affiliate.shopee.com.br/
2. Busque o produto
3. Copie o link: `https://shope.ee/XXXXXX`

### 2. Adicionar ao Sistema

Edite: `client/public/ads-data.js`

#### Opção A: Banner Customizado (Recomendado)

```javascript
{
  id: 'amz-004',                              // ID único
  imageUrl: '',                               // Deixe vazio para custom
  affiliateLink: 'https://amzn.to/4phmY4v',  // SEU LINK AQUI
  altText: 'Descrição do produto',
  category: 'all',                            // 'all', 'mobile', 'desktop'
  weight: 9,                                  // 1-10 (maior = mais chance)
  customBanner: true,                         // Ativa banner customizado
  productName: 'Nome do Produto',
  productDescription: 'Descrição curta e atrativa',
  productPrice: 'Ver preço',
  productBadge: '⚡ OFERTA',                  // Opcional
  productIcon: '🎮'                           // Emoji do produto
}
```

#### Opção B: Banner com Imagem

```javascript
{
  id: 'amz-004',
  imageUrl: 'https://exemplo.com/banner.jpg', // URL da imagem
  affiliateLink: 'https://amzn.to/4phmY4v',
  altText: 'Descrição do produto',
  category: 'all',
  weight: 8
}
```

### 3. Configurar Peso (Weight)

```javascript
weight: 10  // 🔥 Destaque máximo - produtos premium
weight: 9   // ⭐ Muito alto - produtos populares
weight: 7-8 // 📈 Alto - produtos bons
weight: 5-6 // 📊 Médio - produtos normais
weight: 3-4 // 📉 Baixo - produtos secundários
weight: 1-2 // 🔻 Mínimo - fallback
```

### 4. Escolher Categoria

```javascript
category: 'all'      // Aparece em mobile E desktop
category: 'mobile'   // Apenas em celulares/tablets
category: 'desktop'  // Apenas em computadores
```

### 5. Badges Disponíveis

```javascript
productBadge: '⚡ OFERTA'      // Promoção
productBadge: '🔥 POPULAR'     // Mais vendido
productBadge: '⭐ TOP'          // Melhor avaliado
productBadge: '🆕 NOVO'         // Lançamento
productBadge: '💰 DESCONTO'    // Desconto especial
productBadge: '🎁 BRINDE'      // Com brinde
```

### 6. Ícones Sugeridos

```javascript
// Periféricos
productIcon: '🖱️'  // Mouse
productIcon: '⌨️'  // Teclado
productIcon: '🎧'  // Headset/Fone
productIcon: '🎮'  // Controle/Joystick
productIcon: '📱'  // Celular/Tablet
productIcon: '💻'  // Notebook/PC

// Acessórios
productIcon: '🪑'  // Cadeira
productIcon: '🖥️'  // Monitor
productIcon: '📷'  // Webcam
productIcon: '🔌'  // Cabo/Carregador
productIcon: '💡'  // Iluminação
productIcon: '🔊'  // Caixa de som

// Outros
productIcon: '📚'  // Livro/Curso
productIcon: '🎯'  // Serviço
productIcon: '🛡️'  // Segurança/VPN
productIcon: '☁️'  // Cloud/Storage
```

## 📝 Exemplos Completos

### Exemplo 1: Mouse Gamer (Amazon)

```javascript
{
  id: 'amz-mouse-001',
  imageUrl: '',
  affiliateLink: 'https://amzn.to/4phmY4v',
  altText: 'Mouse Gamer RGB com 7 botões programáveis',
  category: 'all',
  weight: 10,
  customBanner: true,
  productName: 'Mouse Gamer RGB',
  productDescription: 'Alta precisão, 7 botões programáveis',
  productPrice: 'Ver preço na Amazon',
  productBadge: '⚡ OFERTA',
  productIcon: '🖱️'
}
```

### Exemplo 2: Fone Bluetooth (Shopee)

```javascript
{
  id: 'shp-fone-001',
  imageUrl: '',
  affiliateLink: 'https://shope.ee/XXXXXX',
  altText: 'Fone de Ouvido Bluetooth TWS',
  category: 'mobile',
  weight: 8,
  customBanner: true,
  productName: 'Fone Bluetooth TWS',
  productDescription: 'Cancelamento de ruído, 20h de bateria',
  productPrice: 'Ver na Shopee',
  productBadge: '🔥 POPULAR',
  productIcon: '🎧'
}
```

### Exemplo 3: Cadeira Gamer (Amazon)

```javascript
{
  id: 'amz-cadeira-001',
  imageUrl: '',
  affiliateLink: 'https://amzn.to/XXXXXX',
  altText: 'Cadeira Gamer Ergonômica',
  category: 'desktop',
  weight: 7,
  customBanner: true,
  productName: 'Cadeira Gamer Pro',
  productDescription: 'Ergonômica, apoio lombar, reclinável 180°',
  productPrice: 'Ver oferta',
  productBadge: '⭐ TOP',
  productIcon: '🪑'
}
```

### Exemplo 4: Curso Online (Parceria)

```javascript
{
  id: 'prt-curso-001',
  imageUrl: '',
  affiliateLink: 'https://exemplo.com/curso',
  altText: 'Curso de Programação Web',
  category: 'all',
  weight: 5,
  customBanner: true,
  productName: 'Curso Dev Web Completo',
  productDescription: 'HTML, CSS, JavaScript, React - Do zero ao pro',
  productPrice: '50% OFF',
  productBadge: '🎓 CURSO',
  productIcon: '📚'
}
```

## 🎨 Dicas de Copywriting

### Nome do Produto (productName)
- ✅ Curto e direto: "Mouse Gamer RGB"
- ✅ Destaque o diferencial: "Teclado Mecânico Pro"
- ❌ Muito longo: "Mouse Gamer RGB com 7 Botões Programáveis e DPI Ajustável"

### Descrição (productDescription)
- ✅ Benefícios: "Alta precisão, 7 botões programáveis"
- ✅ Especificações chave: "16GB RAM, SSD 512GB"
- ✅ Máximo 50 caracteres
- ❌ Texto genérico: "Produto de qualidade"

### Preço (productPrice)
- ✅ "Ver preço na Amazon"
- ✅ "Ver oferta"
- ✅ "A partir de R$ 99"
- ✅ "50% OFF"
- ❌ Preço fixo (pode mudar)

## 🔄 Atualizar Produtos

### Remover Produto

Simplesmente delete o objeto do array em `ads-data.js`

### Pausar Produto Temporariamente

Mude o weight para 0:
```javascript
weight: 0  // Não será exibido
```

### Aumentar Prioridade

Aumente o weight:
```javascript
weight: 10  // Máxima prioridade
```

### Mudar para Mobile Only

```javascript
category: 'mobile'
```

## 📊 Monitoramento

### Ver Estatísticas

Abra o console do navegador:
```javascript
window.partnerContentEngine.getStats()
```

Resultado:
```javascript
{
  impressions: { 'amz-001': 15, 'shp-001': 8 },
  clicks: { 'amz-001': 3, 'shp-001': 1 },
  ctr: { 'amz-001': '20.00%', 'shp-001': '12.50%' }
}
```

### Google Analytics

Os eventos são enviados automaticamente:
- `partner_impression` - Quando o anúncio é exibido
- `partner_click` - Quando o usuário clica

## 🚀 Otimização

### Teste A/B

1. Crie 2 versões do mesmo produto com IDs diferentes
2. Dê o mesmo weight
3. Monitore qual converte mais
4. Aumente o weight do vencedor

### Rotação de Produtos

Mude os weights semanalmente baseado em:
- CTR (Click-Through Rate)
- Conversões
- Comissões geradas
- Estoque disponível

### Sazonalidade

```javascript
// Natal
productBadge: '🎄 NATAL'
weight: 10

// Black Friday
productBadge: '🛍️ BLACK FRIDAY'
weight: 10

// Volta às aulas
productBadge: '📚 VOLTA ÀS AULAS'
weight: 9
```

## ❓ FAQ

**P: Quantos produtos posso adicionar?**
R: Ilimitado! Mas recomendamos 15-20 ativos por vez.

**P: Como sei se está funcionando?**
R: Abra `/prototipo` e veja os banners. Clique e verifique se redireciona.

**P: Posso usar imagens próprias?**
R: Sim! Hospede em um CDN e use a URL em `imageUrl`.

**P: E se o link de afiliado expirar?**
R: Atualize o `affiliateLink` no ads-data.js.

**P: Como priorizar produtos com maior comissão?**
R: Aumente o `weight` para 9-10.

## 📞 Suporte

Dúvidas? Consulte:
- `PARTNER_CONTENT_SYSTEM.md` - Documentação completa
- `HOUSE_ADS_SUMMARY.md` - Resumo executivo

---

**Pronto para monetizar! 💰**

Adicione seus produtos e comece a ganhar com afiliados!
