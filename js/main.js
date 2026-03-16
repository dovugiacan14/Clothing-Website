document.addEventListener('DOMContentLoaded', () => {

  /* ─── Preloader ─── */
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => preloader.classList.add('done'), 900);
    });
    // Fallback: dismiss after 2.5s even if 'load' is slow
    setTimeout(() => preloader && preloader.classList.add('done'), 2500);
  }

  /* ─── Hero title: split words and animate each ─── */
  const heroTitle = document.querySelector('.home-hero-title');
  if (heroTitle) {
    const rawText = heroTitle.textContent.trim();
    const words = rawText.split(/\s+/);
    heroTitle.innerHTML = words.map((word, i) =>
      `<span class="hero-word" style="--delay:${i * 0.14 + 0.3}s"><span>${word}</span></span>`
    ).join(' ');
    // Apply the delay via CSS var
    heroTitle.querySelectorAll('.hero-word > span').forEach(span => {
      const delay = span.parentElement.style.getPropertyValue('--delay');
      span.style.animationDelay = delay;
    });
  }

  /* ─── Scroll reveal (all variants) ─── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const baseDelay = entry.target.dataset.delay ? parseFloat(entry.target.dataset.delay) : i * 0.08;
        setTimeout(() => entry.target.classList.add('visible'), baseDelay * 1000);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ─── Auto-stagger grid children ─── */
  const staggerGrids = document.querySelectorAll('.brands-grid, .partners-grid, .cap-categories, .gallery-grid');
  staggerGrids.forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
      if (!child.classList.contains('reveal') &&
          !child.classList.contains('reveal-left') &&
          !child.classList.contains('reveal-right') &&
          !child.classList.contains('reveal-scale')) {
        child.classList.add('reveal-scale');
        child.dataset.delay = (i * 0.07).toString();
        revealObserver.observe(child);
      }
    });
  });

  /* ─── Navbar scroll shadow ─── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* ─── Mobile hamburger ─── */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ─── Contact form ─── */
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thanks for submitting!');
      contactForm.reset();
    });
  }

  /* ─── Toast helper ─── */
  function showToast(msg) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 350);
    }, 3000);
  }

});
