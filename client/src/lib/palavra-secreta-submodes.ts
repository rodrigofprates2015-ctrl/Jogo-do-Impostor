export type PalavraSuperSecretaSubmode = 'classico' | 'natal' | 'estrategia' | 'animes' | 'herois' | 'seriesMisterio' | 'valorant' | 'futebol' | 'disney' | 'roblox' | 'supernatural' | 'dragonball' | 'naruto' | 'rock' | 'minecraft' | 'gta';

export const PALAVRA_SECRETA_SUBMODES: Record<PalavraSuperSecretaSubmode, { title: string; desc: string; longDesc?: string; words: string[]; image?: string }> = {
  classico: {
    title: 'Clássico',
    desc: 'Palavras aleatórias do dia a dia',
    longDesc: 'Teste seu conhecimento geral e blefe com seus amigos usando palavras comuns do cotidiano. Ideal para quem está começando ou quer uma partida descontraída.',
    image: 'https://img.freepik.com/vetores-gratis/gradiente-de-volta-a-colecao-de-elementos-da-escola_52683-87525.jpg?semt=ais_incoming&w=740&q=80',
    words: ['Sol', 'Carro', 'Casa', 'Cachorro', 'Computador', 'Montanha', 'Pizza', 'Escola', 'Roupa', 'Avião', 'Janela', 'Telefone', 'Bola', 'Relógio', 'Flor', 'Gelo', 'Música', 'Prédio', 'Caminhão', 'Praia']
  },
  natal: {
    title: 'Natal',
    desc: 'Palavras natalinas e de fim de ano',
    longDesc: 'Celebre as festas de fim de ano com palavras relacionadas ao Natal. Perfeito para reuniões em família e comemorações especiais.',
    image: '/submode-natal.png',
    words: [
      'Papai Noel', 'Jesus Cristo', 'Anjo', 'Menino Jesus', 'Reis Magos', 'Elfo', 'Rena', 'Família',
      'Árvore de Natal', 'Presentes', 'Luzes', 'Pisca-pisca', 'Estrela', 'Sino', 'Vela', 'Guirlanda',
      'Bola de Natal', 'Presépio', 'Meia', 'Trenó', 'Chaminé', 'Boneco de neve', 'Floco de neve',
      'Bota', 'Gorro', 'Festão', 'Ceia', 'Peru', 'Panetone', 'Rabanada', 'Uva-passa', 'Nozes',
      'Castanha', 'Vinho quente', 'Canções natalinas', 'Cartão de Natal', 'Tradição', 'Véspera',
      'Amor', 'Paz', 'Esperança', 'Alegria', 'União', 'Magia', 'Perdão', 'Generosidade', 'Harmonia',
      'Fraternidade', 'Reflexão', 'Gratidão', 'Renovação'
    ]
  },
  estrategia: {
    title: 'Clash Royale',
    desc: 'Termos do mundo dos games de estratégia',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando termos do Clash Royale. Nossa lista inclui personagens clássicos, tropas, feitiços e itens de batalha.',
    image: '/submode-clash-royale.png',
    words: ['Mago', 'Príncipe', 'Mosqueteira', 'Gigante', 'Arqueiras', 'Corredor', 'P.E.K.K.A', 'Golem', 'Dragão Bebê', 'Bruxa', 'Mineiro', 'Cavaleiro', 'Barril de Goblins', 'Tronco', 'Tesla', 'Lava Hound', 'Lenhador', 'Fantasma Real', 'Mago de Gelo', 'Executor']
  },
  animes: {
    title: 'Mundo dos Animes',
    desc: 'Termos do universo das animações japonesas',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando termos do mundo das animações japonesas. Nossa lista inclui heróis lendários, vilões poderosos, técnicas secretas e itens icônicos.',
    image: '/submode-animes.png',
    words: ['Goku', 'Naruto', 'Luffy', 'Tanjiro', 'Mikasa', 'Saitama', 'Sasuke', 'Deku', 'Gojo', 'Ichigo', 'Sharingan', 'Bankai', 'Kamehameha', 'Rasengan', 'Titan', 'Shinigami', 'Chakra', 'Espada Nichirin', 'Akatsuki', 'Grimório']
  },
  herois: {
    title: 'Universo dos Super-Heróis',
    desc: 'Termos do mundo dos quadrinhos e cinema',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando termos do mundo dos quadrinhos e do cinema. Nossa lista inclui heróis clássicos, vilões intergalácticos e itens mágicos do universo de super-heróis.',
    image: '/submode-marvel.png',
    words: ['Homem-Aranha', 'Thor', 'Hulk', 'Capitão América', 'Homem de Ferro', 'Viúva Negra', 'Pantera Negra', 'Doutor Estranho', 'Thanos', 'Loki', 'Ultron', 'Groot', 'Rocket', 'Wanda', 'Visão', 'Escudo', 'Mjölnir', 'Joia do Infinito', 'Hydra', 'Vibranium']
  },
  seriesMisterio: {
    title: 'Stranger Things',
    desc: 'Termos do mundo das séries de suspense',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando termos do Stranger Things. Nossa lista inclui personagens enigmáticos, locais misteriosos e criaturas sobrenaturais.',
    image: '/submode-stranger-things.png',
    words: ['Eleven', 'Mike', 'Lucas', 'Dustin', 'Will', 'Max', 'Hopper', 'Joyce', 'Vecna', 'Demogorgon', 'Mind Flayer', 'Hawkins', 'Upside Down', 'Barb', 'Robin', 'Steve', 'Billy', 'Eddie', 'Murray', 'Kali', 'Brenner', 'Suzie', 'Erica', 'Laboratório', 'Neva', 'Walkie-talkie', 'Arcade', 'Starcourt', 'Hellfire', 'Byers']
  },
  futebol: {
    title: 'Futebol',
    desc: 'Times brasileiros de futebol',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando nomes dos principais times de futebol do Brasil. Criado por Maylon.',
    image: 'https://media.torcedores.com/wp-content/uploads/2025/01/clubes-brasileiros-torcedores-768x512.webp',
    words: ['Flamengo', 'Corinthians', 'São Paulo', 'Palmeiras', 'Santos', 'Vasco da Gama', 'Cruzeiro', 'Grêmio', 'Internacional', 'Atlético Mineiro', 'Fluminense', 'Botafogo', 'Atlético Paranaense', 'Bahia', 'Esporte', 'Vitória', 'Coritiba', 'Goiás', 'Fortaleza', 'Ceará']
  },
  disney: {
    title: 'Disney',
    desc: 'Personagens e filmes da Disney',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando termos do universo Disney. Nossa lista inclui personagens clássicos, princesas, filmes e muito mais. Criado por @Luciana.',
    image: 'https://lumiere-a.akamaihd.net/v1/images/au_shop_disney_po_card_m_b2c9fa25.jpeg?region=0,0,1024,640&width=768',
    words: ['Mickey', 'Minnie', 'Donald', 'Pateta', 'Plutão', 'Princesa', 'Castelo', 'Pixar', 'Maravilha', 'Star Wars', 'Congelado', 'Elsa', 'Ana', 'Simba', 'Rei Leão', 'Aladdin', 'Jasmim', 'Ariel', 'Moana', 'Rapunzel', 'Encanto', 'Buzz Lightyear', 'Woody', 'Toy Story', 'Nemo', 'Monstros SA', 'Ponto', 'Pocahontas', 'Bela', 'Fera']
  },
  valorant: {
    title: 'Valorant',
    desc: 'Termos do FPS tático da Riot Games',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando termos do Valorant. Nossa lista inclui agentes, mapas, armas, ranks e mecânicas do jogo.',
    image: 'https://s2-ge.glbimg.com/N7BSSNFFK-QSWrgf0n_e0piPtDo=/0x0:2560x1440/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/4/G/xXHeVfTGe4bMldoEdMRQ/valorant-riot-games.jpg',
    words: ['Spike', 'Plant', 'Defuse', 'Clutch', 'Ace', 'Headshot', 'Ranked', 'Radiant', 'Immortal', 'Ascendant', 'Diamond', 'Platinum', 'Gold', 'Jett', 'Phoenix', 'Sage', 'Sova', 'Viper', 'Cypher', 'Reyna', 'Killjoy', 'Breach', 'Omen', 'Raze', 'Skye', 'Yoru', 'Astra', 'KAY/O', 'Chamber', 'Neon', 'Fade', 'Harbor', 'Gekko', 'Deadlock', 'Iso', 'Clove', 'Vyse', 'Ascent', 'Bind', 'Haven', 'Split', 'Breeze', 'Fracture', 'Lotus', 'Icebox', 'Pearl', 'Sunset', 'Vandal', 'Phantom', 'Operator', 'Sheriff', 'Spectre', 'Guardian']
  },
  roblox: {
    title: 'Roblox',
    desc: 'Termos da plataforma de jogos online',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando termos do Roblox. Nossa lista inclui jogos populares, itens, moedas e gírias da comunidade.',
    image: 'https://mms.businesswire.com/media/20250721501887/en/1572614/22/Roblox_Logo_2022-1.jpg',
    words: ['Robux', 'Avatar', 'Noob', 'Admin', 'Ban', 'Parkour', 'Tycoon', 'Adopt Me', 'Brookhaven', 'Bloxburg', 'Murder Mystery 2', 'Doors', 'Piggy', 'Pet Simulator', 'Obby', 'Oof', 'Builder\'s Club', 'Premium', 'Evento', 'Skin', 'Item', 'Chat', 'Mapa', 'Servidor', 'Hacker', 'Glitch', 'Trade', 'Showcase', 'Tower of Hell', 'Arsenal', 'MeepCity', 'BedWars', 'Natural Disaster', 'Jailbreak']
  },
  supernatural: {
    title: 'Supernatural',
    desc: 'Termos da série de caçadores sobrenaturais',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando termos da série Supernatural. Nossa lista inclui personagens icônicos, criaturas, armas e locais místicos.',
    image: 'https://s2-techtudo.glbimg.com/PHWR4IpnXdwfzsE1Pnpx4a-I1Rg=/0x0:1152x642/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/Q/B/jsII7RTcinvxCpSjcrRg/divulgacao-warner-bros.jpg',
    words: ['Dean Winchester', 'Sam Winchester', 'Castiel', 'Crowley', 'Impala 67', 'Bobby Singer', 'Lucifer', 'Anjo', 'Demônio', 'Fantasma', 'Sal Grosso', 'Água Benta', 'Bunker', 'Apocalipse', 'Caçador', 'Diário de John', 'Purgatório', 'Inferno', 'Céu', 'Colt', 'Faca de Ruby', 'Marca de Caim', 'Possessão', 'Exorcismo', 'Encruzilhada', 'Pacto', 'John Winchester', 'Mary Winchester', 'Rowena', 'Chuck (Deus)', 'Escuridão (Amara)', 'Metatron', 'Leviatã', 'Vampiro', 'Lobisomem', 'Kansas']
  },
  dragonball: {
    title: 'Dragon Ball',
    desc: 'Termos do universo dos Saiyajins',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando termos do Dragon Ball. Nossa lista inclui personagens lendários, transformações, técnicas e itens místicos.',
    image: 'https://jpimg.com.br/uploads/2018/04/dragon-ball-z.jpg',
    words: ['Goku', 'Vegeta', 'Gohan', 'Piccolo', 'Freeza', 'Cell', 'Majin Boo', 'Esferas do Dragão', 'Shenlong', 'Saiyajin', 'Super Saiyajin', 'Kamehameha', 'Genki Dama', 'Fusão', 'Potara', 'Trunks', 'Goten', 'Bulma', 'Kuririn', 'Mestre Kame', 'Nuvem Voadora', 'Radar do Dragão', 'Torneio de Artes Marciais', 'Ki', 'Teletransporte', 'Androide 18', 'Bills', 'Whis', 'Broly', 'Planeta Vegeta', 'Oozaru (Macaco Gigante)', 'Senhor Kaioh', 'Semente dos Deuses', 'Zeno', 'Bardock', 'Cápsula Corp']
  },
  naruto: {
    title: 'Naruto',
    desc: 'Termos do mundo ninja de Konoha',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando termos do Naruto. Nossa lista inclui ninjas lendários, jutsus poderosos, vilas e técnicas secretas.',
    image: 'https://s.aficionados.com.br/imagens/naruto-1-0_cke.jpg',
    words: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake', 'Hokage', 'Vila da Folha (Konoha)', 'Chakra', 'Rasengan', 'Chidori', 'Sharingan', 'Byakugan', 'Rinnegan', 'Akatsuki', 'Itachi Uchiha', 'Gaara', 'Orochimaru', 'Jiraiya', 'Tsunade', 'Hinata Hyuga', 'Kurama (Raposa de 9 Caudas)', 'Bijuu', 'Jinchuuriki', 'Kunai', 'Shuriken', 'Bandana Ninja', 'Exame Chunin', 'Vale do Fim', 'Madara Uchiha', 'Obito', 'Pain', 'Jutsu Sexy', 'Clone das Sombras', 'Vila da Névoa', 'Ramen do Ichiraku', 'Dattebayo']
  },
  rock: {
    title: 'Bandas de Rock',
    desc: 'Bandas icônicas do rock nacional e internacional',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando nomes de bandas de rock. Nossa lista inclui clássicos internacionais e nacionais que marcaram gerações.',
    image: 'https://img.freepik.com/vetores-gratis/efeito-de-texto-editavel-de-musica-vintage-estilo-de-texto-retro-dos-anos-70-e-80_314614-1116.jpg?semt=ais_hybrid&w=740&q=80',
    words: ['The Beatles', 'Rolling Stones', 'Queen', 'AC/DC', 'Guns N\' Roses', 'Nirvana', 'Metallica', 'Iron Maiden', 'Pink Floyd', 'Led Zeppelin', 'Red Hot Chili Peppers', 'Linkin Park', 'Kiss', 'Aerosmith', 'Bon Jovi', 'U2', 'Coldplay', 'Foo Fighters', 'Black Sabbath', 'System of a Down', 'Ramones', 'The Doors', 'Green Day', 'Pearl Jam', 'Slipknot', 'Evanescence', 'Sepultura', 'Legião Urbana', 'Capital Inicial', 'Titãs', 'CPM 22', 'Charlie Brown Jr', 'Pitty', 'Raul Seixas', 'Mamonas Assassinas']
  },
  minecraft: {
    title: 'Minecraft',
    desc: 'Termos do jogo de construção e sobrevivência',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando termos do Minecraft. Nossa lista inclui personagens, mobs, blocos, biomas e itens do jogo.',
    image: 'https://s2-techtudo.glbimg.com/teSQDUYwN9ZuGoFASqQJRLXfLWU=/0x0:620x349/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/F/L/6h8cWjR4W6IYgywE3SyA/2013-08-08-minecraft-pc-10-curiosidades.jpg',
    words: ['Steve', 'Alex', 'Creeper', 'Enderman', 'Zumbi', 'Esqueleto', 'Aranha', 'Aldeão (Villager)', 'Bruxa', 'Herobrine', 'Ender Dragon', 'Wither', 'Diamante', 'Ouro', 'Ferro', 'Carvão', 'Redstone', 'Picareta', 'Espada', 'Machado', 'Crafting Table (Bancada)', 'Fornalha', 'Baú', 'Cama', 'Portal do Nether', 'The End', 'Fortaleza', 'Bioma', 'Deserto', 'Floresta', 'Caverna', 'Mineração', 'Construção', 'Bloco de Terra', 'Areia de Almas', 'Bedrock', 'Obsidiana', 'Tnt']
  },
  gta: {
    title: 'Grand Theft Auto (GTA)',
    desc: 'Termos da franquia de jogos de mundo aberto',
    longDesc: 'Teste seu conhecimento e blefe com seus amigos usando termos do GTA. Nossa lista inclui personagens icônicos, cidades, gangues, veículos e missões.',
    image: 'https://www.scotsman.com/webimg/b25lY21zOmEzNzZkMDhlLTI5NDAtNDI1MS04MDI5LWVmOTI0N2QwN2UxZDo1YjY2NDY4OC1iNDFmLTQ5M2YtODMyNC04OTdjZDVkMmYzODE=.jpg?crop=3:2,smart&trim=&width=640&quality=65&enable=upscale',
    words: ['CJ (Carl Johnson)', 'Franklin Clinton', 'Michael De Santa', 'Trevor Philips', 'Niko Bellic', 'Tommy Vercetti', 'Los Santos', 'Liberty City', 'Vice City', 'San Andreas', 'Grove Street', 'Ballas', 'Vagos', 'Polícia (LSPD)', '5 Estrelas', 'Helicóptero', 'Tanque de Guerra', 'Jetpack', 'Missão', 'Roubo de Carros', 'Assalto a Banco', 'Dinheiro', 'Carro Esportivo', 'Moto', 'Armas', 'Wanted (Procurado)', 'Lester Crest', 'Big Smoke', 'Ryder', 'Lamar Davis', 'Cassino', 'Golpe', 'Modo Online', 'Garagem', 'Los Santos Customs', 'Paraquedas', 'Cheat']
  }
};
