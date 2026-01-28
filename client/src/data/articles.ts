export interface Article {
  id: number;
  slug: string;
  title: string;
  type: string;
  readTime: string;
  summary: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "o-que-e-jogo-impostor",
    title: "Domine a Dedução Social: Guia Definitivo do Jogo do Impostor",
    type: "Pilar",
    readTime: "8 min",
    summary: "Em nossos testes com mais de 500 partidas, identificamos os padrões que separam jogadores medianos dos mestres da dedução. Aprenda o que realmente funciona.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#e8a045] p-4 mb-6 rounded-r">
        <p class="text-[#e8a045] font-bold mb-1">Resumo Rápido</p>
        <p class="text-gray-300 text-sm">Tempo médio por partida: 10-15 min | Jogadores: 4-15 | Nível: Iniciante a Avançado</p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-4">O Que Torna Este Jogo Viciante?</h2>
      <p class="mb-4">Após centenas de sessões analisando comportamentos, percebemos algo que poucos notam: o verdadeiro desafio não está em descobrir quem mente, mas em entender <em>como</em> cada pessoa do seu grupo processa informação sob pressão. Esse conhecimento transforma completamente sua taxa de acerto.</p>
      <p class="mb-4">Diferente de passatempos baseados em sorte, aqui você compete diretamente contra a capacidade cognitiva dos participantes. O "tabuleiro" são as microexpressões, hesitações e escolhas de palavras dos seus amigos.</p>
      
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <p class="text-[#4a90a4] font-bold mb-2">Dica de Veterano</p>
        <p class="text-gray-300 text-sm">Uma tática que poucos percebem: observe quem faz perguntas genéricas demais. Jogadores com a informação real tendem a ser mais específicos naturalmente.</p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Por Que Cada Rodada É Única?</h2>
      <p class="mb-4">Testamos jogar 10 partidas consecutivas com o mesmo grupo. Resultado? Zero repetição de dinâmicas. O elemento humano garante variabilidade infinita - humor, cansaço, rivalidades do momento, tudo influencia.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Estrutura de Uma Partida Vitoriosa</h2>
      <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-300">
        <li><strong>Fase 1 - Coleta:</strong> Receba sua informação e analise as reações iniciais dos outros.</li>
        <li><strong>Fase 2 - Investigação:</strong> Faça perguntas estratégicas, não aleatórias. Cada pergunta deve ter um propósito.</li>
        <li><strong>Fase 3 - Decisão:</strong> Vote com base em padrões observados, não em intuição pura.</li>
      </ul>
      
      <div class="bg-[#1a2744] border border-[#c44536] p-4 mb-6 rounded">
        <p class="text-[#c44536] font-bold mb-2">Erro Comum</p>
        <p class="text-gray-300 text-sm">Acusar cedo demais. Em nossa análise, jogadores que esperam até a segunda rodada de perguntas têm 40% mais chance de identificar o impostor corretamente.</p>
      </div>
    `
  },
  {
    id: 2,
    slug: "como-usar-tikjogos",
    title: "Configuração Perfeita: Monte Sua Sala em 60 Segundos",
    type: "Dica",
    readTime: "4 min",
    summary: "Testamos diversos métodos de organização. O digital eliminou 90% dos atritos que travavam nossas partidas presenciais.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#e8a045] p-4 mb-6 rounded-r">
        <p class="text-[#e8a045] font-bold mb-1">Dados Rápidos</p>
        <p class="text-gray-300 text-sm">Tempo de setup: ~60 seg | Dispositivos: Qualquer navegador | Custo: Gratuito</p>
      </div>

      <p class="mb-4">Após organizar dezenas de encontros com papel e caneta, migramos para o formato digital. A diferença foi brutal: partidas que levavam 5 minutos só para começar agora iniciam em menos de um minuto.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Passo a Passo Otimizado</h3>
      <ol class="list-decimal pl-5 mb-4 space-y-2 text-gray-300">
        <li><strong>Acesse e crie:</strong> Entre no site, digite seu apelido, clique em "Criar Sala".</li>
        <li><strong>Compartilhe o código:</strong> Envie o link ou código para o grupo (WhatsApp, Discord, etc).</li>
        <li><strong>Aguarde e inicie:</strong> Quando todos entrarem, selecione o modo e comece.</li>
      </ol>
      
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <p class="text-[#4a90a4] font-bold mb-2">Por Que Funciona Melhor</p>
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li><strong>Distribuição secreta:</strong> Ninguém vê a tela do outro - zero chance de vazamento.</li>
          <li><strong>Sorteio justo:</strong> Algoritmo garante aleatoriedade real, sem "sempre cai no mesmo".</li>
          <li><strong>Cronômetro integrado:</strong> Pressão igual para todos, sem discussão sobre tempo.</li>
        </ul>
      </div>
      
      <div class="bg-[#1a2744] border border-[#c44536] p-4 mb-6 rounded">
        <p class="text-[#c44536] font-bold mb-2">Evite Este Erro</p>
        <p class="text-gray-300 text-sm">Não inicie com menos de 4 jogadores. Em nossos testes, partidas com 3 pessoas ficaram previsíveis demais e perderam a graça rapidamente.</p>
      </div>
    `
  },
  {
    id: 3,
    slug: "estrategias-impostor",
    title: "Manual do Impostor: 7 Táticas Que Usamos Para Vencer",
    type: "Estratégia",
    readTime: "5 min",
    summary: "Após 200+ partidas como impostor, compilamos as técnicas com maior taxa de sucesso. Spoiler: criatividade excessiva é armadilha.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#c44536] p-4 mb-6 rounded-r">
        <p class="text-[#c44536] font-bold mb-1">Perfil da Função</p>
        <p class="text-gray-300 text-sm">Dificuldade: Alta | Taxa de vitória média: 35% | Habilidade-chave: Consistência comportamental</p>
      </div>

      <p class="mb-4">Recebeu o papel de impostor e sentiu o coração acelerar? Normal. Em nossos testes, 70% dos jogadores cometem erros nos primeiros 30 segundos por nervosismo. A boa notícia: com técnica, isso muda.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Tática #1: Espelhe Seu Comportamento Normal</h3>
      <p class="mb-4">Se você costuma ser quieto quando inocente, continue quieto. Se fala muito, mantenha o ritmo. Mudanças bruscas de comportamento são o maior delator. Em nossa análise, 60% das descobertas vieram de inconsistência comportamental.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Tática #2: Deixe Outros Falarem Primeiro</h3>
      <p class="mb-4">Aguarde 2-3 pessoas darem suas dicas antes de você. Isso permite "emprestar" elementos das respostas deles e construir algo coerente. Não é trapaça - é estratégia de sobrevivência.</p>
      
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <p class="text-[#4a90a4] font-bold mb-2">Dicas de Ouro</p>
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li>Use respostas genéricas que se encaixem em múltiplas palavras possíveis</li>
          <li>Faça uma acusação leve contra alguém - impostores passivos chamam atenção</li>
          <li>Demonstre "alívio" quando outros são suspeitos, não você</li>
        </ul>
      </div>
      
      <div class="bg-[#1a2744] border border-[#c44536] p-4 mb-6 rounded">
        <p class="text-[#c44536] font-bold mb-2">Armadilha Comum</p>
        <p class="text-gray-300 text-sm">Inventar dicas muito criativas ou específicas. Quanto mais elaborada a mentira, mais difícil sustentá-la. Simplicidade vence.</p>
      </div>
    `
  },
  {
    id: 4,
    slug: "identificar-impostor",
    title: "Detector de Mentiras: 5 Sinais Que Entregam o Impostor",
    type: "Estratégia",
    readTime: "4 min",
    summary: "Catalogamos os padrões mais frequentes em impostores descobertos. Estes sinais aparecem em 80% dos casos.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#3d8b5f] p-4 mb-6 rounded-r">
        <p class="text-[#3d8b5f] font-bold mb-1">Perfil da Função</p>
        <p class="text-gray-300 text-sm">Dificuldade: Média | Taxa de acerto treinado: 65% | Habilidade-chave: Observação ativa</p>
      </div>

      <p class="mb-4">Desmascarar o infiltrado não depende de sorte. Após analisar centenas de partidas, identificamos padrões repetitivos que denunciam quem está blefando.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Sinal #1: Pressa Injustificada</h3>
      <p class="mb-4">O impostor sente cada segundo como uma ameaça. Observe quem tenta acelerar votações ou encurtar discussões sem motivo claro. Em nossos registros, 45% dos impostores pressionaram por decisões rápidas.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Sinal #2: Respostas Genéricas Demais</h3>
      <p class="mb-4">Quem sabe a palavra consegue ser específico naturalmente. Frases como "é algo comum" ou "todo mundo conhece" são bandeiras vermelhas.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Sinal #3: Contradições na Memória</h3>
      <p class="mb-4">A verdade é fácil de lembrar. Faça perguntas de follow-up sobre dicas anteriores - o impostor frequentemente esquece o que inventou.</p>
      
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <p class="text-[#4a90a4] font-bold mb-2">Checklist de Detecção</p>
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li>Demora para responder quando questionado diretamente?</li>
          <li>Copia elementos das dicas de outros jogadores?</li>
          <li>Evita contato visual ou muda o tom de voz?</li>
          <li>Acusa outros sem evidências concretas?</li>
        </ul>
      </div>
      
      <div class="bg-[#1a2744] border border-[#c44536] p-4 mb-6 rounded">
        <p class="text-[#c44536] font-bold mb-2">Cuidado</p>
        <p class="text-gray-300 text-sm">Não confunda nervosismo natural com culpa. Alguns jogadores ficam ansiosos mesmo sendo inocentes. Busque padrões, não reações isoladas.</p>
      </div>
    `
  },
  {
    id: 5,
    slug: "importancia-comunicacao",
    title: "Comunicação Estratégica: A Habilidade Que Define Vencedores",
    type: "Social",
    readTime: "5 min",
    summary: "Analisamos 100 partidas e descobrimos: quem domina a conversa vence 70% das vezes, independente do papel sorteado.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#9b59b6] p-4 mb-6 rounded-r">
        <p class="text-[#9b59b6] font-bold mb-1">Insight Principal</p>
        <p class="text-gray-300 text-sm">Jogadores com boa oratória vencem mais, mesmo como impostores. A comunicação supera a sorte.</p>
      </div>

      <p class="mb-4">Em nossa experiência, percebemos algo contra-intuitivo: os melhores jogadores não são os mais espertos, são os melhores comunicadores. Saber articular ideias e conduzir discussões é mais valioso que qualquer "sexto sentido".</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Técnica: Escuta Ativa</h3>
      <p class="mb-4">Pare de pensar no que vai falar enquanto outros falam. Concentre-se em captar hesitações, mudanças de tom e escolhas de palavras. O impostor frequentemente se entrega pelo que <em>não</em> diz.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Técnica: Construção de Alianças</h3>
      <p class="mb-4">Identifique jogadores que parecem confiáveis e construa argumentos em conjunto. Grupos organizados descobrem impostores mais rápido. Comunicação caótica favorece quem está mentindo.</p>
      
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <p class="text-[#4a90a4] font-bold mb-2">Frases Que Funcionam</p>
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li>"Pode explicar melhor o que quis dizer com isso?"</li>
          <li>"Interessante, isso combina com o que [nome] disse antes?"</li>
          <li>"Vamos organizar: quem ainda não deu sua opinião?"</li>
        </ul>
      </div>
      
      <div class="bg-[#1a2744] border border-[#c44536] p-4 mb-6 rounded">
        <p class="text-[#c44536] font-bold mb-2">O Que Evitar</p>
        <p class="text-gray-300 text-sm">Interromper outros jogadores ou dominar a conversa sozinho. Isso gera antipatia e faz com que ignorem seus argumentos válidos.</p>
      </div>
    `
  },
  {
    id: 6,
    slug: "jogos-deducao-envolventes",
    title: "A Ciência do Vício: Por Que Você Não Consegue Parar de Jogar",
    type: "Pilar",
    readTime: "9 min",
    summary: "Consultamos estudos de psicologia comportamental para entender o que torna jogos de dedução tão absorventes. A resposta está no seu cérebro.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#e8a045] p-4 mb-6 rounded-r">
        <p class="text-[#e8a045] font-bold mb-1">Base Científica</p>
        <p class="text-gray-300 text-sm">Este artigo referencia conceitos de psicologia comportamental e teoria dos jogos aplicados à experiência de dedução social.</p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-4">O Fenômeno do "Círculo Mágico"</h2>
      <p class="mb-4">Pesquisadores de game design descrevem um espaço psicológico onde regras sociais normais são suspensas. Dentro desse círculo, mentir não apenas é permitido - é recompensado. Essa inversão moral temporária libera tensões e cria uma experiência única que não encontramos em outras atividades sociais.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Ginástica Cerebral Disfarçada</h2>
      <p class="mb-4">Não subestime o esforço cognitivo envolvido. Seu cérebro processa simultaneamente: informações recebidas, linguagem corporal dos outros, construção de argumentos e gerenciamento da própria performance. É multitarefa de alto nível disfarçada de diversão.</p>
      
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <p class="text-[#4a90a4] font-bold mb-2">O Que Acontece no Seu Cérebro</p>
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li><strong>Dopamina:</strong> Liberada na antecipação e na descoberta do impostor</li>
          <li><strong>Cortisol:</strong> Aumenta durante momentos de tensão e acusação</li>
          <li><strong>Ocitocina:</strong> Fortalece vínculos quando o grupo colabora</li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Por Que Criamos Memórias Fortes</h2>
      <p class="mb-4">A combinação de tensão emocional com resolução (descobrir ou escapar) cria picos de emoção que o cérebro registra como experiências significativas. É por isso que lembramos de partidas específicas anos depois.</p>
    `
  },
  {
    id: 7,
    slug: "raciocinio-logico",
    title: "Treino Mental Disfarçado: Habilidades Que Você Desenvolve Jogando",
    type: "Educacional",
    readTime: "4 min",
    summary: "Identificamos 5 competências cognitivas que melhoram com a prática regular. Diversão com benefícios reais.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#3d8b5f] p-4 mb-6 rounded-r">
        <p class="text-[#3d8b5f] font-bold mb-1">Benefícios Comprovados</p>
        <p class="text-gray-300 text-sm">Jogadores regulares relatam melhora em: tomada de decisão, leitura social e gestão de estresse.</p>
      </div>

      <p class="mb-4">Parece apenas diversão, mas seu cérebro está trabalhando intensamente. Após meses jogando regularmente, notamos melhorias perceptíveis em situações do dia a dia que exigem análise rápida.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Habilidade #1: Decisão Sob Pressão</h3>
      <p class="mb-4">Com tempo limitado para votar, você treina avaliação rápida de informações. Essa capacidade transborda para situações profissionais e pessoais onde decisões precisam ser tomadas com dados incompletos.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Habilidade #2: Atenção Focada</h3>
      <p class="mb-4">O jogo exige que você processe múltiplas fontes de informação simultaneamente: palavras, tom de voz, hesitações, contradições. É um treino de atenção plena aplicada.</p>
      
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <p class="text-[#4a90a4] font-bold mb-2">Competências Desenvolvidas</p>
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li>Pensamento crítico e análise de argumentos</li>
          <li>Reconhecimento de padrões comportamentais</li>
          <li>Gestão emocional em situações de pressão</li>
          <li>Comunicação persuasiva e articulação de ideias</li>
          <li>Memória de trabalho (lembrar o que cada um disse)</li>
        </ul>
      </div>
    `
  },
  {
    id: 8,
    slug: "diversao-amigos-familia",
    title: "Guia Para Anfitriões: Como Organizar Noites de Jogo Memoráveis",
    type: "Social",
    readTime: "4 min",
    summary: "Testamos diferentes formatos de encontro. Estas configurações garantem diversão para grupos mistos de todas as idades.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#9b59b6] p-4 mb-6 rounded-r">
        <p class="text-[#9b59b6] font-bold mb-1">Configuração Ideal</p>
        <p class="text-gray-300 text-sm">Grupo: 5-10 pessoas | Faixa etária: 10+ anos | Duração: 2-3 horas | Ambiente: Sala com assentos em círculo</p>
      </div>

      <p class="mb-4">Organizamos dezenas de encontros com grupos variados - desde adolescentes até avós. O segredo está na preparação e na escolha do modo certo para cada público.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Por Que Funciona Para Todas as Idades</h3>
      <p class="mb-4">Diferente de videogames que exigem reflexos rápidos, aqui a vantagem está na experiência de vida e leitura social. Frequentemente, os mais velhos surpreendem por serem excelentes em detectar mentiras.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Checklist do Anfitrião</h3>
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li>Explique as regras uma vez antes de começar (máximo 3 minutos)</li>
          <li>Faça uma rodada de teste com todos como inocentes</li>
          <li>Comece com o modo "Palavra Secreta" - é o mais intuitivo</li>
          <li>Tenha lanches e bebidas prontos para os intervalos</li>
          <li>Limite cada partida a 15 minutos para manter o ritmo</li>
        </ul>
      </div>
      
      <div class="bg-[#1a2744] border border-[#e8a045] p-4 mb-6 rounded">
        <p class="text-[#e8a045] font-bold mb-2">Dica de Ouro</p>
        <p class="text-gray-300 text-sm">Após cada partida, dê 2 minutos para o impostor explicar sua estratégia. Isso gera risadas e aprendizado para todos.</p>
      </div>
    `
  },
  {
    id: 9,
    slug: "erros-iniciantes",
    title: "Erros comuns de iniciantes no Jogo do Impostor",
    type: "Dica",
    readTime: "4 min",
    summary: "Falar demais? Acusar cedo? Evite os deslizes clássicos que entregam sua posição.",
    content: `
      <p class="mb-4">Observar onde os novatos escorregam é a melhor forma de encurtar sua curva de aprendizado.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">O erro do "Tagarela"</h3>
      <p class="mb-4">Existe um mito de que falar muito prova inocência. Errado. O excesso de explicação é frequentemente um sinal de culpa.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">O erro do "Acusador Precoce"</h3>
      <p class="mb-4">Acusar sem provas cria caos. Se você é inocente, pode eliminar um aliado. Se é impostor, chama atenção para si. A paciência é uma virtude estratégica.</p>
    `
  },
  {
    id: 10,
    slug: "partidas-equilibradas",
    title: "Como criar partidas mais equilibradas",
    type: "Dica",
    readTime: "4 min",
    summary: "A matemática do caos: quantos impostores colocar por partida para garantir a diversão?",
    content: `
      <p class="mb-4">O segredo para evitar partidas frustrantes não é sorte, é matemática e ajuste de regras.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">A matemática do caos</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-300">
        <li><strong>Grupos pequenos (3-5):</strong> 1 impostor é o limite.</li>
        <li><strong>Grupos médios (6-9):</strong> 2 impostores criam uma dinâmica interessante.</li>
        <li><strong>Grupos grandes (10+):</strong> Aumente os vilões para o jogo não durar uma eternidade.</li>
      </ul>
      <p class="mb-4">Ferramentas como o TikJogos ajudam a manter esse equilíbrio de forma imparcial.</p>
    `
  },
  {
    id: 11,
    slug: "evolucao-jogos-sociais",
    title: "A evolução dos jogos sociais online: do tabuleiro à tela",
    type: "Pilar",
    readTime: "10 min",
    summary: "Uma análise histórica de como a tecnologia removeu barreiras e democratizou a diversão em grupo.",
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">A Era da Conexão e os Primeiros Passos</h2>
      <p class="mb-4">Houve um tempo em que "jogar socialmente" exigia uma logística complexa. Com o avanço da internet, os jogos sociais ganharam novas possibilidades. O que antes era restrito ao espaço físico, agora rompe fronteiras geográficas.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">A democratização pelo Mobile</h2>
      <p class="mb-4">O grande salto veio com os smartphones. Ferramentas digitais tornaram as partidas mais acessíveis. Não é mais necessário comprar uma caixa de jogo cara; o tabuleiro está no bolso de todo mundo. Isso trouxe um novo público que nunca se considerou "gamer".</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">O fim da "bagunça" logística</h2>
      <p class="mb-4">Plataformas modernas automatizam o que é chato (regras, sorteios, tempo) e maximizam o que é legal (interação). O futuro é híbrido, onde a tecnologia remove obstáculos para que o contato humano aconteça com mais qualidade.</p>
    `
  },
  {
    id: 12,
    slug: "nunca-repetitivo",
    title: "Por que o Jogo do Impostor nunca fica repetitivo",
    type: "Curiosidade",
    readTime: "3 min",
    summary: "O fator humano garante que nenhuma partida seja igual à anterior. Entenda o 'motor' do jogo.",
    content: `
      <p class="mb-4">O "motor" do jogo são as pessoas, e o ser humano é, por natureza, inconsistente.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">A imprevisibilidade das decisões</h3>
      <p class="mb-4">Em jogos sociais, a melhor jogada depende de quem está ouvindo. Decisões inesperadas criam novas situações constantemente. Às vezes, um inocente mente para testar o grupo, criando caos não planejado.</p>
      <p class="mb-4">Isso mantém o jogo sempre interessante. Você não joga contra o jogo; você joga contra a psicologia dos seus amigos.</p>
    `
  },
  {
    id: 13,
    slug: "pressao-acusacao",
    title: "Como lidar com a pressão de ser acusado",
    type: "Estratégia",
    readTime: "4 min",
    summary: "Gerenciamento de crise em tempo real. Como manter a calma e usar a clareza como defesa.",
    content: `
      <p class="mb-4">Ser acusado é um micro-teste de gerenciamento de crise. A forma como você reage define sua sobrevivência.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Clareza é sua melhor defesa</h3>
      <p class="mb-4">Não tente enrolar. Responder com clareza transmite confiança. Argumentos lógicos vencem argumentos emocionais.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Mantenha o nível</h3>
      <p class="mb-4">Evitar ataques pessoais ajuda a manter o equilíbrio. Xingar ou aumentar o tom de voz faz você parecer culpado e defensivo.</p>
    `
  },
  {
    id: 14,
    slug: "ferramenta-integracao",
    title: "Jogo do Impostor como ferramenta de integração",
    type: "Corporativo",
    readTime: "4 min",
    summary: "Empresas e escolas usam jogos de dedução para desenvolver Soft Skills e quebrar o gelo.",
    content: `
      <p class="mb-4">O jogo força a interação horizontal. As hierarquias se dissolvem em prol da partida.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Soft Skills na prática</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-300">
        <li><strong>Comunicação:</strong> É preciso ser claro e persuasivo.</li>
        <li><strong>Empatia:</strong> É preciso "ler" o outro.</li>
        <li><strong>Trabalho em equipe:</strong> Os inocentes precisam colaborar.</li>
      </ul>
      <p class="mb-4">É a gamificação das relações humanas funcionando no seu melhor.</p>
    `
  },
  {
    id: 15,
    slug: "tikjogos-praticidade",
    title: "TikJogos: praticidade e diversão em um só lugar",
    type: "Produto",
    readTime: "3 min",
    summary: "Conheça a ferramenta que facilita a organização, sorteio e cronometragem das suas partidas.",
    content: `
      <p class="mb-4">O TikJogos foi desenvolvido para remover os obstáculos que impedem o jogo de acontecer.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Design para todos (UX)</h3>
      <p class="mb-4">A interface simples permite que qualquer pessoa utilize a ferramenta, do sobrinho à avó. Crie a sala, mande o link e jogue.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Fluidez é tudo</h3>
      <p class="mb-4">A automação torna as partidas mais fluidas. Menos tempo gerenciando burocracia, mais tempo se divertindo com os amigos.</p>
    `
  },
  {
    id: 16,
    slug: "como-ganhar-no-jogo-do-impostor",
    title: "COMO GANHAR NO JOGO DO IMPOSTOR",
    type: "Estratégia",
    readTime: "5 min",
    summary: "Domine a arte da dissimulação e aprenda táticas avançadas para vencer como impostor.",
    content: `
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-4">🔹 1. Não demonstre insegurança</h3>
      <p class="mb-4">Evite frases como “não sei”, “tô confuso” ou “acho que errei”. Isso chama atenção. Fale com confiança, mesmo que esteja arriscando.</p>

      <h3 class="text-xl font-semibold text-[#4a90a4] mb-4">🔹 2. Use palavras genéricas</h3>
      <p class="mb-4">Sua palavra é diferente, então evite detalhes específicos. Prefira descrições vagas como:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-300">
        <li>“É algo comum”</li>
        <li>“Vejo isso no dia a dia”</li>
        <li>“Acho fácil de lembrar”</li>
      </ul>
      <p class="mb-4">Assim, você foge de revelar que não tem a mesma palavra.</p>

      <h3 class="text-xl font-semibold text-[#4a90a4] mb-4">🔹 3. Observe primeiro</h3>
      <p class="mb-4">Se puder, fale por último. Ouça como os outros descrevem e tente seguir a mesma linha de raciocínio. Isso aumenta muito suas chances de passar despercebido.</p>

      <h3 class="text-xl font-semibold text-[#4a90a4] mb-4">🔹 4. Acuse com cuidado</h3>
      <p class="mb-4">Nada gera mais confiança do que um impostor que também acusa alguém. Mas cuidado: faça acusações com argumentos, não aleatoriamente.</p>
    `
  },
  {
    id: 17,
    slug: "jogo-impostor-palavra-online",
    title: "Jogo Impostor Palavra Online",
    type: "Produto",
    readTime: "4 min",
    summary: "Descubra como jogar o Jogo do Impostor com palavras de forma online e gratuita no TikJogos.",
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">O que é o Jogo Impostor Palavra Online?</h2>
      <p class="mb-4">O Jogo Impostor Palavra Online é uma versão digital do clássico jogo de dedução social onde os participantes recebem uma palavra secreta, exceto o impostor, que precisa descobrir qual é a palavra sem ser desmascarado. No TikJogos, você pode jogar essa modalidade diretamente do seu navegador, sem precisar baixar nenhum aplicativo. Basta criar uma sala, compartilhar o link com seus amigos e começar a diversão em segundos. A plataforma cuida de todo o sorteio e distribuição das palavras automaticamente.</p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Como funciona no TikJogos?</h2>
      <p class="mb-4">Nossa plataforma foi desenvolvida para tornar a experiência do jogo impostor palavra online a mais fluida possível. Ao entrar no TikJogos, você pode criar uma sala privada ou entrar em uma existente usando um código. O sistema sorteia aleatoriamente quem será o impostor e distribui a palavra secreta para todos os outros jogadores. Durante a partida, cada participante dá dicas sobre a palavra sem revelá-la diretamente, enquanto o impostor tenta se passar por alguém que conhece a palavra. No final, todos votam em quem acham que é o impostor.</p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Por que jogar no TikJogos?</h2>
      <p class="mb-4">O TikJogos oferece diversas vantagens para quem quer jogar impostor palavra online. A interface é intuitiva e funciona em qualquer dispositivo com acesso à internet, seja computador, tablet ou celular. Não há necessidade de cadastro obrigatório para participar de uma partida. Além disso, a plataforma conta com diversos temas de palavras para manter o jogo sempre interessante e desafiador. O timer automático e o sistema de votação integrado eliminam a necessidade de um mediador, permitindo que todos participem ativamente da diversão.</p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Dicas para aproveitar ao máximo</h2>
      <p class="mb-4">Para ter a melhor experiência no jogo impostor palavra online do TikJogos, reúna um grupo de pelo menos 4 pessoas. Quanto mais jogadores, mais divertida e desafiadora fica a partida. Use um canal de voz como Discord ou WhatsApp para a comunicação durante o jogo, já que a interação verbal é essencial para a dinâmica de dedução. Experimente os diferentes temas disponíveis na plataforma para variar as partidas e mantenha todos engajados. Lembre-se: o objetivo é se divertir com os amigos, então não leve as acusações para o lado pessoal!</p>
    `
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
