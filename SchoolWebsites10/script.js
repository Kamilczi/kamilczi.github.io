document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const mainNav = document.getElementById('main-nav');
  const typewriterHeading = document.getElementById('typewriter-heading');
  const typewriterParagraph = document.getElementById('typewriter-paragraph');
  const voiceControl = document.getElementById('voice-control');
  const typewriterSound = document.getElementById('typewriter-sound');
  const contactForm = document.getElementById('contact-form');
  const contactSubmit = document.getElementById('contact-submit');
  const notification = document.getElementById('notification');

  // Typewriter effect with sound
  function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.classList.add('typewriter');
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        typewriterSound.currentTime = 0;
        typewriterSound.play().catch(() => {});
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.remove('typewriter');
        if (callback) callback();
      }
    }
    type();
  }

  const headingText = "Welcome to G.S KIBILIZI";
  const paragraphText = "Embark on a journey of knowledge in a amazing learning environment.";
  typeWriter(typewriterHeading, headingText, 60, () => {
    typeWriter(typewriterParagraph, paragraphText, 30);
  });

  // Navigation animation
  const navLinks = document.querySelectorAll('#nav-menu a');
  navLinks.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add('nav-visible');
    }, index * 100);
  });

  // Mobile menu toggle
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
    navMenu.classList.toggle('flex-col');
    navMenu.classList.toggle('absolute');
    navMenu.classList.toggle('bg-black');
    navMenu.classList.toggle('bg-opacity-90');
    navMenu.classList.toggle('w-full');
    navMenu.classList.toggle('p-4');
    navMenu.classList.toggle('top-16');
  });

  // Smooth scrolling with galaxy transition and particle burst
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      const section = target.closest('section');
      if (section) {
        const galaxyTransition = section.querySelector('.galaxy-transition');
        const particleBurst = document.createElement('div');
        particleBurst.className = 'particle-burst';
        section.appendChild(particleBurst);
        setTimeout(() => {
          particleBurst.classList.add('active');
          setTimeout(() => particleBurst.remove(), 1000);
        }, 10);
        if (galaxyTransition) {
          galaxyTransition.style.animation = 'none';
          setTimeout(() => {
            galaxyTransition.style.animation = 'galaxy-pulse 3s ease-out';
          }, 10);
        }
      }
      target.scrollIntoView({ behavior: 'smooth' });
      if (!navMenu.classList.contains('hidden')) {
        navMenu.classList.add('hidden');
      }
      mainNav.classList.remove('galaxy-active');
    });
  });

  // Contact form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const terms = document.getElementById('terms').checked;

    if (!name || !email || !message || !terms) {
      showNotification('Please fill all fields and accept the Galactic Terms.', 'error');
      return;
    }

    contactForm.classList.add('submitting');
    contactSubmit.querySelector('.holo-spinner').classList.remove('hidden');
    contactSubmit.querySelector('span:not(.holo-spinner)').textContent = 'Transmitting...';

    setTimeout(() => {
      contactForm.classList.remove('submitting');
      contactSubmit.querySelector('.holo-spinner').classList.add('hidden');
      contactSubmit.querySelector('span:not(.holo-spinner)').textContent = 'Transmit Request';
      showNotification('Message transmitted successfully!', 'success');
      contactForm.reset();
    }, 2000);
  });

  // Notification system
  function showNotification(message, type) {
    notification.textContent = message;
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg bg-black bg-opacity-80 text-star-white animate-neon ${type}`;
    notification.classList.add('show');
    setTimeout(() => {
      notification.classList.remove('show');
    }, 3500);
  }

  // Lightbox functionality
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

  // Scroll reveal animation with particle burst
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const revealOnScroll = () => {
    revealElements.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100 && !el.classList.contains('visible')) {
        el.classList.add('visible');
        const galaxyTransition = el.querySelector('.galaxy-transition');
        const particleBurst = document.createElement('div');
        particleBurst.className = 'particle-burst';
        el.appendChild(particleBurst);
        setTimeout(() => {
          particleBurst.classList.add('active');
          setTimeout(() => particleBurst.remove(), 1000);
        }, 10);
        if (galaxyTransition) {
          galaxyTransition.style.animation = 'none';
          setTimeout(() => {
            galaxyTransition.style.animation = 'galaxy-pulse 3s ease-out';
          }, 10);
        }
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // Parallax effect for home section
  const homeSection = document.querySelector('#home');
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const parallaxContent = homeSection.querySelector('.parallax-content');
    const translateZ = 30 - scrollPosition / 40;
    const scale = 0.97 + scrollPosition / 4000;
    parallaxContent.style.transform = `translateZ(${translateZ}px) scale(${scale})`;
  });

  // Particles.js initialization
  particlesJS('particles-js', {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: ['#00f0ff', '#d400ff', '#00ff9d'] },
      shape: { type: 'circle', stroke: { width: 0 } },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 100, color: '#00f0ff', opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: 'none', random: true, out_mode: 'out' }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
      modes: { grab: { distance: 150, line_linked: { opacity: 0.7 } }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });

  // Cursor trail effect
  const cursorTrail = document.querySelector('.cursor-trail');
  document.addEventListener('mousemove', (e) => {
    cursorTrail.style.left = `${e.clientX}px`;
    cursorTrail.style.top = `${e.clientY}px`;
    cursorTrail.classList.add('active');
    setTimeout(() => cursorTrail.classList.remove('active'), 500);
  });

  // Vanilla Tilt initialization
  VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
    max: 10,
    speed: 300,
    glare: true,
    'max-glare': 0.3
  });

  // Voice recognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    voiceControl.addEventListener('click', () => {
      voiceControl.classList.add('active');
      recognition.start();
    });

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase().trim();
      voiceControl.classList.remove('active');
      handleVoiceCommand(transcript);
    };

    recognition.onerror = (event) => {
      voiceControl.classList.remove('active');
      showNotification('Voice recognition error: ' + event.error, 'error');
    };

    recognition.onend = () => {
      voiceControl.classList.remove('active');
    };
  } else {
    voiceControl.addEventListener('click', () => {
      const command = prompt('Voice recognition not supported. Enter a command (e.g., "go to about", "open gallery", "submit form"):');
      if (command) handleVoiceCommand(command.toLowerCase().trim());
    });
  }

  function handleVoiceCommand(command) {
    if (command.includes('about')) {
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    } else if (command.includes('gallery')) {
      document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
    } else if (command.includes('statistics')) {
      document.querySelector('#statistics').scrollIntoView({ behavior: 'smooth' });
    } else if (command.includes('map')) {
      document.querySelector('#map').scrollIntoView({ behavior: 'smooth' });
    } else if (command.includes('contact')) {
      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    } else if (command.includes('scroll to top') || command.includes('home')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (command.includes('hide nav')) {
      mainNav.classList.add('galaxy-active');
    } else if (command.includes('show nav')) {
      mainNav.classList.remove('galaxy-active');
    } else if (command.includes('submit form') && document.getElementById('contact').getBoundingClientRect().top < window.innerHeight) {
      contactForm.dispatchEvent(new Event('submit'));
    } else {
      showNotification('Command not recognized. Try "go to about", "open gallery", "statistics", "map", "contact", "scroll to top", "hide nav", "show nav", or "submit form".', 'error');
    }
  }
});