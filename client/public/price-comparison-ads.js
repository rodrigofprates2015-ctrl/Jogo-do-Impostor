/**
 * Sistema de Anúncios Comparativos de Preços
 * Compara preços entre Shopee, Mercado Livre e Amazon
 * Formatos padrão IAB: 728x90, 300x250, 160x600, 300x600
 */

const priceComparisonAds = [
  // Mouse Gamer - Formato 728x90 (Leaderboard)
  {
    id: 'comp-mouse-728x90',
    format: '728x90',
    category: 'desktop',
    weight: 10,
    product: {
      name: 'Mouse Gamer RGB 7 Botões',
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop',
      specs: 'DPI ajustável até 12.800'
    },
    prices: [
      { platform: 'Shopee', price: 89.90, link: 'https://shope.ee/exemplo', badge: '🔥 MELHOR' },
      { platform: 'Mercado Livre', price: 119.90, link: 'https://mercadolivre.com.br/exemplo', badge: '' },
      { platform: 'Amazon', price: 134.90, link: 'https://amzn.to/4phmY4v', badge: '' }
    ],
    savings: 'Economize R$ 45,00'
  },

  // Teclado Mecânico - Formato 728x90 (Leaderboard)
  {
    id: 'comp-teclado-728x90',
    format: '728x90',
    category: 'desktop',
    weight: 9,
    product: {
      name: 'Teclado Mecânico RGB Switch Blue',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop',
      specs: 'ABNT2, iluminação RGB'
    },
    prices: [
      { platform: 'Amazon', price: 199.90, link: 'https://amzn.to/4phmY4v', badge: '⭐ MELHOR' },
      { platform: 'Shopee', price: 219.90, link: 'https://shope.ee/exemplo', badge: '' },
      { platform: 'Mercado Livre', price: 249.90, link: 'https://mercadolivre.com.br/exemplo', badge: '' }
    ],
    savings: 'Economize R$ 50,00'
  },

  // Headset - Formato 300x250 (Medium Rectangle)
  {
    id: 'comp-headset-300x250',
    format: '300x250',
    category: 'all',
    weight: 8,
    product: {
      name: 'Headset Gamer 7.1',
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=200&h=200&fit=crop',
      specs: 'Surround, mic cancelamento'
    },
    prices: [
      { platform: 'Mercado Livre', price: 149.90, link: 'https://mercadolivre.com.br/exemplo', badge: '💰 MELHOR' },
      { platform: 'Shopee', price: 159.90, link: 'https://shope.ee/exemplo', badge: '' },
      { platform: 'Amazon', price: 179.90, link: 'https://amzn.to/4phmY4v', badge: '' }
    ],
    savings: 'Economize R$ 30,00'
  },

  // Mousepad - Formato 300x250 (Medium Rectangle)
  {
    id: 'comp-mousepad-300x250',
    format: '300x250',
    category: 'all',
    weight: 7,
    product: {
      name: 'Mousepad Gamer XXL',
      image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=200&h=200&fit=crop',
      specs: '90x40cm, base antiderrapante'
    },
    prices: [
      { platform: 'Shopee', price: 39.90, link: 'https://shope.ee/exemplo', badge: '🔥 MELHOR' },
      { platform: 'Amazon', price: 49.90, link: 'https://amzn.to/4phmY4v', badge: '' },
      { platform: 'Mercado Livre', price: 54.90, link: 'https://mercadolivre.com.br/exemplo', badge: '' }
    ],
    savings: 'Economize R$ 15,00'
  },

  // Cadeira Gamer - Formato 160x600 (Wide Skyscraper)
  {
    id: 'comp-cadeira-160x600',
    format: '160x600',
    category: 'desktop',
    weight: 8,
    product: {
      name: 'Cadeira Gamer Pro',
      image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=200&h=200&fit=crop',
      specs: 'Ergonômica, reclinável 180°'
    },
    prices: [
      { platform: 'Mercado Livre', price: 699.90, link: 'https://mercadolivre.com.br/exemplo', badge: '⭐ MELHOR' },
      { platform: 'Shopee', price: 749.90, link: 'https://shope.ee/exemplo', badge: '' },
      { platform: 'Amazon', price: 799.90, link: 'https://amzn.to/4phmY4v', badge: '' }
    ],
    savings: 'Economize R$ 100,00'
  },

  // Webcam - Formato 160x600 (Wide Skyscraper)
  {
    id: 'comp-webcam-160x600',
    format: '160x600',
    category: 'desktop',
    weight: 7,
    product: {
      name: 'Webcam Full HD',
      image: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=200&h=200&fit=crop',
      specs: '1080p, 60fps, mic integrado'
    },
    prices: [
      { platform: 'Amazon', price: 189.90, link: 'https://amzn.to/4phmY4v', badge: '🔥 MELHOR' },
      { platform: 'Shopee', price: 199.90, link: 'https://shope.ee/exemplo', badge: '' },
      { platform: 'Mercado Livre', price: 219.90, link: 'https://mercadolivre.com.br/exemplo', badge: '' }
    ],
    savings: 'Economize R$ 30,00'
  },

  // Monitor - Formato 300x600 (Half Page)
  {
    id: 'comp-monitor-300x600',
    format: '300x600',
    category: 'desktop',
    weight: 9,
    product: {
      name: 'Monitor Gamer 24" 144Hz',
      image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200&h=200&fit=crop',
      specs: 'Full HD, 1ms, FreeSync'
    },
    prices: [
      { platform: 'Shopee', price: 799.90, link: 'https://shope.ee/exemplo', badge: '💰 MELHOR' },
      { platform: 'Mercado Livre', price: 849.90, link: 'https://mercadolivre.com.br/exemplo', badge: '' },
      { platform: 'Amazon', price: 899.90, link: 'https://amzn.to/4phmY4v', badge: '' }
    ],
    savings: 'Economize R$ 100,00'
  },

  // SSD - Formato 300x600 (Half Page)
  {
    id: 'comp-ssd-300x600',
    format: '300x600',
    category: 'desktop',
    weight: 8,
    product: {
      name: 'SSD 480GB SATA',
      image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=200&h=200&fit=crop',
      specs: 'Leitura 550MB/s'
    },
    prices: [
      { platform: 'Amazon', price: 189.90, link: 'https://amzn.to/4phmY4v', badge: '⭐ MELHOR' },
      { platform: 'Mercado Livre', price: 199.90, link: 'https://mercadolivre.com.br/exemplo', badge: '' },
      { platform: 'Shopee', price: 209.90, link: 'https://shope.ee/exemplo', badge: '' }
    ],
    savings: 'Economize R$ 20,00'
  }
];

// Exportar para uso global
if (typeof window !== 'undefined') {
  window.priceComparisonAds = priceComparisonAds;
}
