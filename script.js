const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const sliderContainer = document.querySelector('.slider-container');
const sliderItems = document.querySelectorAll('.slider-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

nextButton.addEventListener('click', () => {
    index = (index + 1) % sliderItems.length;
    updateSlider();
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + sliderItems.length) % sliderItems.length;
    updateSlider();
});

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(() => {
    index = (index + 1) % sliderItems.length;
    updateSlider();
}, 3000);

const arrivalsSliderContainer = document.querySelector('.arrivals-slider');
const arrivalsSliderItems = document.querySelectorAll('.arrivals-slider .slider-item');
const prevArrivalsButton = document.querySelector('.prev-arrivals');
const nextArrivalsButton = document.querySelector('.next-arrivals');

let arrivalsIndex = 0;

nextArrivalsButton.addEventListener('click', () => {
    arrivalsIndex = (arrivalsIndex + 1) % arrivalsSliderItems.length;
    updateArrivalsSlider();
});

prevArrivalsButton.addEventListener('click', () => {
    arrivalsIndex = (arrivalsIndex - 1 + arrivalsSliderItems.length) % arrivalsSliderItems.length;
    updateArrivalsSlider();
});

function updateArrivalsSlider() {
    arrivalsSliderContainer.style.transform = `translateX(-${arrivalsIndex * 100}%)`;
}

setInterval(() => {
    arrivalsIndex = (arrivalsIndex + 1) % arrivalsSliderItems.length;
    updateArrivalsSlider();
}, 3000);

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    
    // TODO: Integrate with backend service to handle form submission
});
