document.addEventListener('DOMContentLoaded', () => {
  // Loader
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1500); // Hide loader after 1.5s

  // Navbar Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Smooth Scroll with Easing
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        easing: 'ease-in-out'
      });
      if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
      }
    });
  });

  // Scroll-Triggered Animations
  const sections = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => observer.observe(section));

  // Contact Form
  document.getElementById('contact-submit').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Thy missive shall be dispatched anon. Pray, ensure all fields are duly inscribed.');
  });

  // Lightbox
  window.openLightbox = function(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
  };
  window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  };
});