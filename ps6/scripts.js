// Inicjalizacja AOS
try {
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
    });
} catch (error) {
    console.error('Błąd inicjalizacji AOS:', error);
}

// Menu mobilne
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

if (burger && navbar) {
    burger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            if (navbar && burger) {
                navbar.classList.remove('active');
                burger.classList.remove('toggle');
            }
        } else {
            console.warn(`Element o ID ${targetId} nie znaleziony.`);
        }
    });
});

// Formularz kontaktowy
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;
        if (name && email && message) {
            alert('Wiadomość została wysłana!');
            form.reset();
        } else {
            alert('Proszę wypełnić wszystkie pola formularza.');
        }
    });
}

// Slick Slider dla galerii
try {
    $('.gallery-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    });
} catch (error) {
    console.error('Błąd inicjalizacji Slick Slider:', error);
}

// Parallax Effect for Hero Video
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        heroVideo.style.transform = `scale(1.1) translateY(${scrollPosition * 0.2}px)`;
    });
}

// Intersection Observer for Section Animations
const sections = document.querySelectorAll('.section');
if (sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            } else {
                entry.target.classList.remove('section-visible');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
}


