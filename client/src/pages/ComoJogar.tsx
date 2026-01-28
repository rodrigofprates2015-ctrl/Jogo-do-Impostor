import { useEffect } from "react";
import { Link } from "wouter";
import { 
  ArrowLeft, 
  Eye, 
  MapPin, 
  Swords, 
  Target, 
  HelpCircle,
  Users,
  AlertTriangle,
  CheckCircle,
  Lightbulb
} from "lucide-react";
import logoTikjogos from "@assets/logo tikjogos_1764616571363.png";
import logoImpostorMobile from "@assets/logo_site_impostor_1765071990526.png";
import { AdBlockTop, AdBlockInContent, AdBlockBottom } from "@/components/AdBlocks";

const gameModes = [
  {
    id: "palavra-secreta",
    title: "Palavra Secreta",
    icon: Eye,
    color: "#e8a045",
    description: "A modalidade mais popular. Em nossos testes, 80% dos grupos começam por aqui. Todos recebem a mesma palavra, exceto o infiltrado.",
    howToPlay: [
      "O sistema distribui uma palavra idêntica para todos, menos o impostor",
      "Cada participante oferece uma pista sobre o termo sem entregá-lo",
      "O infiltrado observa as pistas e tenta deduzir a palavra",
      "Ao final, o grupo vota em quem parece não conhecer o termo"
    ],
    tips: [
      "Veteranos recomendam: pistas de nível médio funcionam melhor",
      "Infiltrado: aguarde 2-3 pistas antes de arriscar a sua",
      "Evite associações óbvias que facilitam a vida do impostor"
    ]
  },
  {
    id: "locais-funcoes",
    title: "Locais & Funções",
    icon: MapPin,
    color: "#4a90a4",
    description: "Adiciona uma camada extra de complexidade. Cada pessoa recebe um ambiente e um papel específico. O infiltrado desconhece o cenário.",
    howToPlay: [
      "Tripulantes recebem um cenário (ex: Aeroporto) e uma ocupação (ex: Piloto)",
      "O infiltrado não tem acesso ao cenário sorteado",
      "Participantes questionam uns aos outros sobre detalhes do ambiente",
      "O infiltrado precisa deduzir o local pelas respostas coletadas"
    ],
    tips: [
      "Elabore questões que exijam conhecimento específico do ambiente",
      "Infiltrado: respostas muito vagas ou muito detalhadas levantam suspeitas",
      "Observe hesitações e contradições nas respostas"
    ]
  },
  {
    id: "duas-faccoes",
    title: "Duas Facções",
    icon: Swords,
    color: "#c44536",
    description: "Dinâmica avançada com três lados. Dois grupos com termos distintos e um infiltrado sem informação. Recomendado para veteranos.",
    howToPlay: [
      "Metade recebe o Termo A, outra metade o Termo B",
      "O infiltrado não conhece nenhum dos dois termos",
      "Cada grupo busca identificar seus aliados",
      "O infiltrado tenta se passar por membro de um dos grupos"
    ],
    tips: [
      "Identifique aliados antes de revelar informações demais",
      "Cuidado para não entregar seu termo ao grupo adversário",
      "O infiltrado pode explorar a confusão entre os grupos"
    ]
  },
  {
    id: "categoria-item",
    title: "Categoria + Item",
    icon: Target,
    color: "#3d8b5f",
    description: "Variação interessante: todos conhecem a categoria geral, mas apenas tripulantes sabem o item específico. O infiltrado conhece a categoria.",
    howToPlay: [
      "Uma categoria é anunciada para todos (ex: Animais)",
      "Tripulantes recebem um elemento específico (ex: Elefante)",
      "O infiltrado conhece a categoria mas desconhece o elemento",
      "Participantes oferecem pistas sobre o elemento sem nomeá-lo"
    ],
    tips: [
      "Foque em atributos únicos do elemento escolhido",
      "Infiltrado: pistas genéricas que sirvam para vários elementos da categoria",
      "Desconfie de quem parece estar adivinhando em vez de sabendo"
    ]
  },
  {
    id: "perguntas-diferentes",
    title: "Perguntas Diferentes",
    icon: HelpCircle,
    color: "#9b59b6",
    description: "Mecânica única: tripulantes e infiltrado respondem questões distintas sobre tema relacionado. Respostas desconexas denunciam o impostor.",
    howToPlay: [
      "Tripulantes recebem uma questão (ex: 'Descreva seu hobby favorito')",
      "O infiltrado recebe questão diferente sobre assunto próximo",
      "Cada pessoa responde sua questão em voz alta",
      "Respostas que não se conectam ao padrão revelam o infiltrado"
    ],
    tips: [
      "Analise se as respostas seguem uma lógica comum",
      "Infiltrado: formule respostas flexíveis que sirvam para múltiplas questões",
      "Cruze as respostas entre participantes buscando inconsistências"
    ]
  }
];

export default function ComoJogar() {
  useEffect(() => {
    document.title = "Como Jogar - TikJogos Impostor | Regras e Modalidades";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Aprenda como jogar TikJogos Impostor! Descubra as regras de cada modalidade: Palavra Secreta, Locais & Funções, Duas Facções, Categoria + Item e Perguntas Diferentes. Jogue online com amigos!");
    }
  }, []);

  return (
    <div 
      className="min-h-screen w-full relative"
      style={{
        backgroundColor: '#1C202C'
      }}
    >
      {/* Top Ad Block */}
      <AdBlockTop />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a1628]/90 backdrop-blur-sm border-b border-[#3d4a5c]">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-[#4a90a4] hover:text-[#5aa0b4] transition-colors" data-testid="link-back-home">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar ao Jogo</span>
          </Link>
          <img src={logoTikjogos} alt="TikJogos" className="h-8" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <img 
            src={logoImpostorMobile} 
            alt="Impostor - Jogo de Dedução Social" 
            className="h-32 md:h-40 mx-auto mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" data-testid="heading-main">
            Domine a Dedução Social: Manual Completo
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Após centenas de partidas, compilamos tudo que você precisa saber. 
            Desde o básico até táticas avançadas para cada modalidade.
          </p>
        </section>

        {/* Quick Start */}
        <section className="card-retro p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-[#e8a045]" />
            Configuração em 60 Segundos
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#16213e]/50 rounded-lg p-4 border border-[#3d4a5c]">
              <div className="text-2xl font-bold text-[#e8a045] mb-2">1</div>
              <h3 className="font-semibold text-white mb-1">Monte o Ambiente</h3>
              <p className="text-gray-400 text-sm">Insira seu apelido e gere uma nova sala instantaneamente</p>
            </div>
            <div className="bg-[#16213e]/50 rounded-lg p-4 border border-[#3d4a5c]">
              <div className="text-2xl font-bold text-[#e8a045] mb-2">2</div>
              <h3 className="font-semibold text-white mb-1">Reúna o Grupo</h3>
              <p className="text-gray-400 text-sm">Distribua o código - mínimo 4 participantes recomendado</p>
            </div>
            <div className="bg-[#16213e]/50 rounded-lg p-4 border border-[#3d4a5c]">
              <div className="text-2xl font-bold text-[#e8a045] mb-2">3</div>
              <h3 className="font-semibold text-white mb-1">Defina a Modalidade</h3>
              <p className="text-gray-400 text-sm">O anfitrião configura o modo e dispara a partida</p>
            </div>
          </div>
        </section>

        {/* Basic Rules */}
        <section className="card-retro p-6 mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#4a90a4]" />
            Mecânica Fundamental
          </h2>
          <div className="space-y-4 text-gray-300">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-[#3d8b5f] flex-shrink-0 mt-0.5" />
              <p><strong className="text-white">Tripulantes:</strong> Possuem acesso à informação secreta. Objetivo: identificar o infiltrado através de análise e votação coletiva.</p>
            </div>
            <div className="flex gap-3">
              <AlertTriangle className="w-5 h-5 text-[#c44536] flex-shrink-0 mt-0.5" />
              <p><strong className="text-white">Infiltrado:</strong> Desconhece a informação secreta. Objetivo: simular conhecimento e sobreviver à votação sem ser desmascarado.</p>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-[#3d8b5f] flex-shrink-0 mt-0.5" />
              <p><strong className="text-white">Decisão Final:</strong> Após a fase de discussão, o grupo vota. O participante com mais votos é eliminado da rodada.</p>
            </div>
          </div>
        </section>

        {/* Game Modes */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            5 Modalidades Disponíveis
          </h2>
          <div className="space-y-6">
            {gameModes.map((mode) => {
              const IconComponent = mode.icon;
              return (
                <article 
                  key={mode.id} 
                  id={mode.id}
                  className="card-retro p-6"
                  data-testid={`section-mode-${mode.id}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${mode.color}20`, border: `2px solid ${mode.color}` }}
                    >
                      <IconComponent className="w-5 h-5" style={{ color: mode.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{mode.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{mode.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#16213e]/50 rounded-lg p-4 border border-[#3d4a5c]">
                      <h4 className="font-semibold text-white mb-2 text-sm uppercase tracking-wide">Passo a Passo</h4>
                      <ol className="space-y-2">
                        {mode.howToPlay.map((step, index) => (
                          <li key={index} className="flex gap-2 text-gray-400 text-sm">
                            <span className="text-[#e8a045] font-bold">{index + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    <div className="bg-[#16213e]/50 rounded-lg p-4 border border-[#3d4a5c]">
                      <h4 className="font-semibold text-white mb-2 text-sm uppercase tracking-wide">Táticas Testadas</h4>
                      <ul className="space-y-2">
                        {mode.tips.map((tip, index) => (
                          <li key={index} className="flex gap-2 text-gray-400 text-sm">
                            <Lightbulb className="w-4 h-4 text-[#e8a045] flex-shrink-0 mt-0.5" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Ad Block In Content */}
        <AdBlockInContent />

        {/* CTA */}
        <section className="text-center py-8">
          <h2 className="text-xl font-bold text-white mb-4">Hora de Colocar em Prática</h2>
          <p className="text-gray-400 mb-6">Monte seu grupo e teste as estratégias que você aprendeu aqui.</p>
          <Link href="/" className="btn-orange inline-flex items-center gap-2 text-lg px-8 py-3" data-testid="button-play-now">
            Iniciar Partida
          </Link>
        </section>
      </main>

      {/* Bottom Ad Block */}
      <AdBlockBottom />

      {/* Footer */}
      <footer className="bg-[#0a1628]/90 border-t border-[#3d4a5c] py-6">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>TikJogos - Plataforma de Entretenimento Social Digital</p>
          <p className="mt-2">
            <Link href="/blog" className="hover:text-gray-300 transition-colors">Artigos</Link>
            {" | "}
            <Link href="/privacidade" className="hover:text-gray-300 transition-colors">Privacidade</Link>
            {" | "}
            <Link href="/termos" className="hover:text-gray-300 transition-colors">Termos</Link>
          </p>
          <p className="mt-3 text-xs text-gray-600 max-w-2xl mx-auto">
            Projeto independente dedicado a jogos de interação social. Referências a marcas de terceiros são utilizadas exclusivamente em contexto de entretenimento e trivia.
          </p>
        </div>
      </footer>
    </div>
  );
}
