#!/usr/bin/env python3
"""
Ferramenta de Auditoria SEO Completa
Analisa uma URL e gera relatório detalhado de otimizações
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin
import time
import re
from collections import Counter
from datetime import datetime


class SEOAuditor:
    def __init__(self, url, keyword):
        self.url = url
        self.keyword = keyword.lower()
        self.domain = urlparse(url).netloc
        self.soup = None
        self.response = None
        self.ttfb = 0
        
        # Resultados da análise
        self.critical_issues = []
        self.opportunities = []
        self.performance_data = {}
        self.action_plan = []
        
        # User-Agent para simular navegador real
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    
    def fetch_page(self):
        """Busca a página e mede o tempo de resposta"""
        try:
            print(f"\n🔍 Analisando: {self.url}")
            print("⏳ Aguarde, fazendo requisição...")
            
            start_time = time.time()
            self.response = requests.get(self.url, headers=self.headers, timeout=10)
            self.ttfb = time.time() - start_time
            
            if self.response.status_code != 200:
                self.critical_issues.append(
                    f"❌ Status HTTP {self.response.status_code} - Página não acessível"
                )
                return False
            
            self.soup = BeautifulSoup(self.response.content, 'html.parser')
            return True
            
        except requests.exceptions.Timeout:
            self.critical_issues.append("❌ Timeout - Servidor demorou mais de 10s para responder")
            return False
        except requests.exceptions.ConnectionError:
            self.critical_issues.append("❌ Erro de conexão - Não foi possível acessar o site")
            return False
        except Exception as e:
            self.critical_issues.append(f"❌ Erro inesperado: {str(e)}")
            return False
    
    def analyze_https(self):
        """Verifica se o site usa HTTPS"""
        if not self.url.startswith('https://'):
            self.critical_issues.append(
                "🔒 Site não usa HTTPS - Essencial para segurança e ranking no Google"
            )
        else:
            print("✅ HTTPS ativo")
    
    def analyze_title(self):
        """Analisa a tag title"""
        title_tag = self.soup.find('title')
        
        if not title_tag:
            self.critical_issues.append("❌ Tag <title> não encontrada")
            return
        
        title = title_tag.get_text().strip()
        title_length = len(title)
        keyword_in_title = self.keyword in title.lower()
        
        print(f"\n📄 TITLE: {title}")
        print(f"   Tamanho: {title_length} caracteres")
        
        if title_length < 50:
            self.opportunities.append(
                f"⚠️ Title muito curto ({title_length} chars) - Recomendado: 50-60 caracteres"
            )
        elif title_length > 60:
            self.opportunities.append(
                f"⚠️ Title muito longo ({title_length} chars) - Pode ser cortado no Google"
            )
        else:
            print("   ✅ Tamanho ideal")
        
        if not keyword_in_title:
            self.opportunities.append(
                f"⚠️ Palavra-chave '{self.keyword}' não encontrada no Title"
            )
        else:
            print(f"   ✅ Palavra-chave '{self.keyword}' presente")
    
    def analyze_meta_description(self):
        """Analisa a meta description"""
        meta_desc = self.soup.find('meta', attrs={'name': 'description'})
        
        if not meta_desc or not meta_desc.get('content'):
            self.critical_issues.append("❌ Meta Description não encontrada")
            return
        
        description = meta_desc.get('content').strip()
        desc_length = len(description)
        keyword_in_desc = self.keyword in description.lower()
        
        print(f"\n📝 META DESCRIPTION: {description[:100]}...")
        print(f"   Tamanho: {desc_length} caracteres")
        
        if desc_length < 150:
            self.opportunities.append(
                f"⚠️ Meta Description curta ({desc_length} chars) - Recomendado: 150-160"
            )
        elif desc_length > 160:
            self.opportunities.append(
                f"⚠️ Meta Description longa ({desc_length} chars) - Será cortada no Google"
            )
        else:
            print("   ✅ Tamanho ideal")
        
        if not keyword_in_desc:
            self.opportunities.append(
                f"⚠️ Palavra-chave '{self.keyword}' não encontrada na Meta Description"
            )
        else:
            print(f"   ✅ Palavra-chave '{self.keyword}' presente")
    
    def analyze_headings(self):
        """Analisa hierarquia de headings (H1-H6)"""
        print("\n📑 ANÁLISE DE HEADINGS:")
        
        h1_tags = self.soup.find_all('h1')
        h1_count = len(h1_tags)
        
        if h1_count == 0:
            self.critical_issues.append("❌ Nenhuma tag H1 encontrada")
        elif h1_count > 1:
            self.opportunities.append(
                f"⚠️ Múltiplas tags H1 ({h1_count}) - Recomendado: apenas 1 por página"
            )
        else:
            h1_text = h1_tags[0].get_text().strip()
            print(f"   H1: {h1_text}")
            
            if self.keyword not in h1_text.lower():
                self.opportunities.append(
                    f"⚠️ Palavra-chave '{self.keyword}' não encontrada no H1"
                )
            else:
                print(f"   ✅ Palavra-chave '{self.keyword}' presente no H1")
        
        # Análise de H2 e H3
        h2_count = len(self.soup.find_all('h2'))
        h3_count = len(self.soup.find_all('h3'))
        
        print(f"   H2: {h2_count} encontradas")
        print(f"   H3: {h3_count} encontradas")
        
        if h2_count == 0:
            self.opportunities.append("⚠️ Nenhuma tag H2 - Use para estruturar o conteúdo")
    
    def analyze_url_slug(self):
        """Analisa a URL/slug"""
        parsed_url = urlparse(self.url)
        slug = parsed_url.path
        
        print(f"\n🔗 URL SLUG: {slug}")
        
        if self.keyword.replace(' ', '-') in slug or self.keyword.replace(' ', '_') in slug:
            print(f"   ✅ Palavra-chave '{self.keyword}' presente na URL")
        else:
            self.opportunities.append(
                f"⚠️ Palavra-chave '{self.keyword}' não encontrada na URL"
            )
        
        if len(slug) > 75:
            self.opportunities.append(
                f"⚠️ URL muito longa ({len(slug)} chars) - Prefira URLs curtas e descritivas"
            )
    
    def analyze_images(self):
        """Analisa imagens e atributos alt"""
        images = self.soup.find_all('img')
        total_images = len(images)
        images_without_alt = 0
        images_without_dimensions = 0
        images_with_keyword = 0
        
        print(f"\n🖼️ ANÁLISE DE IMAGENS: {total_images} encontradas")
        
        for img in images:
            alt = img.get('alt', '').strip()
            
            if not alt:
                images_without_alt += 1
            elif self.keyword in alt.lower():
                images_with_keyword += 1
            
            if not img.get('width') or not img.get('height'):
                images_without_dimensions += 1
        
        if images_without_alt > 0:
            self.opportunities.append(
                f"⚠️ {images_without_alt} imagens sem atributo ALT - Importante para acessibilidade e SEO"
            )
        
        if images_without_dimensions > 0:
            self.opportunities.append(
                f"⚠️ {images_without_dimensions} imagens sem width/height - Causa Layout Shift (CLS)"
            )
        
        if total_images > 0 and images_with_keyword == 0:
            self.opportunities.append(
                f"⚠️ Nenhuma imagem com palavra-chave '{self.keyword}' no ALT"
            )
        
        print(f"   Sem ALT: {images_without_alt}")
        print(f"   Sem dimensões: {images_without_dimensions}")
        print(f"   Com palavra-chave: {images_with_keyword}")
    
    def analyze_content(self):
        """Analisa o conteúdo da página"""
        # Remove scripts e styles
        for script in self.soup(['script', 'style', 'nav', 'footer', 'header']):
            script.decompose()
        
        body = self.soup.find('body')
        if not body:
            self.critical_issues.append("❌ Tag <body> não encontrada")
            return
        
        text = body.get_text()
        words = re.findall(r'\b\w+\b', text.lower())
        word_count = len(words)
        
        print(f"\n📊 ANÁLISE DE CONTEÚDO:")
        print(f"   Total de palavras: {word_count}")
        
        if word_count < 300:
            self.critical_issues.append(
                f"❌ Conteúdo Raso (Thin Content) - Apenas {word_count} palavras. Recomendado: mínimo 300"
            )
        elif word_count < 600:
            self.opportunities.append(
                f"⚠️ Conteúdo curto ({word_count} palavras) - Considere expandir para 800-1500 palavras"
            )
        else:
            print("   ✅ Conteúdo substancial")
        
        # Densidade da palavra-chave
        keyword_count = text.lower().count(self.keyword)
        keyword_density = (keyword_count / word_count * 100) if word_count > 0 else 0
        
        print(f"   Palavra-chave '{self.keyword}': {keyword_count} ocorrências")
        print(f"   Densidade: {keyword_density:.2f}%")
        
        if keyword_density < 0.5:
            self.opportunities.append(
                f"⚠️ Densidade da palavra-chave muito baixa ({keyword_density:.2f}%) - Recomendado: 1-2%"
            )
        elif keyword_density > 3:
            self.opportunities.append(
                f"⚠️ Densidade da palavra-chave muito alta ({keyword_density:.2f}%) - Risco de keyword stuffing"
            )
        
        # Verifica formatação
        strong_tags = len(self.soup.find_all(['strong', 'b']))
        lists = len(self.soup.find_all(['ul', 'ol']))
        
        print(f"   Tags <strong>/<b>: {strong_tags}")
        print(f"   Listas <ul>/<ol>: {lists}")
        
        if strong_tags == 0:
            self.opportunities.append("⚠️ Nenhum texto em negrito - Use para destacar termos importantes")
        
        if lists == 0:
            self.opportunities.append("⚠️ Nenhuma lista - Listas melhoram a legibilidade")
    
    def analyze_links(self):
        """Analisa links internos e externos"""
        links = self.soup.find_all('a', href=True)
        internal_links = []
        external_links = []
        broken_links = []
        links_without_title = 0
        
        print(f"\n🔗 ANÁLISE DE LINKS: {len(links)} encontrados")
        
        for link in links:
            href = link.get('href', '')
            
            if not href or href.startswith('#') or href.startswith('javascript:'):
                continue
            
            # Converte para URL absoluta
            absolute_url = urljoin(self.url, href)
            parsed = urlparse(absolute_url)
            
            # Classifica interno vs externo
            if parsed.netloc == self.domain or not parsed.netloc:
                internal_links.append(absolute_url)
            else:
                external_links.append(absolute_url)
            
            # Verifica atributo title
            if not link.get('title'):
                links_without_title += 1
        
        print(f"   Links internos: {len(internal_links)}")
        print(f"   Links externos: {len(external_links)}")
        print(f"   Sem atributo title: {links_without_title}")
        
        if len(internal_links) < 3:
            self.opportunities.append(
                "⚠️ Poucos links internos - Melhore a linkagem interna para distribuir autoridade"
            )
        
        # Verifica links quebrados (apenas uma amostra para não demorar muito)
        print("\n   Verificando links quebrados (amostra)...")
        sample_links = (internal_links + external_links)[:10]
        
        for link in sample_links:
            try:
                response = requests.head(link, headers=self.headers, timeout=3, allow_redirects=True)
                if response.status_code >= 400:
                    broken_links.append((link, response.status_code))
            except:
                pass
        
        if broken_links:
            self.critical_issues.append(
                f"❌ {len(broken_links)} links quebrados encontrados na amostra"
            )
            for link, status in broken_links[:3]:
                print(f"      - {link} (Status: {status})")
    
    def analyze_mobile_viewport(self):
        """Verifica meta viewport para mobile"""
        viewport = self.soup.find('meta', attrs={'name': 'viewport'})
        
        if not viewport:
            self.critical_issues.append(
                "❌ Meta tag viewport não encontrada - Essencial para responsividade mobile"
            )
        else:
            print("\n📱 ✅ Meta viewport presente (Mobile-friendly)")
    
    def analyze_robots_sitemap(self):
        """Verifica robots.txt e sitemap.xml"""
        base_url = f"{urlparse(self.url).scheme}://{self.domain}"
        
        print("\n🤖 VERIFICANDO ARQUIVOS TÉCNICOS:")
        
        # Verifica robots.txt
        try:
            robots_response = requests.get(f"{base_url}/robots.txt", headers=self.headers, timeout=5)
            if robots_response.status_code == 200:
                print("   ✅ robots.txt encontrado")
            else:
                self.opportunities.append("⚠️ robots.txt não encontrado - Recomendado para controlar crawlers")
        except:
            self.opportunities.append("⚠️ robots.txt não acessível")
        
        # Verifica sitemap.xml
        try:
            sitemap_response = requests.get(f"{base_url}/sitemap.xml", headers=self.headers, timeout=5)
            if sitemap_response.status_code == 200:
                print("   ✅ sitemap.xml encontrado")
            else:
                self.opportunities.append("⚠️ sitemap.xml não encontrado - Essencial para indexação")
        except:
            self.opportunities.append("⚠️ sitemap.xml não acessível")
    
    def analyze_schema_markup(self):
        """Verifica presença de Schema Markup (JSON-LD)"""
        schema_scripts = self.soup.find_all('script', type='application/ld+json')
        
        print(f"\n📋 SCHEMA MARKUP (Dados Estruturados):")
        
        if schema_scripts:
            print(f"   ✅ {len(schema_scripts)} schema(s) encontrado(s)")
            for i, script in enumerate(schema_scripts[:3], 1):
                try:
                    import json
                    data = json.loads(script.string)
                    schema_type = data.get('@type', 'Unknown')
                    print(f"      {i}. Tipo: {schema_type}")
                except:
                    pass
        else:
            self.opportunities.append(
                "⚠️ Nenhum Schema Markup encontrado - Use dados estruturados para Rich Snippets"
            )
    
    def analyze_performance(self):
        """Analisa performance"""
        print(f"\n⚡ PERFORMANCE:")
        print(f"   TTFB (Time to First Byte): {self.ttfb:.3f}s")
        
        if self.ttfb > 0.5:
            self.critical_issues.append(
                f"❌ TTFB muito alto ({self.ttfb:.3f}s) - Servidor lento. Recomendado: < 0.5s"
            )
        elif self.ttfb > 0.3:
            self.opportunities.append(
                f"⚠️ TTFB moderado ({self.ttfb:.3f}s) - Considere otimizar servidor"
            )
        else:
            print("   ✅ TTFB excelente")
        
        self.performance_data['ttfb'] = self.ttfb
        self.performance_data['page_size'] = len(self.response.content) / 1024  # KB
        
        print(f"   Tamanho da página: {self.performance_data['page_size']:.2f} KB")
        
        if self.performance_data['page_size'] > 1024:  # > 1MB
            self.opportunities.append(
                f"⚠️ Página muito pesada ({self.performance_data['page_size']:.2f} KB) - Otimize imagens e código"
            )
    
    def generate_action_plan(self):
        """Gera plano de ação baseado nas análises"""
        self.action_plan = [
            "\n" + "="*80,
            "📋 PLANO DE AÇÃO - PRIORIDADES PARA RANKEAR NO GOOGLE",
            "="*80,
            "\n🔴 CRÍTICO (Faça IMEDIATAMENTE):"
        ]
        
        if self.critical_issues:
            for issue in self.critical_issues:
                self.action_plan.append(f"   {issue}")
        else:
            self.action_plan.append("   ✅ Nenhum problema crítico encontrado!")
        
        self.action_plan.extend([
            "\n🟡 OPORTUNIDADES DE OTIMIZAÇÃO:",
        ])
        
        if self.opportunities:
            for opp in self.opportunities:
                self.action_plan.append(f"   {opp}")
        else:
            self.action_plan.append("   ✅ Página bem otimizada!")
        
        self.action_plan.extend([
            "\n🔵 ESTRATÉGIA DE LINK BUILDING:",
            "   1. Crie conteúdo de alta qualidade e compartilhável",
            "   2. Guest posts em blogs relevantes do seu nicho",
            "   3. Parcerias com influenciadores e sites de autoridade",
            "   4. Divulgue em redes sociais e fóruns especializados",
            "   5. Crie infográficos e recursos linkáveis",
            "   6. Participe de comunidades online (Reddit, Quora, etc)",
            "   7. Monitore menções à sua marca e peça links",
            "\n🎯 PRÓXIMOS PASSOS:",
            "   1. Corrija todos os problemas críticos listados acima",
            "   2. Implemente as oportunidades de otimização",
            "   3. Crie conteúdo adicional focado na palavra-chave",
            "   4. Monitore o ranking semanalmente (Google Search Console)",
            "   5. Construa backlinks de qualidade gradualmente",
            "   6. Atualize o conteúdo regularmente (Google valoriza frescor)",
        ])
    
    def generate_report(self):
        """Gera relatório completo"""
        report = [
            "\n" + "="*80,
            "🔍 RELATÓRIO DE AUDITORIA SEO",
            "="*80,
            f"URL: {self.url}",
            f"Palavra-chave foco: {self.keyword}",
            f"Data: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}",
            "="*80,
        ]
        
        # Adiciona plano de ação
        report.extend(self.action_plan)
        
        report.extend([
            "\n" + "="*80,
            "📊 RESUMO DA ANÁLISE",
            "="*80,
            f"✅ Problemas Críticos: {len(self.critical_issues)}",
            f"⚠️  Oportunidades: {len(self.opportunities)}",
            f"⚡ TTFB: {self.ttfb:.3f}s",
            f"📦 Tamanho: {self.performance_data.get('page_size', 0):.2f} KB",
            "="*80,
        ])
        
        return "\n".join(report)
    
    def run_audit(self):
        """Executa auditoria completa"""
        print("\n" + "="*80)
        print("🚀 INICIANDO AUDITORIA SEO COMPLETA")
        print("="*80)
        
        if not self.fetch_page():
            print("\n❌ Não foi possível acessar a página. Auditoria interrompida.")
            return
        
        # Executa todas as análises
        self.analyze_https()
        self.analyze_title()
        self.analyze_meta_description()
        self.analyze_headings()
        self.analyze_url_slug()
        self.analyze_images()
        self.analyze_content()
        self.analyze_links()
        self.analyze_mobile_viewport()
        self.analyze_robots_sitemap()
        self.analyze_schema_markup()
        self.analyze_performance()
        
        # Gera plano de ação
        self.generate_action_plan()
        
        # Gera e exibe relatório
        report = self.generate_report()
        print(report)
        
        # Salva relatório em arquivo
        filename = f"seo_audit_{self.domain.replace('.', '_')}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.txt"
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(report)
        
        print(f"\n💾 Relatório salvo em: {filename}")
        print("\n✅ Auditoria concluída!")


def main():
    """Função principal"""
    print("\n" + "="*80)
    print("🎯 FERRAMENTA DE AUDITORIA SEO - ESPECIALISTA EM RANKEAMENTO GOOGLE")
    print("="*80)
    
    # Solicita dados do usuário
    url = input("\n📍 Digite a URL completa para análise (ex: https://exemplo.com): ").strip()
    keyword = input("🔑 Digite a palavra-chave foco (ex: jogo do impostor): ").strip()
    
    if not url or not keyword:
        print("\n❌ URL e palavra-chave são obrigatórios!")
        return
    
    # Valida URL
    if not url.startswith(('http://', 'https://')):
        url = 'https://' + url
    
    # Executa auditoria
    auditor = SEOAuditor(url, keyword)
    auditor.run_audit()


if __name__ == "__main__":
    main()
