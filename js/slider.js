var slides = document.querySelectorAll('.slides .slide');
const slide1 = document.querySelector('.slider-list__item--slide1');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
};


