/**
 * HOMEFRONT INTERIORS & FURNITURE - FAQ ACCORDION CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close all active accordions
      document.querySelectorAll('.accordion-item').forEach(acc => {
        acc.classList.remove('active');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
});