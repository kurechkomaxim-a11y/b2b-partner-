// RDX — site JS v1
// Minimal vanilla JS: mobile menu toggle + simple form handling

(function () {
  'use strict';

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Close mobile menu on nav link click
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navLinks) navLinks.classList.remove('open');
    });
  });

  // RFQ form — client-side submission placeholder
  // Replace with actual endpoint (Formspree, Netlify Forms, or custom backend)
  const rfqForm = document.querySelector('#rfq-form');
  if (rfqForm) {
    rfqForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const submitBtn = rfqForm.querySelector('button[type="submit"]');
      const successEl = rfqForm.querySelector('.form-success');
      const errorEl = rfqForm.querySelector('.form-error');

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      // TODO: replace with real endpoint
      // Example for Formspree: fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: new FormData(rfqForm), headers: { Accept: 'application/json' } })

      setTimeout(function () {
        if (successEl) successEl.style.display = 'block';
        rfqForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send the project brief';
        }
      }, 800);
    });
  }
})();
