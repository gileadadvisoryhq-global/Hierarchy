/**
 * HOMEFRONT INTERIORS & FURNITURE - NAVIGATION CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
  const mobileToggle = document.getElementById('mobile-toggle');
  const mainNav = document.getElementById('main-nav');
  const siteHeader = document.getElementById('site-header');

  // Mobile Menu Toggle logic
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('is-open');
      const isOpen = mainNav.classList.contains('is-open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target) && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
      }
    });
  }

  // Header Shrink on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });
});