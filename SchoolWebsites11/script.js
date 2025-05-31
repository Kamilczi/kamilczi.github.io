document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
    navMenu.classList.toggle('flex-col');
    navMenu.classList.toggle('absolute');
    navMenu.classList.toggle('bg-[#1A3C34]');
    navMenu.classList.toggle('w-full');
    navMenu.classList.toggle('p-6');
    navMenu.classList.toggle('top-16');
    navMenu.classList.toggle('shadow-lg');
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      if (!navMenu.classList.contains('hidden')) {
        navMenu.classList.add('hidden');
        navMenu.classList.remove('flex', 'flex-col', 'absolute', 'bg-[#1A3C34]', 'w-full', 'p-6', 'top-16', 'shadow-lg');
      }
    });
  });

  document.getElementById('contact-submit').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const terms = document.getElementById('terms').checked;

    if (name && email && message && terms) {
      alert('Thank you for your message! We will get back to you soon.');
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      document.getElementById('terms').checked = false;
    } else {
      alert('Please fill out all fields and agree to the Terms & Conditions.');
    }
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