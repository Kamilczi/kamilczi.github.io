document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
    navMenu.classList.toggle('flex-col');
    navMenu.classList.toggle('absolute');
    navMenu.classList.toggle('bg-gray-800'); // Updated to match new nav background
    navMenu.classList.toggle('w-full');
    navMenu.classList.toggle('p-4');
    navMenu.classList.toggle('top-16');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      if (!navMenu.classList.contains('hidden')) {
        navMenu.classList.add('hidden');
      }
    });
  });

  document.getElementById('contact-submit').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Form submission is disabled in this environment.');
  });

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