/* Local preview interactions. Production analytics/CRM scripts are not loaded. */
(() => {
  const canvas = document.getElementById('off-canvas');
  const burger = document.querySelector('.burger-menu');
  function closeMenu() {
    document.body.classList.remove('mockup-menu-open');
    canvas?.setAttribute('aria-hidden', 'true');
    burger?.setAttribute('aria-expanded', 'false');
  }
  burger?.addEventListener('click', () => {
    const open = document.body.classList.toggle('mockup-menu-open');
    canvas?.setAttribute('aria-hidden', String(!open));
    burger.setAttribute('aria-expanded', String(open));
    if (open) canvas?.querySelector('button,a')?.focus();
  });
  document.querySelector('.mockup-menu-shade')?.addEventListener('click', closeMenu);
  canvas?.querySelector('.close-button')?.addEventListener('click', () => { closeMenu(); burger?.focus(); });
  canvas?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  const contactToggle = document.querySelector('.nav-toggle');
  const contactNav = document.querySelector('.site-header nav');
  contactToggle?.addEventListener('click', () => {
    const open = contactNav?.classList.toggle('mockup-nav-open');
    contactToggle.setAttribute('aria-expanded', String(!!open));
  });
  document.querySelectorAll('.mockup-submenu-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const open = button.parentElement.classList.toggle('mockup-submenu-open');
      button.setAttribute('aria-expanded', String(open));
      button.parentElement.querySelector('ul')?.setAttribute('aria-hidden', String(!open));
    });
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
      contactNav?.classList.remove('mockup-nav-open');
      contactToggle?.setAttribute('aria-expanded', 'false');
    }
  });
  document.querySelectorAll('.namoli-enquiry-form').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const status = form.querySelector('.namoli-enquiry-status');
      status.textContent = 'Preview complete. Your enquiry has not been sent.';
      status.hidden = false;
    });
  });
  // Reinitialise the existing carousel presentation from the original local assets.
  function initialiseCarousels() {
    if (!window.jQuery?.fn?.slick) return;
    const $ = window.jQuery;
    $('.hero-slider:not(.slick-initialized)').slick({arrows:false,dots:false,fade:true,autoplay:false});
    $('section.carousel .section-body:not(.slick-initialized)').each(function () {
      const testimonials = !!this.closest('.testimonial-element');
      $(this).slick({slidesToShow:testimonials ? 1 : 5,slidesToScroll:1,arrows:true,dots:testimonials,
        adaptiveHeight:testimonials,autoplay:false,
        responsive:[{breakpoint:1024,settings:{slidesToShow:testimonials ? 1 : 3}},
          {breakpoint:640,settings:{slidesToShow:1}}]});
    });
  }
  initialiseCarousels();
  window.addEventListener('load', initialiseCarousels, {once:true});
})();
