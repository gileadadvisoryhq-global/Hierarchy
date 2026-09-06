/**
 * HOMEFRONT INTERIORS & FURNITURE - PRODUCT DETAIL DYNAMIC CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
  const mainImg = document.getElementById('p-main-image');
  if (!mainImg) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'hf-001';

  const product = HOMEFRONT_PRODUCTS.find(p => p.id === productId) || HOMEFRONT_PRODUCTS[0];

  // Inject Data into DOM Elements
  document.getElementById('p-breadcrumb-title').textContent = product.title;
  document.getElementById('p-category-badge').textContent = product.category;
  document.getElementById('p-title').textContent = product.title;
  document.getElementById('p-sku').textContent = `SKU: ${product.sku}`;
  document.getElementById('p-price').textContent = product.priceFormatted;
  document.getElementById('p-description').textContent = product.description;

  // Stock Badge
  const stockBadge = document.getElementById('p-stock-badge');
  if (stockBadge) {
    stockBadge.textContent = product.availability;
    stockBadge.className = `badge-stock ${product.availability === 'In Stock' ? 'in-stock' : 'made-to-order'}`;
  }

  // Set Main Image
  mainImg.src = product.mainImage;
  mainImg.alt = product.title;

  // Gallery Thumbnails
  const galleryWrap = document.getElementById('p-thumbs-gallery');
  if (galleryWrap && product.gallery) {
    galleryWrap.innerHTML = product.gallery.map(imgUrl => `
      <div style="aspect-ratio:1/1; cursor:pointer; border:1px solid var(--color-border); border-radius:4px; overflow:hidden;" class="p-thumb-item">
        <img src="${imgUrl}" alt="${product.title}" style="width:100%; height:100%; object-fit:cover;">
      </div>
    `).join('');

    // Thumbnail Click Listener
    const thumbs = galleryWrap.querySelectorAll('.p-thumb-item');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const src = thumb.querySelector('img').src;
        mainImg.src = src;
      });
    });
  }

  // Specs List
  const specsList = document.getElementById('p-specs-list');
  if (specsList && product.specs) {
    specsList.innerHTML = Object.entries(product.specs).map(([key, val]) => `
      <li><strong>${key}:</strong> ${val}</li>
    `).join('');
  }

  // Auto-fill hidden fields on Product Lead Form
  const hiddenName = document.getElementById('enquiry-product-name');
  const hiddenSku = document.getElementById('enquiry-product-sku');
  if (hiddenName) hiddenName.value = product.title;
  if (hiddenSku) hiddenSku.value = product.sku;

  // Submit Product Enquiry Form Handler
  const enquiryForm = document.getElementById('product-enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Transmitting Request...';

      setTimeout(() => {
        showToast(`Enquiry for ${product.title} received! Our Ikota team will call you shortly.`, 'success');
        enquiryForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Product Enquiry';
      }, 1200);
    });
  }
});