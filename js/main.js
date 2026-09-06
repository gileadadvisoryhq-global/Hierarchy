/**
 * HOMEFRONT INTERIORS & FURNITURE - CORE DATA & INITIALIZER
 */

// Global Furniture Database
const HOMEFRONT_PRODUCTS = [
  {
    id: "hf-001",
    sku: "HF-SOFA-001",
    title: "Lekki Royal Corner Sectional Sofa",
    category: "Living Room",
    price: 1250000,
    priceFormatted: "₦1,250,000",
    availability: "In Stock",
    featured: true,
    tag: "Best Seller",
    tagColor: "gold",
    mainImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      Dimensions: "320cm x 210cm x 85cm",
      Frame: "Kiln-Dried Teak Hardwood",
      Fabric: "High-Density Velvet Upholstery",
      Seating: "High-Resilience Foam"
    },
    description: "Designed for spacious Lagos living rooms, the Lekki Royal Corner Sectional delivers soft velvet plushness combined with a solid hardwood structural core built to last for decades."
  },
  {
    id: "hf-002",
    sku: "HF-BED-002",
    title: "Ikota Monarch Upholstered King Bed Frame",
    category: "Bedroom",
    price: 880000,
    priceFormatted: "₦880,000",
    availability: "In Stock",
    featured: true,
    tag: "Featured",
    tagColor: "",
    mainImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7ede433c5172?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      Dimensions: "King Size (6ft x 6ft Mattress Fit)",
      Headboard: "Custom Deep Tufted Velvet",
      Structure: "Reinforced Mahogany Slat Base"
    },
    description: "The Ikota Monarch features a tall, deep-tufted headboard that commands attention in any master suite, crafted with premium high-density cushioning."
  },
  {
    id: "hf-003",
    sku: "HF-DIN-003",
    title: "VGC Executive 8-Seater Dining Set",
    category: "Dining",
    price: 1650000,
    priceFormatted: "₦1,650,000",
    availability: "Made to Order",
    featured: true,
    tag: "Custom Build",
    tagColor: "gold",
    mainImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      Table: "Solid Walnut Top with Gold Metal Accents",
      Chairs: "8 Ergonomic Cushioned Seating Chairs",
      Finish: "Stain Resistant Polish"
    },
    description: "Gather family and guests in luxury. The VGC 8-Seater Dining Set combines rich solid walnut wood craftsmanship with comfortable gold-accented dining chairs."
  },
  {
    id: "hf-004",
    sku: "HF-OFF-004",
    title: "Victoria Ergonomic Executive Desk Set",
    category: "Office",
    price: 720000,
    priceFormatted: "₦720,000",
    availability: "In Stock",
    featured: false,
    tag: "Office",
    tagColor: "",
    mainImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
    ],
    specs: {
      Desk: "180cm Executive Leather Top Surface",
      Storage: "Integrated Soft-close Cable Drawers"
    },
    description: "Engineered for executives and professional home offices seeking functional prestige."
  }
];

// Toast Notification System
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas fa-check-circle" style="color:var(--color-accent);"></i> <span>${message}</span>`;
  
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Global Card HTML Helper Generator
function createProductCardHTML(product) {
  return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img src="${product.mainImage}" alt="${product.title}" loading="lazy">
        ${product.tag ? `<span class="product-tag ${product.tagColor}">${product.tag}</span>` : ''}
      </div>
      <div class="product-details">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title"><a href="product-detail.html?id=${product.id}">${product.title}</a></h3>
        <div class="product-price">${product.priceFormatted}</div>
        <div class="product-card-footer">
          <a href="product-detail.html?id=${product.id}" class="btn btn-outline">View Specs</a>
          <a href="product-detail.html?id=${product.id}#product-enquiry-form" class="btn btn-primary">Enquire</a>
        </div>
      </div>
    </article>
  `;
}

// Render Featured Spotlight on Homepage
document.addEventListener('DOMContentLoaded', () => {
  const featuredGrid = document.getElementById('homepage-featured-grid');
  if (featuredGrid) {
    const featuredItems = HOMEFRONT_PRODUCTS.filter(p => p.featured);
    featuredGrid.innerHTML = featuredItems.map(p => createProductCardHTML(p)).join('');
  }
});