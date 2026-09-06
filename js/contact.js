/**
 * HOMEFRONT INTERIORS & FURNITURE - CONTACT & LEAD FORM CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('general-contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('contact-name').value;
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending Message...';

      setTimeout(() => {
        showToast(`Thank you ${name}. Your message has been sent to our Ikota sales showroom team!`, 'success');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Inquiry';
      }, 1000);
    });
  }
});