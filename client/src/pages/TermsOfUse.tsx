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

        <h1 className="text-3xl font-bold mb-6 text-[#00f2ea]">Condições de Utilização</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            <strong className="text-white">Vigência:</strong> Janeiro de 2025
          </p>

          <p>
            Ao utilizar esta plataforma, você manifesta concordância com as condições descritas abaixo.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Concordância</h2>
            <p>
              O acesso a esta plataforma implica aceitação integral destas condições e da legislação vigente. Caso discorde de qualquer disposição, recomendamos não prosseguir com o uso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Natureza do Serviço</h2>
            <p>
              TikJogos é uma plataforma gratuita de entretenimento social digital. Recursos disponíveis:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Cinco modalidades de interação distintas</li>
              <li>Capacidade para 4 a 15 participantes por sessão</li>
              <li>Interface localizada em português</li>
              <li>Opções de personalização de partida</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Conduta Esperada</h2>
            <p>
              O uso da plataforma deve respeitar a legislação aplicável. Condutas vedadas:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Atividades que contrariem normas legais em qualquer jurisdição</li>
              <li>Tentativas de acesso não autorizado a sistemas ou dados</li>
              <li>Ações que comprometam a estabilidade ou disponibilidade do serviço</li>
              <li>Distribuição de código malicioso ou prejudicial</li>
              <li>Utilização de automação não autorizada</li>
              <li>Reprodução ou distribuição de conteúdo sem permissão expressa</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Direitos Autorais</h2>
            <p>
              O conteúdo original desta plataforma, incluindo elementos visuais, textuais e código, pertence ao TikJogos ou licenciadores autorizados, sendo protegido pela legislação de propriedade intelectual.
            </p>
            <p className="mt-2">
              Eventuais referências a marcas de terceiros nas dinâmicas de jogo são utilizadas exclusivamente em contexto de entretenimento e trivia, permanecendo a titularidade com seus respectivos detentores.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Responsabilidade do Participante</h2>
            <p>
              Ao criar sessões ou utilizar apelidos, o participante assume responsabilidade pelo conteúdo inserido. Não são permitidos:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Conteúdo inadequado, ofensivo ou contrário à lei</li>
              <li>Identificações que infrinjam direitos de terceiros</li>
              <li>Dados falsos ou que induzam a erro</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Continuidade do Serviço</h2>
            <p>
              Embora busquemos manter disponibilidade contínua, não há garantia de funcionamento ininterrupto. Modificações, suspensões ou descontinuação podem ocorrer sem comunicação prévia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Isenção de Responsabilidade</h2>
            <p>
              A plataforma é disponibilizada no estado em que se encontra. Não há responsabilidade por:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Prejuízos de qualquer natureza decorrentes do uso</li>
              <li>Perda de informações ou oportunidades</li>
              <li>Indisponibilidade temporária ou permanente</li>
              <li>Imprecisões no conteúdo apresentado</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Recursos Externos</h2>
            <p>
              Eventuais links para plataformas de terceiros não implicam endosso ou responsabilidade sobre seu conteúdo ou práticas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Sustentabilidade do Serviço</h2>
            <p>
              A exibição de publicidade digital viabiliza a gratuidade da plataforma. O uso implica concordância com esta prática.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Contribuições Voluntárias</h2>
            <p>
              Apoios financeiros são opcionais, não reembolsáveis e não conferem vantagens funcionais na plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Canal de Atendimento</h2>
            <p>
              Esclarecimentos podem ser solicitados através de:
            </p>
            <p className="mt-2">
              <a 
                href="mailto:rodrigo.f.prates2033@gmail.com" 
                className="text-[#00f2ea] hover:underline font-medium"
              >
                rodrigo.f.prates2033@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Revisões</h2>
            <p>
              Estas condições podem ser atualizadas a qualquer momento. A continuidade de uso após modificações representa aceitação das novas disposições.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. Jurisdição</h2>
            <p>
              Estas condições são regidas pela legislação brasileira, com foro na comarca competente do Brasil para resolução de eventuais controvérsias.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} TikJogos. Todos os direitos reservados.</p>
        </div>
        
        <LegalDisclaimer />
      </div>
    </div>
  );
}
