# 🔍 Ferramenta de Auditoria SEO Completa

## 📋 Descrição

Ferramenta profissional de auditoria SEO desenvolvida em Python que analisa qualquer URL e gera um relatório detalhado com recomendações para colocar seu site em 1º lugar no Google.

## ✨ Funcionalidades

### 1. Análise de Palavras-Chave e On-Page
- ✅ Verificação de palavra-chave em Title, Meta Description, H1, URL e Alt tags
- ✅ Validação de tamanho ideal do Title (50-60 caracteres)
- ✅ Validação de tamanho da Meta Description (150-160 caracteres)
- ✅ Verificação de hierarquia de headings (H1, H2, H3)
- ✅ Detecção de múltiplos H1 (problema comum)

### 2. Análise de Conteúdo e Semântica
- ✅ Contagem total de palavras
- ✅ Detecção de Thin Content (< 300 palavras)
- ✅ Cálculo de densidade da palavra-chave
- ✅ Verificação de formatação (negrito, listas)
- ✅ Análise de legibilidade

### 3. Análise de Links
- ✅ Classificação entre links internos e externos
- ✅ Verificação de atributo title nos links
- ✅ Detecção de links quebrados (404)
- ✅ Recomendações de linkagem interna

### 4. Estratégia de Link Building
- ✅ Guia tático completo para conseguir backlinks
- ✅ Estratégias de guest posting
- ✅ Técnicas de outreach

### 5. Performance e Aspectos Técnicos
- ✅ Medição de TTFB (Time to First Byte)
- ✅ Verificação de HTTPS
- ✅ Verificação de meta viewport (mobile-friendly)
- ✅ Verificação de robots.txt e sitemap.xml
- ✅ Detecção de Schema Markup (JSON-LD)
- ✅ Análise de dimensões de imagens (CLS)
- ✅ Cálculo de tamanho da página

## 🚀 Instalação

### Pré-requisitos
- Python 3.7 ou superior

### Instalar dependências

```bash
pip install -r requirements_seo.txt
```

Ou instalar manualmente:

```bash
pip install requests beautifulsoup4
```

## 💻 Como Usar

### Modo Interativo

```bash
python seo_audit.py
```

O script solicitará:
1. **URL completa** para análise (ex: https://exemplo.com)
2. **Palavra-chave foco** que deseja rankear (ex: jogo do impostor)

### Exemplo de Uso

```bash
$ python seo_audit.py

================================================================================
🎯 FERRAMENTA DE AUDITORIA SEO - ESPECIALISTA EM RANKEAMENTO GOOGLE
================================================================================

📍 Digite a URL completa para análise: https://tikjogos.com
🔑 Digite a palavra-chave foco: jogo do impostor
```

## 📊 Relatório Gerado

O script gera um relatório completo dividido em:

### 1. Status Crítico 🔴
Erros que impedem indexação ou prejudicam severamente o ranking:
- Falta de HTTPS
- Página inacessível (404, 500)
- Ausência de Title ou Meta Description
- TTFB muito alto (> 0.5s)
- Thin Content (< 300 palavras)
- Links quebrados

### 2. Oportunidades de Otimização 🟡
Melhorias que aumentarão o ranking:
- Otimização de Title e Description
- Ajuste de densidade de palavra-chave
- Melhoria de Alt tags em imagens
- Adição de Schema Markup
- Otimização de linkagem interna
- Melhoria de formatação de conteúdo

### 3. Performance ⚡
Métricas de velocidade:
- TTFB (Time to First Byte)
- Tamanho da página
- Recomendações de otimização

### 4. Plano de Ação 📋
Guia passo a passo priorizado:
- Correções críticas imediatas
- Otimizações recomendadas
- Estratégia de link building
- Próximos passos

## 📁 Saída

O relatório é:
1. **Exibido no console** com formatação colorida
2. **Salvo em arquivo .txt** com timestamp (ex: `seo_audit_tikjogos_com_20260105_235959.txt`)

## 🎯 Casos de Uso

### Para Desenvolvedores
- Auditar sites antes do lançamento
- Verificar implementação de SEO técnico
- Identificar problemas de performance

### Para Profissionais de Marketing
- Analisar concorrentes
- Identificar oportunidades de conteúdo
- Planejar estratégias de otimização

### Para Donos de Sites
- Entender por que o site não rankeia
- Obter plano de ação claro
- Monitorar melhorias ao longo do tempo

## 🔧 Personalização

### Modificar User-Agent

Edite a linha 23 em `seo_audit.py`:

```python
self.headers = {
    'User-Agent': 'Seu User-Agent Personalizado'
}
```

### Ajustar Timeouts

Edite as linhas com `timeout=`:

```python
self.response = requests.get(self.url, headers=self.headers, timeout=10)
```

### Adicionar Novas Verificações

Crie um novo método na classe `SEOAuditor`:

```python
def analyze_custom_check(self):
    """Sua verificação personalizada"""
    # Seu código aqui
    pass
```

E adicione ao método `run_audit()`:

```python
self.analyze_custom_check()
```

## ⚠️ Limitações

1. **Backlinks externos**: Não verifica backlinks de outros sites (requer API paga como Ahrefs/SEMrush)
2. **JavaScript**: Não executa JavaScript (sites SPA podem não ser totalmente analisados)
3. **Velocidade**: Análise de links quebrados é limitada a 10 links para não demorar muito
4. **Rate Limiting**: Alguns sites podem bloquear requisições automatizadas

## 🛡️ Tratamento de Erros

O script possui tratamento robusto de erros:
- ✅ Timeout de conexão
- ✅ Erros de rede
- ✅ Páginas inacessíveis
- ✅ HTML malformado
- ✅ Encoding de caracteres

## 📈 Métricas Analisadas

| Métrica | Valor Ideal | Crítico |
|---------|-------------|---------|
| TTFB | < 0.3s | > 0.5s |
| Palavras | > 800 | < 300 |
| Densidade KW | 1-2% | < 0.5% ou > 3% |
| Title | 50-60 chars | < 30 ou > 70 |
| Meta Desc | 150-160 chars | < 120 ou > 170 |
| H1 | 1 por página | 0 ou > 1 |

## 🎓 Conceitos SEO Implementados

### On-Page SEO
- Title Tag Optimization
- Meta Description
- Header Tags Hierarchy
- Keyword Density
- URL Structure
- Image Alt Text

### Technical SEO
- HTTPS
- Mobile Responsiveness
- Page Speed (TTFB)
- Robots.txt
- Sitemap.xml
- Schema Markup
- Cumulative Layout Shift (CLS)

### Content SEO
- Word Count
- Content Quality
- Readability
- Formatting (Bold, Lists)
- Keyword Usage

### Off-Page SEO
- Internal Linking
- External Links
- Link Building Strategy

## 🤝 Contribuindo

Sugestões de melhorias:
1. Integração com APIs de backlinks (Ahrefs, Moz)
2. Análise de Core Web Vitals completa
3. Suporte a JavaScript (Selenium/Playwright)
4. Análise de concorrentes
5. Monitoramento de ranking ao longo do tempo
6. Exportação para PDF/HTML

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais e comerciais.

## 🆘 Suporte

Para dúvidas ou problemas:
1. Verifique se todas as dependências estão instaladas
2. Teste com uma URL simples primeiro
3. Verifique se o site permite web scraping (robots.txt)

## 🎯 Próximas Versões

- [ ] Interface web (Flask/Django)
- [ ] Análise de múltiplas páginas
- [ ] Comparação com concorrentes
- [ ] Integração com Google Search Console
- [ ] Sugestões automáticas de conteúdo
- [ ] Análise de tendências de palavras-chave

---

**Desenvolvido com ❤️ para ajudar sites a rankearem no Google**
