export type PalavraSuperSecretaSubmode = 'classico' | 'clashRoyale' | 'animes' | 'marvel' | 'strangerThings';

export const PALAVRA_SECRETA_SUBMODES: Record<PalavraSuperSecretaSubmode, { title: string; desc: string; words: string[]; image?: string }> = {
  classico: {
    title: 'Clássico',
    desc: 'Palavras aleatórias',
    words: ['Sol', 'Carro', 'Casa', 'Cachorro', 'Computador', 'Montanha', 'Pizza', 'Escola', 'Roupa', 'Avião', 'Janela', 'Telefone', 'Bola', 'Relógio', 'Flor', 'Gelo', 'Música', 'Prédio', 'Caminhão', 'Praia']
  },
  clashRoyale: {
    title: 'Clash Royale',
    desc: 'Cartas do jogo, personagens, itens',
    image: '/submode-clash-royale.png',
    words: ['Mago', 'Príncipe', 'Mosqueteira', 'Gigante', 'Arqueiras', 'Corredor', 'P.E.K.K.A', 'Golem', 'Dragão Bebê', 'Bruxa', 'Mineiro', 'Cavaleiro', 'Barril de Goblins', 'Tronco', 'Tesla', 'Lava Hound', 'Lenhador', 'Fantasma Real', 'Mago de Gelo', 'Executor']
  },
  animes: {
    title: 'Animes',
    desc: 'Personagens, títulos e coisas relacionadas',
    image: '/submode-animes.png',
    words: ['Goku', 'Naruto', 'Luffy', 'Tanjiro', 'Mikasa', 'Saitama', 'Sasuke', 'Deku', 'Gojo', 'Ichigo', 'Sharingan', 'Bankai', 'Kamehameha', 'Rasengan', 'Titan', 'Shinigami', 'Chakra', 'Espada Nichirin', 'Akatsuki', 'Grimório']
  },
  marvel: {
    title: 'Marvel',
    desc: 'Personagens, itens, filmes',
    image: '/submode-marvel.png',
    words: ['Homem-Aranha', 'Thor', 'Hulk', 'Capitão América', 'Homem de Ferro', 'Viúva Negra', 'Pantera Negra', 'Doutor Estranho', 'Thanos', 'Loki', 'Ultron', 'Groot', 'Rocket', 'Wanda', 'Visão', 'Escudo', 'Mjölnir', 'Joia do Infinito', 'Hydra', 'Vibranium']
  },
  strangerThings: {
    title: 'Stranger Things',
    desc: 'Personagens, itens, locais',
    image: '/submode-stranger-things.png',
    words: ['Eleven', 'Mike', 'Lucas', 'Dustin', 'Will', 'Max', 'Hopper', 'Joyce', 'Vecna', 'Demogorgon', 'Mind Flayer', 'Hawkins', 'Upside Down', 'Barb', 'Robin', 'Steve', 'Billy', 'Eddie', 'Murray', 'Kali', 'Brenner', 'Suzie', 'Erica', 'Laboratório', 'Neva', 'Walkie-talkie', 'Arcade', 'Starcourt', 'Hellfire', 'Byers']
  }
};
