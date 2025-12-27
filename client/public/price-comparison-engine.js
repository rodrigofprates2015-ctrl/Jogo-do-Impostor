/**
 * Engine de Renderização de Anúncios Comparativos
 * Renderiza comparações de preços em formatos padrão IAB
 */

(function() {
  'use strict';

  class PriceComparisonEngine {
    constructor() {
      this.ads = [];
      this.deviceType = this.detectDevice();
    }

    detectDevice() {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
      const isMobile = mobileKeywords.some(keyword => userAgent.includes(keyword)) || window.innerWidth <= 768;
      return isMobile ? 'mobile' : 'desktop';
    }

    async loadAds() {
      return new Promise((resolve, reject) => {
        if (window.priceComparisonAds) {
          this.ads = window.priceComparisonAds;
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = '/price-comparison-ads.js';
        script.async = true;
        
        script.onload = () => {
          if (window.priceComparisonAds) {
            this.ads = window.priceComparisonAds;
            resolve();
          } else {
            reject(new Error('Price comparison ads not found'));
          }
        };
        
        script.onerror = () => reject(new Error('Failed to load price comparison ads'));
        document.head.appendChild(script);
      });
    }

    filterByFormat(format) {
      return this.ads.filter(ad => ad.format === format);
    }

    filterByDevice() {
      return this.ads.filter(ad => 
        ad.category === 'all' || ad.category === this.deviceType
      );
    }

    selectWeightedRandom(items) {
      if (!items || items.length === 0) return null;
      const totalWeight = items.reduce((sum, item) => sum + (item.weight || 1), 0);
      let random = Math.random() * totalWeight;
      
      for (const item of items) {
        random -= (item.weight || 1);
        if (random <= 0) return item;
      }
      
      return items[items.length - 1];
    }

    renderAd(slotId, format) {
      const slot = document.getElementById(slotId);
      if (!slot) return;

      let filteredAds = this.filterByDevice();
      filteredAds = filteredAds.filter(ad => ad.format === format);

      if (filteredAds.length === 0) return;

      const selectedAd = this.selectWeightedRandom(filteredAds);
      if (!selectedAd) return;

      const html = this.createAdHTML(selectedAd);
      slot.innerHTML = html;

      // Add click tracking
      const links = slot.querySelectorAll('.price-link');
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          const platform = link.dataset.platform;
          console.log('[Price Comparison] Click:', {
            product: selectedAd.product.name,
            platform: platform,
            price: link.dataset.price
          });
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'price_comparison_click', {
              product_name: selectedAd.product.name,
              platform: platform,
              price: link.dataset.price
            });
          }
        });
      });
    }

    createAdHTML(ad) {
      switch(ad.format) {
        case '728x90':
          return this.createLeaderboard(ad);
        case '300x250':
          return this.createMediumRectangle(ad);
        case '160x600':
          return this.createWideSkyscraper(ad);
        case '300x600':
          return this.createHalfPage(ad);
        default:
          return '';
      }
    }

    createLeaderboard(ad) {
      const bestPrice = ad.prices.find(p => p.badge);
      const imageHTML = ad.product.image.startsWith('http') 
        ? `<img src="${ad.product.image}" alt="${ad.product.name}" class="pc-product-img" />`
        : `<span class="pc-icon">${ad.product.image}</span>`;
      
      return `
        <div class="price-comparison-ad format-728x90">
          <div class="pc-header">
            <div class="pc-product">
              ${imageHTML}
              <div class="pc-product-info">
                <h3 class="pc-product-name">${ad.product.name}</h3>
                <p class="pc-product-specs">${ad.product.specs}</p>
              </div>
            </div>
            <div class="pc-savings">${ad.savings}</div>
          </div>
          <div class="pc-prices-horizontal">
            ${ad.prices.map(price => `
              <a href="${price.link}" 
                 class="price-link" 
                 target="_blank" 
                 rel="noopener noreferrer sponsored"
                 data-platform="${price.platform}"
                 data-price="${price.price}">
                <div class="price-card ${price.badge ? 'best-price' : ''}">
                  ${price.badge ? `<span class="price-badge">${price.badge}</span>` : ''}
                  <div class="platform-name">${price.platform}</div>
                  <div class="price-value">R$ ${price.price.toFixed(2).replace('.', ',')}</div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      `;
    }

    createMediumRectangle(ad) {
      const bestPrice = ad.prices.find(p => p.badge);
      const imageHTML = ad.product.image.startsWith('http') 
        ? `<img src="${ad.product.image}" alt="${ad.product.name}" class="pc-product-img-large" />`
        : `<span class="pc-icon-large">${ad.product.image}</span>`;
      
      return `
        <div class="price-comparison-ad format-300x250">
          <div class="pc-header-vertical">
            ${imageHTML}
            <h3 class="pc-product-name">${ad.product.name}</h3>
            <p class="pc-product-specs">${ad.product.specs}</p>
          </div>
          <div class="pc-savings-center">${ad.savings}</div>
          <div class="pc-prices-vertical">
            ${ad.prices.map(price => `
              <a href="${price.link}" 
                 class="price-link" 
                 target="_blank" 
                 rel="noopener noreferrer sponsored"
                 data-platform="${price.platform}"
                 data-price="${price.price}">
                <div class="price-row ${price.badge ? 'best-price' : ''}">
                  <div class="price-row-left">
                    ${price.badge ? `<span class="price-badge-small">${price.badge}</span>` : ''}
                    <span class="platform-name-small">${price.platform}</span>
                  </div>
                  <div class="price-value-small">R$ ${price.price.toFixed(2).replace('.', ',')}</div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      `;
    }

    createWideSkyscraper(ad) {
      const imageHTML = ad.product.image.startsWith('http') 
        ? `<img src="${ad.product.image}" alt="${ad.product.name}" class="pc-product-img-medium" />`
        : `<span class="pc-icon-medium">${ad.product.image}</span>`;
      
      return `
        <div class="price-comparison-ad format-160x600">
          <div class="pc-header-skyscraper">
            ${imageHTML}
            <h3 class="pc-product-name-small">${ad.product.name}</h3>
            <p class="pc-product-specs-small">${ad.product.specs}</p>
          </div>
          <div class="pc-savings-vertical">${ad.savings}</div>
          <div class="pc-prices-stack">
            ${ad.prices.map(price => `
              <a href="${price.link}" 
                 class="price-link" 
                 target="_blank" 
                 rel="noopener noreferrer sponsored"
                 data-platform="${price.platform}"
                 data-price="${price.price}">
                <div class="price-stack-card ${price.badge ? 'best-price' : ''}">
                  ${price.badge ? `<span class="price-badge-tiny">${price.badge}</span>` : ''}
                  <div class="platform-name-tiny">${price.platform}</div>
                  <div class="price-value-medium">R$ ${price.price.toFixed(2).replace('.', ',')}</div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      `;
    }

    createHalfPage(ad) {
      const imageHTML = ad.product.image.startsWith('http') 
        ? `<img src="${ad.product.image}" alt="${ad.product.name}" class="pc-product-img-xlarge" />`
        : `<span class="pc-icon-xlarge">${ad.product.image}</span>`;
      
      return `
        <div class="price-comparison-ad format-300x600">
          <div class="pc-header-halfpage">
            ${imageHTML}
            <h3 class="pc-product-name-large">${ad.product.name}</h3>
            <p class="pc-product-specs-large">${ad.product.specs}</p>
          </div>
          <div class="pc-savings-large">${ad.savings}</div>
          <div class="pc-prices-large">
            ${ad.prices.map(price => `
              <a href="${price.link}" 
                 class="price-link" 
                 target="_blank" 
                 rel="noopener noreferrer sponsored"
                 data-platform="${price.platform}"
                 data-price="${price.price}">
                <div class="price-large-card ${price.badge ? 'best-price' : ''}">
                  ${price.badge ? `<span class="price-badge-large">${price.badge}</span>` : ''}
                  <div class="platform-logo">${this.getPlatformEmoji(price.platform)}</div>
                  <div class="platform-name-large">${price.platform}</div>
                  <div class="price-value-large">R$ ${price.price.toFixed(2).replace('.', ',')}</div>
                  <div class="price-cta">Ver Oferta →</div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      `;
    }

    getPlatformEmoji(platform) {
      const emojis = {
        'Shopee': '🛍️',
        'Mercado Livre': '💛',
        'Amazon': '📦'
      };
      return emojis[platform] || '🛒';
    }

    async renderAllSlots() {
      try {
        await this.loadAds();

        // Renderizar slots específicos
        this.renderAd('price-comp-728x90-top', '728x90');
        this.renderAd('price-comp-728x90-bottom', '728x90');
        this.renderAd('price-comp-300x250-before', '300x250');
        this.renderAd('price-comp-300x250-after', '300x250');
        this.renderAd('price-comp-160x600-left', '160x600');
        this.renderAd('price-comp-160x600-right', '160x600');
        this.renderAd('price-comp-300x600-left', '300x600');
        this.renderAd('price-comp-300x600-right', '300x600');

        console.log('[Price Comparison] All slots rendered');
      } catch (error) {
        console.error('[Price Comparison] Error:', error);
      }
    }
  }

  // Inicializar
  function init() {
    const engine = new PriceComparisonEngine();
    engine.renderAllSlots();
    window.priceComparisonEngine = engine;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
