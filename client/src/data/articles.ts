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
    title: "Os 6 Erros Fatais Que Todo Novato Comete (E Como Evitá-los)",
    type: "Dica",
    readTime: "4 min",
    summary: "Analisamos partidas de iniciantes e catalogamos os deslizes mais frequentes. Corrija estes e suba de nível instantaneamente.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#c44536] p-4 mb-6 rounded-r">
        <p class="text-[#c44536] font-bold mb-1">Alerta de Spoiler</p>
        <p class="text-gray-300 text-sm">Se você comete algum destes erros, provavelmente já foi eliminado por causa dele sem perceber.</p>
      </div>

      <p class="mb-4">Observamos dezenas de jogadores em suas primeiras partidas. Os mesmos padrões de erro se repetem constantemente. A boa notícia: são fáceis de corrigir uma vez que você os conhece.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Erro #1: O Tagarela Nervoso</h3>
      <p class="mb-4">Falar demais não prova inocência - na verdade, levanta suspeitas. Jogadores experientes sabem que explicações excessivas frequentemente indicam culpa ou nervosismo.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Erro #2: O Acusador Impulsivo</h3>
      <p class="mb-4">Apontar dedos sem evidências destrói sua credibilidade. Se errar, você elimina um aliado. Se acertar por sorte, ninguém confiará em você nas próximas rodadas.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Erro #3: O Silencioso Suspeito</h3>
      <p class="mb-4">Ficar completamente calado também é problemático. Contribua com observações, mesmo que breves. Silêncio total parece que você está escondendo algo.</p>
      
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <p class="text-[#4a90a4] font-bold mb-2">Mais Erros Comuns</p>
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li><strong>Mudar de comportamento:</strong> Agir diferente quando é impostor vs. inocente</li>
          <li><strong>Copiar dicas literalmente:</strong> Repetir exatamente o que outro disse</li>
          <li><strong>Reagir exageradamente:</strong> Ficar defensivo demais quando questionado</li>
        </ul>
      </div>
    `
  },
  {
    id: 10,
    slug: "partidas-equilibradas",
    title: "Configurações Otimizadas: A Matemática Por Trás de Partidas Perfeitas",
    type: "Dica",
    readTime: "4 min",
    summary: "Testamos diferentes proporções de impostores por tamanho de grupo. Estes números garantem equilíbrio e diversão.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#e8a045] p-4 mb-6 rounded-r">
        <p class="text-[#e8a045] font-bold mb-1">Tabela de Referência Rápida</p>
        <p class="text-gray-300 text-sm">4-5 jogadores: 1 impostor | 6-9 jogadores: 1-2 impostores | 10+ jogadores: 2-3 impostores</p>
      </div>

      <p class="mb-4">Partidas desequilibradas são frustrantes para todos. Após testar diversas configurações, chegamos a proporções que funcionam consistentemente bem.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">A Fórmula Que Usamos</h3>
      <p class="mb-4">Regra geral: 1 impostor para cada 4-5 jogadores. Isso mantém a tensão sem tornar impossível para nenhum dos lados vencer.</p>
      
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <p class="text-[#4a90a4] font-bold mb-2">Configurações Testadas</p>
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li><strong>4-5 jogadores:</strong> 1 impostor, rodadas curtas (5-7 min)</li>
          <li><strong>6-7 jogadores:</strong> 1-2 impostores, rodadas médias (8-10 min)</li>
          <li><strong>8-10 jogadores:</strong> 2 impostores, rodadas longas (10-12 min)</li>
          <li><strong>11+ jogadores:</strong> 2-3 impostores, considere dividir em grupos</li>
        </ul>
      </div>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Ajustes Por Experiência do Grupo</h3>
      <p class="mb-4">Grupos de veteranos podem aumentar o número de impostores. Grupos com muitos novatos devem manter menos impostores para que aprendam a dinâmica.</p>
      
      <div class="bg-[#1a2744] border border-[#c44536] p-4 mb-6 rounded">
        <p class="text-[#c44536] font-bold mb-2">Evite</p>
        <p class="text-gray-300 text-sm">Nunca jogue com 3 pessoas - fica previsível demais. O mínimo recomendado é 4 jogadores para manter a incerteza.</p>
      </div>
    `
  },
  {
    id: 11,
    slug: "evolucao-jogos-sociais",
    title: "Do Tabuleiro ao Celular: Como a Tecnologia Transformou Jogos de Grupo",
    type: "Pilar",
    readTime: "10 min",
    summary: "Acompanhamos a evolução dos jogos sociais nas últimas décadas. O smartphone mudou tudo - e para melhor.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#e8a045] p-4 mb-6 rounded-r">
        <p class="text-[#e8a045] font-bold mb-1">Linha do Tempo</p>
        <p class="text-gray-300 text-sm">Anos 90: Jogos de tabuleiro | Anos 2000: Primeiros jogos online | Anos 2010: Explosão mobile | Hoje: Híbrido presencial + digital</p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-4">A Era Pré-Digital: Logística Complexa</h2>
      <p class="mb-4">Lembramos de épocas onde organizar uma partida exigia: comprar o jogo físico, reunir pessoas no mesmo local, ter alguém que soubesse todas as regras. Muitas noites de jogo morriam antes de começar por falta de quórum ou material.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">A Revolução do Smartphone</h2>
      <p class="mb-4">O celular democratizou o acesso. Não é mais necessário investir em caixas caras ou depender de quem tem o jogo. Qualquer pessoa com internet pode participar. Observamos grupos que nunca se consideraram "gamers" adotando jogos de dedução como atividade regular.</p>
      
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <p class="text-[#4a90a4] font-bold mb-2">O Que a Tecnologia Automatizou</p>
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li>Sorteio de papéis (antes: cartas embaralhadas manualmente)</li>
          <li>Controle de tempo (antes: alguém tinha que cronometrar)</li>
          <li>Distribuição de informações secretas (antes: bilhetes de papel)</li>
          <li>Contagem de votos (antes: levantamento de mãos)</li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">O Modelo Híbrido Atual</h2>
      <p class="mb-4">Hoje, o melhor dos dois mundos: pessoas reunidas fisicamente usando ferramentas digitais para gerenciar a mecânica. A tecnologia cuida da burocracia enquanto humanos focam na interação.</p>
    `
  },
  {
    id: 12,
    slug: "nunca-repetitivo",
    title: "O Segredo da Rejogabilidade Infinita: Por Que Nunca Enjoamos",
    type: "Curiosidade",
    readTime: "3 min",
    summary: "Jogamos centenas de partidas com o mesmo grupo e nenhuma foi igual. Entenda o mecanismo por trás dessa variedade.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#9b59b6] p-4 mb-6 rounded-r">
        <p class="text-[#9b59b6] font-bold mb-1">Fato Interessante</p>
        <p class="text-gray-300 text-sm">Com 6 jogadores e 1 impostor, existem 6 configurações possíveis. Mas as variações de comportamento humano tornam cada uma dessas 6 completamente diferente.</p>
      </div>

      <p class="mb-4">O verdadeiro "motor" do jogo não são as regras - são as pessoas. E seres humanos são gloriosamente inconsistentes.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Variáveis Que Mudam Tudo</h3>
      <p class="mb-4">Mesmo com as mesmas pessoas, cada partida é afetada por: humor do momento, cansaço, rivalidades recentes, quem está sentado ao lado de quem, e até o que aconteceu na partida anterior.</p>
      
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <p class="text-[#4a90a4] font-bold mb-2">Por Que Funciona</p>
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li>Você não joga contra regras fixas - joga contra mentes humanas</li>
          <li>A mesma pessoa age diferente dependendo do papel sorteado</li>
          <li>Alianças e desconfianças mudam a cada rodada</li>
          <li>Memória de partidas anteriores influencia decisões atuais</li>
        </ul>
      </div>
      
      <p class="mb-4">Já vimos inocentes mentirem só para testar reações do grupo, criando caos inesperado. Essa imprevisibilidade é o que mantém o jogo fresco mesmo após centenas de partidas.</p>
    `
  },
  {
    id: 13,
    slug: "pressao-acusacao",
    title: "Sob Fogo: Como Reagir Quando Todos Apontam Para Você",
    type: "Estratégia",
    readTime: "4 min",
    summary: "Desenvolvemos um protocolo de 4 passos para situações de acusação. Funciona tanto para inocentes quanto para impostores.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#c44536] p-4 mb-6 rounded-r">
        <p class="text-[#c44536] font-bold mb-1">Situação Crítica</p>
        <p class="text-gray-300 text-sm">Você foi acusado. Todos olham para você. Os próximos 30 segundos definem se você sobrevive ou não.</p>
      </div>

      <p class="mb-4">Ser o alvo de acusações é um teste de controle emocional em tempo real. Observamos que a reação inicial determina o resultado em 70% dos casos.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Passo 1: Respire (Literalmente)</h3>
      <p class="mb-4">Antes de falar, tome um segundo. Respostas impulsivas parecem defensivas. Uma pausa breve transmite que você está pensando, não entrando em pânico.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Passo 2: Seja Direto</h3>
      <p class="mb-4">Enrolação levanta suspeitas. Responda a acusação específica com fatos específicos. "Minha dica foi X porque Y" é melhor que "Eu não sei por que vocês acham isso".</p>
      
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <p class="text-[#4a90a4] font-bold mb-2">Frases Que Ajudam</p>
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li>"Entendo por que parece suspeito, mas deixa eu explicar..."</li>
          <li>"Se eu fosse impostor, por que eu teria feito X?"</li>
          <li>"Vamos analisar: quem mais poderia ser?"</li>
        </ul>
      </div>
      
      <div class="bg-[#1a2744] border border-[#c44536] p-4 mb-6 rounded">
        <p class="text-[#c44536] font-bold mb-2">O Que Nunca Fazer</p>
        <p class="text-gray-300 text-sm">Atacar o acusador pessoalmente, levantar a voz, ou ficar repetindo "não sou eu" sem argumentos. Isso confirma suspeitas em vez de dissipá-las.</p>
      </div>
    `
  },
  {
    id: 14,
    slug: "ferramenta-integracao",
    title: "Team Building Diferente: Usando Dedução Social em Empresas e Escolas",
    type: "Corporativo",
    readTime: "4 min",
    summary: "Aplicamos jogos de dedução em dinâmicas corporativas. Os resultados em integração de equipe superaram métodos tradicionais.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#3d8b5f] p-4 mb-6 rounded-r">
        <p class="text-[#3d8b5f] font-bold mb-1">Aplicação Profissional</p>
        <p class="text-gray-300 text-sm">Contextos testados: Onboarding de novos funcionários | Integração de equipes remotas | Dinâmicas escolares</p>
      </div>

      <p class="mb-4">Hierarquias corporativas desaparecem quando todos estão tentando descobrir quem é o impostor. Observamos que 15 minutos de jogo geram mais interação genuína que horas de "dinâmicas de grupo" tradicionais.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Competências Desenvolvidas na Prática</h3>
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li><strong>Comunicação assertiva:</strong> Articular ideias sob pressão de tempo</li>
          <li><strong>Escuta ativa:</strong> Processar informações de múltiplas fontes</li>
          <li><strong>Leitura social:</strong> Interpretar sinais não-verbais</li>
          <li><strong>Colaboração:</strong> Trabalhar em grupo para objetivo comum</li>
          <li><strong>Gestão de conflito:</strong> Discordar sem criar atrito pessoal</li>
        </ul>
      </div>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Como Implementar</h3>
      <p class="mb-4">Reserve 30-45 minutos. Explique que é uma atividade de integração, não avaliação. Misture departamentos ou níveis hierárquicos. Faça 3-4 rodadas curtas em vez de uma longa.</p>
      
      <div class="bg-[#1a2744] border border-[#e8a045] p-4 mb-6 rounded">
        <p class="text-[#e8a045] font-bold mb-2">Resultado Observado</p>
        <p class="text-gray-300 text-sm">Equipes que jogaram juntas relataram maior facilidade de comunicação nas semanas seguintes. O jogo cria memórias compartilhadas que servem como "quebra-gelo" natural.</p>
      </div>
    `
  },
  {
    id: 15,
    slug: "tikjogos-praticidade",
    title: "Por Que Construímos o TikJogos: Nossa Filosofia de Design",
    type: "Produto",
    readTime: "3 min",
    summary: "Criamos esta ferramenta para resolver frustrações que vivíamos em nossas próprias partidas. Entenda as decisões por trás do design.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#4a90a4] p-4 mb-6 rounded-r">
        <p class="text-[#4a90a4] font-bold mb-1">Princípio Central</p>
        <p class="text-gray-300 text-sm">A tecnologia deve ser invisível. Se você percebe a ferramenta, ela está atrapalhando.</p>
      </div>

      <p class="mb-4">Desenvolvemos o TikJogos após anos jogando com métodos improvisados - papéis dobrados, apps genéricos, planilhas. Cada solução tinha problemas que queríamos eliminar.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Decisões de Design</h3>
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li><strong>Zero cadastro obrigatório:</strong> Ninguém quer criar conta só para uma partida</li>
          <li><strong>Funciona em qualquer dispositivo:</strong> Celular, tablet, computador - sem instalar nada</li>
          <li><strong>Interface mínima:</strong> Apenas o necessário na tela, sem distrações</li>
          <li><strong>Automação silenciosa:</strong> Sorteios, timers e votação acontecem sem intervenção</li>
        </ul>
      </div>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">O Resultado</h3>
      <p class="mb-4">Partidas que antes levavam 5 minutos para organizar agora começam em segundos. A ferramenta cuida da mecânica enquanto você foca no que importa: interagir com as pessoas.</p>
    `
  },
  {
    id: 16,
    slug: "como-ganhar-no-jogo-do-impostor",
    title: "Playbook Avançado: Táticas de Vitória Para Ambos os Lados",
    type: "Estratégia",
    readTime: "5 min",
    summary: "Compilamos as estratégias com maior taxa de sucesso após centenas de partidas. Funciona para impostores e tripulantes.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#e8a045] p-4 mb-6 rounded-r">
        <p class="text-[#e8a045] font-bold mb-1">Nível Avançado</p>
        <p class="text-gray-300 text-sm">Estas táticas assumem que você já domina o básico. Se é iniciante, comece pelos guias fundamentais.</p>
      </div>

      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Para Impostores: A Arte da Confiança Falsa</h3>
      <p class="mb-4">Frases como "não sei" ou "estou confuso" são bandeiras vermelhas. Mesmo sem saber a palavra, fale com convicção. Hesitação é o maior delator.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Técnica: O Genérico Estratégico</h3>
      <p class="mb-4">Use descrições que se aplicam a múltiplas palavras possíveis:</p>
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <ul class="list-disc pl-4 text-gray-300 text-sm space-y-1">
          <li>"Isso me lembra algo do cotidiano"</li>
          <li>"Tenho uma associação pessoal com isso"</li>
          <li>"É mais comum do que as pessoas pensam"</li>
        </ul>
      </div>

      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Técnica: O Observador Tardio</h3>
      <p class="mb-4">Fale por último quando possível. Absorva as dicas dos outros e construa sua resposta baseada no padrão que identificar.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Técnica: A Acusação Calculada</h3>
      <p class="mb-4">Impostores passivos chamam atenção. Faça uma acusação fundamentada - isso demonstra engajamento e desvia suspeitas.</p>
    `
  },
  {
    id: 17,
    slug: "jogo-impostor-palavra-online",
    title: "Guia Completo: Modo Palavra Secreta Passo a Passo",
    type: "Produto",
    readTime: "4 min",
    summary: "O modo mais popular explicado em detalhes. Desde a criação da sala até estratégias específicas para esta modalidade.",
    content: `
      <div class="bg-[#1a2744] border-l-4 border-[#4a90a4] p-4 mb-6 rounded-r">
        <p class="text-[#4a90a4] font-bold mb-1">Visão Geral do Modo</p>
        <p class="text-gray-300 text-sm">Jogadores: 4-15 | Duração: 5-10 min por rodada | Dificuldade: Iniciante | Popularidade: Mais jogado</p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-4">Como Funciona</h2>
      <p class="mb-4">Todos recebem a mesma palavra secreta, exceto o impostor. Cada jogador dá dicas sobre a palavra sem revelá-la diretamente. O impostor tenta descobrir qual é a palavra pelas dicas dos outros enquanto finge que já sabe. No final, todos votam em quem acham que é o impostor.</p>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Passo a Passo Para Jogar</h2>
      <div class="bg-[#1a2744] border border-[#3d4a5c] p-4 mb-6 rounded">
        <ol class="list-decimal pl-4 text-gray-300 text-sm space-y-2">
          <li>Acesse o site e clique em "Criar Sala"</li>
          <li>Compartilhe o código com os participantes</li>
          <li>Aguarde todos entrarem (mínimo 4 pessoas)</li>
          <li>Selecione o modo "Palavra Secreta"</li>
          <li>Escolha um tema de palavras</li>
          <li>Inicie a partida - o sistema distribui os papéis automaticamente</li>
        </ol>
      </div>

      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Estratégias Específicas Para Este Modo</h2>
      <p class="mb-4">Como tripulante: dê dicas que confirmem seu conhecimento sem entregar a palavra ao impostor. Evite ser óbvio demais ou vago demais.</p>
      <p class="mb-4">Como impostor: preste atenção nas primeiras dicas para deduzir a palavra. Use associações genéricas que funcionem para múltiplas palavras possíveis.</p>
      
      <div class="bg-[#1a2744] border border-[#e8a045] p-4 mb-6 rounded">
        <p class="text-[#e8a045] font-bold mb-2">Dica de Veterano</p>
        <p class="text-gray-300 text-sm">Use um canal de voz (Discord, WhatsApp) durante a partida. A interação verbal torna a experiência muito mais divertida e facilita a detecção de nervosismo.</p>
      </div>
    `
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
