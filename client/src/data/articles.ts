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
    title: "O que é o Jogo do Impostor e por que ele faz tanto sucesso?",
    type: "Pilar",
    readTime: "8 min",
    summary: "Descubra a psicologia por trás da desconfiança e entenda por que esse jogo de dedução social conquistou milhões de pessoas.",
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">A psicologia por trás da desconfiança</h2>
      <p class="mb-4">Se você já participou de uma reunião de amigos onde a tensão se misturava com risadas nervosas, provavelmente estava jogando algo relacionado à dedução social. O Jogo do Impostor conquistou milhões de jogadores justamente por essa combinação única: ele une estratégia mental, observação afiada e muita interação social.</p>
      <p class="mb-4">Diferente de jogos de tabuleiro tradicionais, onde a sorte nos dados define o vencedor, aqui o "tabuleiro" é a mente dos outros jogadores. Cada rodada cria um clima de desconfiança saudável. Você não está lutando contra o jogo; está lutando contra a capacidade de mentir (ou de dizer a verdade) dos seus companheiros.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Por que nenhuma partida é igual?</h2>
      <p class="mb-4">A rejogabilidade é um dos pontos fortes desse gênero. Você pode jogar com o mesmo grupo de pessoas dez vezes seguidas, e as dez partidas serão completamente diferentes. Isso acontece porque o fator humano faz com que nenhuma partida seja igual à outra.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Como funciona a dinâmica básica</h2>
      <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-300">
        <li><strong>Recebimento de informações:</strong> Todos leem suas dicas, menos o impostor.</li>
        <li><strong>Rodada de discussão:</strong> Perguntas e respostas vagas para testar o conhecimento alheio.</li>
        <li><strong>Votação:</strong> O momento da verdade onde as alianças se rompem.</li>
      </ul>
      <p class="mb-4">No fim das contas, ganhar ou perder é detalhe. O que faz sucesso mesmo é a história que o grupo cria junto: aquela mentira descarada que colou ou a acusação perfeita que desmascarou o vilão no último segundo.</p>
    `
  },
  {
    id: 2,
    slug: "como-usar-tikjogos",
    title: "Como usar o TikJogos para partidas mais organizadas",
    type: "Dica",
    readTime: "4 min",
    summary: "Chega de bagunça com papel e caneta. Veja como a tecnologia pode eliminar a burocracia e focar na estratégia.",
    content: `
      <p class="mb-4">Quem joga o Jogo do Impostor "analogicamente" sabe que a bagunça é quase inevitável. O TikJogos surgiu para resolver esses atritos, funcionando como um juiz digital.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Centralizando a bagunça</h3>
      <p class="mb-4">O principal problema de grupos grandes é o fluxo de informação. "De quem é a vez?", "Quanto tempo falta?". O TikJogos centraliza essas informações e ajuda a manter o controle do andamento do jogo.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Vantagens de digitalizar a partida</h3>
      <ul class="list-disc pl-5 mb-4 space-y-2 text-gray-300">
        <li><strong>Sorteio imparcial:</strong> O algoritmo define o impostor, garantindo aleatoriedade real.</li>
        <li><strong>Sigilo:</strong> Cada um vê sua palavra/função na própria tela.</li>
        <li><strong>Timer automático:</strong> A pressão do tempo é real e igual para todos.</li>
      </ul>
      <p class="mb-4">Experimente rodar a próxima partida com o auxílio do site e perceba como o ritmo fica mais dinâmico.</p>
    `
  },
  {
    id: 3,
    slug: "estrategias-impostor",
    title: "Estratégias básicas para quem joga como impostor",
    type: "Estratégia",
    readTime: "5 min",
    summary: "Tirou a carta do Impostor? Não entre em pânico. Aprenda a mentir com coerência e usar os outros a seu favor.",
    content: `
      <p class="mb-4">Ser impostor exige mais do que simplesmente mentir. É fundamental manter um comportamento coerente durante toda a partida.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">A Regra de Ouro: Coerência</h3>
      <p class="mb-4">O maior erro dos novatos é tentar ser criativo demais. Se você costuma falar pouco quando é inocente, não comece a falar pelos cotovelos agora. Tente replicar seu "estado natural" de jogo.</p>
      
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Use os outros a seu favor</h3>
      <p class="mb-4">Deixe que os inocentes falem primeiro. Muitas vezes, um inocente confuso dá uma dica que você pode "roubar" e usar como se fosse sua. Jogar de impostor é a arte de se esconder à vista de todos.</p>
    `
  },
  {
    id: 4,
    slug: "identificar-impostor",
    title: "Dicas para identificar o impostor mais rápido",
    type: "Estratégia",
    readTime: "4 min",
    summary: "Aprenda a ler os sinais sutis, contradições e o comportamento apressado que entregam os mentirosos.",
    content: `
      <p class="mb-4">Encontrar o impostor não é um jogo de adivinhação, é um jogo de paciência e análise fria.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">O perigo da pressa</h3>
      <p class="mb-4">O impostor sente o tempo correr de forma diferente. Para ele, cada segundo de silêncio é uma tortura. Se alguém está tentando acelerar uma votação sem provas, ligue o radar.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">A caça às contradições</h3>
      <p class="mb-4">A verdade é fácil de lembrar porque é um fato. A mentira precisa ser sustentada. Preste atenção na memória do jogador e na vagueza excessiva das respostas.</p>
    `
  },
  {
    id: 5,
    slug: "importancia-comunicacao",
    title: "A importância da comunicação no Jogo do Impostor",
    type: "Social",
    readTime: "5 min",
    summary: "Não é sobre quem mente melhor, é sobre quem fala melhor. Descubra como a oratória define o vencedor.",
    content: `
      <p class="mb-4">A oratória e a capacidade de persuasão são as armas mais letais nessa arena.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">A arte de ouvir (Escuta Ativa)</h3>
      <p class="mb-4">Muitas vezes, o impostor se entrega não pelo que ele fala, mas pelo que ele deixa de falar. Escute o tom de voz e a coerência.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Construindo pontes</h3>
      <p class="mb-4">Ninguém ganha esse jogo sozinho. Um diálogo bem construído aumenta a confiança do grupo. Se a comunicação for caótica, o impostor vence pelo cansaço.</p>
    `
  },
  {
    id: 6,
    slug: "jogos-deducao-envolventes",
    title: "Por que jogos de dedução social são tão envolventes?",
    type: "Pilar",
    readTime: "9 min",
    summary: "Um mergulho profundo na psicologia dos jogos, o 'círculo mágico' da mentira e a química da emoção.",
    content: `
      <h2 class="text-2xl font-bold text-white mb-4">O "Círculo Mágico" da Mentira</h2>
      <p class="mb-4">Na teoria dos jogos, existe o conceito de "círculo mágico": um espaço onde as regras do mundo real são suspensas. No mundo real, mentir destrói a confiança. Dentro do jogo, mentir é a mecânica principal. Essa inversão de valores é liberadora.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">Um treino para o cérebro</h2>
      <p class="mb-4">Não se engane achando que é "apenas uma brincadeira". O esforço cognitivo para manter uma mentira coerente é imenso. Você precisa processar múltiplas camadas de informação simultaneamente: a palavra secreta, a informação social e sua própria performance.</p>
      
      <h2 class="text-2xl font-bold text-white mb-4 mt-8">A Química da Emoção</h2>
      <p class="mb-4">Quando jogamos, experimentamos picos de dopamina e cortisol. O suspense da incerteza e a revelação final criam uma descarga emocional forte que torna a experiência memorável e fortalece os vínculos de amizade.</p>
    `
  },
  {
    id: 7,
    slug: "raciocinio-logico",
    title: "Como o Jogo do Impostor melhora o raciocínio lógico",
    type: "Educacional",
    readTime: "4 min",
    summary: "Você não está apenas jogando, está treinando seu cérebro. Entenda os benefícios cognitivos.",
    content: `
      <p class="mb-4">Por trás da diversão, existe um verdadeiro exercício cognitivo acontecendo.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Decisão sob pressão</h3>
      <p class="mb-4">Você tem poucos segundos para decidir se confia na pessoa ao seu lado. Esse processo fortalece o pensamento crítico e a capacidade de avaliação.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">O treino da atenção plena</h3>
      <p class="mb-4">O jogo ensina seu cérebro a estar "ligado" e a buscar coerência onde parece haver caos, notando padrões e pausas estranhas na fala dos oponentes.</p>
    `
  },
  {
    id: 8,
    slug: "diversao-amigos-familia",
    title: "Jogo do Impostor: diversão para amigos e família",
    type: "Social",
    readTime: "4 min",
    summary: "Uma atividade que nivela o campo de jogo e permite que gerações diferentes se divirtam juntas.",
    content: `
      <p class="mb-4">O Jogo do Impostor é ideal para grupos variados porque não exige reflexos rápidos de videogame, apenas interação humana.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Acessibilidade é a chave</h3>
      <p class="mb-4">As regras simples permitem que qualquer pessoa participe. O avô pode ser tão bom impostor quanto o neto, pois a mecânica é social.</p>
      <h3 class="text-xl font-semibold text-[#4a90a4] mb-2">Quebrando o gelo</h3>
      <p class="mb-4">Em festas, o jogo atua como um lubrificante social perfeito, gerando momentos leves, engraçados e histórias que serão lembradas por muito tempo.</p>
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
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}
