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

        <h1 className="text-3xl font-bold mb-6 text-[#00f2ea]">Políticas de Privacidade e Proteção de Dados</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            <strong className="text-white">Última atualização:</strong> 28 de janeiro de 2026
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Coleta de Informações Pessoais</h2>
            <p>
              Nossa plataforma opera sob o princípio da minimização de dados. Não solicitamos nem 
              armazenamos registros de identidade civil, endereços ou documentos. Os identificadores 
              (apelidos) escolhidos para as salas de jogo possuem natureza efêmera, sendo eliminados 
              permanentemente dos nossos servidores assim que a sessão é finalizada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Gestão de Cookies e Rastreamento</h2>
            <p>
              Para assegurar o funcionamento técnico e a estabilidade da interface, utilizamos cookies 
              de sessão. Adicionalmente, parceiros de tecnologia e redes de publicidade de terceiros 
              podem utilizar cookies próprios para mapear preferências de navegação e exibir anúncios 
              que sejam pertinentes ao perfil do visitante, baseando-se em interações prévias em 
              diferentes sites da web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Ecossistema Publicitário</h2>
            <p>
              O TikJogos é financiado através da exibição de anúncios gerenciados pelo Google. Tais 
              serviços publicitários processam dados de navegação por meio de cookies para entregar 
              uma experiência comercial contextualizada. O usuário retém total autonomia para gerir 
              ou desativar o rastreamento de anúncios de terceiros através das configurações de 
              privacidade do navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Ciclo de Vida dos Dados de Partida</h2>
            <p>
              Toda a dinâmica de jogo, incluindo a criação de salas e o processamento de rodadas, 
              ocorre em memória volátil (RAM). Não mantemos bancos de dados históricos sobre quem 
              jogou, quem venceu ou quais foram os termos utilizados após o encerramento da conexão.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Direitos e Controle do Usuário</h2>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><strong className="text-white">Informação:</strong> Saber exatamente como os dados de navegação são tratados.</li>
              <li><strong className="text-white">Privacidade:</strong> Garantia de que nenhum dado sensível é coletado.</li>
              <li><strong className="text-white">Opt-out:</strong> Ferramentas para recusar a personalização de anúncios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Canal de Comunicação</h2>
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
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800">
          <h2 className="text-xl font-bold text-white mb-3">Nota Legal e Direitos Autorais</h2>
          <p className="text-gray-400 text-sm">
            © 2026 TikJogos. O TikJogos é uma iniciativa independente voltada ao entretenimento. 
            Referências a marcas, personagens ou propriedades intelectuais externas são feitas 
            estritamente sob o escopo de uso informativo e recreativo.
          </p>
        </div>
        
        <LegalDisclaimer />
      </div>
    </div>
  );
}
