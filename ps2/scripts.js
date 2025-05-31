// Inicjalizacja AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
});

// Menu mobilne
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navbar.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Formularz kontaktowy
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Wiadomość została wysłana!');
    form.reset();
});

// Slick Slider dla galerii
$('.gallery-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        }
    ]
});

