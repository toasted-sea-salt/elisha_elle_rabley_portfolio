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

  // --- Scroll cues on section dividers ---
  document.querySelectorAll('.divider').forEach(divider => {
    const next = divider.nextElementSibling;
    if (!next) return;
    const arrow = document.createElement('button');
    arrow.className = 'divider-arrow';
    arrow.setAttribute('aria-label', 'Scroll to next section');
    arrow.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M7 2v10M2.5 7.5 7 12l4.5-4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    arrow.addEventListener('click', () => next.scrollIntoView({ behavior: 'smooth' }));
    divider.appendChild(arrow);
  });

  // --- Nav scroll effect ---
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor = window.scrollY > 20 ? 'var(--border-dark)' : 'var(--border)';
    }, { passive: true });
  }
});
