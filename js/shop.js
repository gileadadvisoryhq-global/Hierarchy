/**
 * Homefront Interiors & Furniture - Shop Dynamic Filter Engine
 */

const PRODUCTS = [
  {
    id: 'sofa-01',
    name: 'Lekki Velvet Corner Sectional',
    category: 'living',
    price: 850000,
    priceFormatted: '₦850,000',
    tag: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bed-01',
    name: 'Royal Monarch King Bed Frame',
    category: 'bedroom',
    price: 650000,
    priceFormatted: '₦650,000',
    tag: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'din-01',
    name: 'Ikota Marble Top 8-Seater Dining Set',
    category: 'dining',
    price: 1200000,
    priceFormatted: '₦1,200,000',
    tag: 'Featured',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'off-01',
    name: 'Executive Ergonomic Boss Desk',
    category: 'office',
    price: 450000,
    priceFormatted: '₦450,000',
    tag: 'Popular',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'acc-01',
    name: 'Gold Accent Minimalist Side Table',
    category: 'accent',
    price: 120000,
    priceFormatted: '₦120,000',
    tag: 'In Stock',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sofa-02',
    name: 'Modernist Mid-Century Armchair',
    category: 'living',
    price: 280000,
    priceFormatted: '₦280,000',
    tag: 'Featured',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const shopGrid = document.getElementById('shopGrid');
  const categoryFilter = document.getElementById('categoryFilter');
  const searchInput = document.getElementById('searchInput');
  const sortSelect = document.getElementById('sortSelect');

  if (!shopGrid) return;

  function renderProducts(items) {
    if (items.length === 0) {
      shopGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
        <p>No furniture items match your selection.</p>
      </div>`;
      return;
    }

    shopGrid.innerHTML = items.map(product => `
      <div class="product-card">
        <div class="product-thumb">
          <span class="badge">${product.tag}</span>
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="product-details">
          <span class="product-category">${product.category}</span>
          <h3 class="product-title">${product.name}</h3>
          <div class="product-price">${product.priceFormatted}</div>
          <div class="product-actions">
            <a href="product-detail.html" class="btn-outline" style="flex:1; text-align:center;">View Details</a>
            <button class="btn-gold open-enquiry-modal" data-product="${product.name}">Enquire</button>
          </div>
        </div>
      </div>
    `).join('');

    // Re-initialize modal triggers for dynamically created elements
    if (typeof initEnquiryModal === 'function') {
      initEnquiryModal();
    }
  }

  function filterAndSort() {
    let result = [...PRODUCTS];

    // Category Filter
    if (categoryFilter && categoryFilter.value !== 'all') {
      result = result.filter(p => p.category === categoryFilter.value);
    }

    // Search Query Filter
    if (searchInput && searchInput.value.trim() !== '') {
      const query = searchInput.value.toLowerCase().trim();
      result = result.filter(p => p.name.toLowerCase().includes(query));
    }

    // Sorting
    if (sortSelect) {
      if (sortSelect.value === 'price-low') {
        result.sort((a, b) => a.price - b.price);
      } else if (sortSelect.value === 'price-high') {
        result.sort((a, b) => b.price - a.price);
      }
    }

    renderProducts(result);
  }

  // Event Listeners
  if (categoryFilter) categoryFilter.addEventListener('change', filterAndSort);
  if (searchInput) searchInput.addEventListener('input', filterAndSort);
  if (sortSelect) sortSelect.addEventListener('change', filterAndSort);

  // Initial Render
  renderProducts(PRODUCTS);
});