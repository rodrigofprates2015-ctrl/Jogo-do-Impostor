import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { LegalDisclaimer } from "@/components/LegalDisclaimer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full text-white font-poppins p-6" style={{ backgroundColor: '#063970' }}>
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-[#00f2ea] hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao jogo
        </Link>

        <h1 className="text-3xl font-bold mb-6 text-[#00f2ea]">Diretrizes de Privacidade</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            <strong className="text-white">Revisão mais recente:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Dados Pessoais</h2>
            <p>
              Esta plataforma não armazena informações pessoais identificáveis. Apelidos utilizados 
              durante as sessões são temporários e descartados automaticamente após o encerramento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Tecnologias de Navegação</h2>
            <p>
              Empregamos cookies para otimizar a experiência de uso e viabilizar a exibição de conteúdo publicitário. 
              Parceiros externos, incluindo redes de anúncios, podem utilizar cookies para personalizar 
              o conteúdo apresentado com base no histórico de navegação.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Publicidade Digital</h2>
            <p>
              A plataforma integra serviços de publicidade do Google para manutenção do serviço gratuito. 
              Estes serviços utilizam cookies para adequar os anúncios ao perfil de navegação do visitante.
            </p>
            <p className="mt-2">
              A personalização pode ser desabilitada através das{" "}
              <a 
                href="https://www.google.com/settings/ads" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00f2ea] hover:underline"
              >
                Preferências de Publicidade do Google
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Informações de Sessão</h2>
            <p>
              Salas e partidas existem apenas em memória volátil durante a sessão ativa. 
              Não há persistência de histórico de partidas, participantes ou resultados após o encerramento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Garantias do Usuário</h2>
            <p>
              Você possui as seguintes garantias:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Transparência sobre dados eventualmente processados</li>
              <li>Remoção de informações mediante solicitação</li>
              <li>Controle sobre personalização de publicidade</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Canal de Comunicação</h2>
            <p>
              Questões relacionadas a estas diretrizes podem ser encaminhadas para:
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
            <h2 className="text-xl font-bold text-white mb-3">7. Atualizações</h2>
            <p>
              Estas diretrizes podem ser revisadas periodicamente. Recomendamos consulta 
              regular desta página para acompanhar eventuais modificações.
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
