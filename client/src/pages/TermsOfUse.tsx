import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen w-full text-white font-poppins p-6" style={{ backgroundColor: '#063970' }}>
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[#00f2ea] hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao jogo
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-[#00f2ea]">Termos e Condições de Uso</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            <strong className="text-white">Atualizado em:</strong> Janeiro de 2026
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Aceitação do Regulamento</h2>
            <p>
              Ao ingressar e utilizar as funcionalidades desta plataforma, o utilizador declara estar 
              plenamente ciente e de acordo com as normas aqui estabelecidas. O usufruto dos serviços 
              implica a adesão automática a estes termos. Caso não concorde com algum ponto, a orientação 
              é cessar imediatamente a navegação.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Descrição do Ecossistema</h2>
            <p>
              O TikJogos é um ambiente digital dedicado ao entretenimento social gratuito. A plataforma disponibiliza:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Cinco modalidades distintas de jogos de palavras e lógica.</li>
              <li>Suporte para partidas dinâmicas entre 4 e 15 participantes simultâneos.</li>
              <li>Interface otimizada totalmente em língua portuguesa.</li>
              <li>Ferramentas de customização para o anfitrião da sala.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Código de Conduta e Restrições</h2>
            <p>
              É estritamente proibido o uso da plataforma para finalidades ilícitas, abusivas ou que 
              comprometam a infraestrutura técnica. Vedamos explicitamente:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Engenharia reversa ou tentativas de invasão de dados.</li>
              <li>Uso de scripts, bots ou automações não autorizadas.</li>
              <li>Disseminação de conteúdo malicioso (malware) ou spam.</li>
              <li>Violação de direitos de propriedade intelectual de terceiros.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Propriedade Intelectual</h2>
            <p>
              Todo o código-fonte, design gráfico, textos e algoritmos são de titularidade exclusiva do 
              TikJogos. A menção a marcas externas, nomes de franquias ou personagens durante as partidas 
              ocorre sob a doutrina de "uso justo" em contextos de trivia e educação, pertencendo os 
              direitos originais aos seus respectivos detentores.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Responsabilidade do Utilizador</h2>
            <p>
              Os participantes são os únicos responsáveis pelos "nicknames" e conteúdos inseridos em 
              salas privadas. É proibida a utilização de termos ofensivos, discriminatórios ou que 
              infrinjam leis de proteção de dados e direitos civis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Disponibilidade e Garantias</h2>
            <p>
              O serviço é fornecido "como está" (as is). Não garantimos que o sistema estará online 
              100% do tempo. Reservamo-nos o direito de suspender, atualizar ou remover funcionalidades 
              para manutenção ou evolução do projeto sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Financiamento e Doações</h2>
            <p>
              A manutenção dos servidores é viabilizada pela publicidade digital. Contribuições 
              voluntárias podem ser feitas pelo utilizador; todavia, estas não geram benefícios 
              funcionais, não são reembolsáveis e não configuram relação de consumo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Foro e Jurisdição</h2>
            <p>
              Estes termos são regidos pela legislação brasileira. Qualquer litígio será resolvido 
              na comarca competente de domicílio do proprietário da plataforma no Brasil.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2026 TikJogos. Todos os direitos reservados.</p>
        </div>
        
        <LegalDisclaimer />
      </div>
    </div>
  );
}
