// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
});

// Sticky navbar background change
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 50);

  // Back to top button visibility
  const backToTop = document.querySelector('.back-to-top');
  backToTop.classList.toggle('show', window.scrollY > 300);
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.innerHTML = navMenu.classList.contains('active')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Karuzela w sekcji Media
const carousel = document.querySelector('.media-carousel');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

if (carousel && prevBtn && nextBtn) {
  let autoScroll;
  const startAutoScroll = () => {
    autoScroll = setInterval(() => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 3000);
  };

  carousel.addEventListener('mouseenter', () => clearInterval(autoScroll));
  carousel.addEventListener('mouseleave', startAutoScroll);
  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });
  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  startAutoScroll();
}

// Lightbox w sekcji Galeria
const galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <img src="${img.src}" alt="${img.alt}">
        <button class="lightbox-close">×</button>
      </div>
    `;
    document.body.appendChild(lightbox);

    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => {
      lightbox.remove();
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.remove();
    });
  });
});

// Walidacja formularza kontaktowego
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = contactForm.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.border = '1px solid red';
        input.nextElementSibling?.remove();
        input.insertAdjacentHTML('afterend', '<span class="error">To pole jest wymagane.</span>');
      } else {
        input.style.border = 'none';
        input.nextElementSibling?.remove();
      }
    });

    if (valid) {
      alert('Formularz wysłany!'); // Placeholder dla backendu
      contactForm.reset();
    } else {
      alert('Proszę wypełnić wszystkie pola.');
    }
  });
}

// Walidacja formularza newslettera
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]');
    const error = email.nextElementSibling;
    if (/^\S+@\S+\.\S+$/.test(email.value)) {
      alert('Zapisano do newslettera!'); // Placeholder dla Mailchimp
      newsletterForm.reset();
      if (error) error.remove();
    } else {
      if (!error || !error.classList.contains('error')) {
        email.insertAdjacentHTML('afterend', '<span class="error">Proszę podać poprawny e-mail.</span>');
      }
    }
  });
}

// Back to top button
document.querySelector('.back-to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});