/* ==========================================
   ELLE RABLEY — SHARED JS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {

  // --- Active nav link ---
  const normalize = p => p.replace(/index\.html$/, '');
  const path = normalize(window.location.pathname);
  document.querySelectorAll('.nav-link, .nav-mobile-link').forEach(link => {
    if (normalize(new URL(link.href).pathname) === path) {
      link.classList.add('active');
    }
  });

  // --- Mobile menu ---
  const toggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('nav-mobile');
  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      const open = toggle.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Scroll reveals ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // --- Nav scroll effect ---
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor = window.scrollY > 20 ? 'var(--border-dark)' : 'var(--border)';
    }, { passive: true });
  }
});
