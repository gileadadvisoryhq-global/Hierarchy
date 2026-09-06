/**
 * Homefront Interiors & Furniture - Main Application JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initEnquiryModal();
});

// Mobile Navigation Toggle
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

// Global Enquiry Modal Logic
function initEnquiryModal() {
  const modal = document.getElementById('enquiryModal');
  const closeBtn = document.querySelector('.close-modal');
  const enquiryButtons = document.querySelectorAll('.open-enquiry-modal');
  const productSelect = document.getElementById('enquiryProductSelect');

  if (!modal) return;

  enquiryButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const productName = button.getAttribute('data-product') || '';
      
      if (productSelect && productName) {
        // Set selected product if dropdown option exists
        for (let option of productSelect.options) {
          if (option.value === productName) {
            option.selected = true;
            break;
          }
        }
      }
      modal.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Handle Form Submission
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your enquiry! Our Homefront specialist will contact you shortly.');
      modal.classList.remove('active');
      enquiryForm.reset();
    });
  }
}