#!/usr/bin/env python3
"""
Exemplo de uso programático da ferramenta de auditoria SEO
"""

from seo_audit import SEOAuditor

# Exemplo 1: Uso básico
print("="*80)
print("EXEMPLO 1: Auditoria básica")
print("="*80)

auditor = SEOAuditor(
    url="https://example.com",
    keyword="example website"
)
auditor.run_audit()

print("\n\n")

# Exemplo 2: Analisando múltiplas páginas
print("="*80)
print("EXEMPLO 2: Análise de múltiplas páginas")
print("="*80)

urls_para_analisar = [
    ("https://example.com", "example domain"),
    ("https://www.wikipedia.org", "free encyclopedia"),
]

for url, keyword in urls_para_analisar:
    print(f"\n{'='*80}")
    print(f"Analisando: {url} | Palavra-chave: {keyword}")
    print('='*80)
    
    auditor = SEOAuditor(url, keyword)
    auditor.run_audit()
    
    # Acessa dados específicos
    print(f"\n📊 Resumo rápido:")
    print(f"   Problemas críticos: {len(auditor.critical_issues)}")
    print(f"   Oportunidades: {len(auditor.opportunities)}")
    print(f"   TTFB: {auditor.ttfb:.3f}s")
    
    print("\n" + "-"*80 + "\n")

print("\n✅ Análise de múltiplas páginas concluída!")
