const carouselSlide = document.querySelector('.carousel-slide');
const slide = document.querySelectorAll('.carousel-slide div');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;
let autoSlideInterval; 

//Navegador dots
slide.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Slide ${index + 1}`);
    dot.setAttribute('tabindex', '0');
    if(index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(index));
    dot.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' '){
            e.preventDefault();
            goToSlide(index)
        }
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

//Update carousel position
function updateCarousel(){
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
        dot.setAttribute('aria-selected', index === currentIndex);
    });
}

//Go to specifi slide 
function goToSlide(index){
    currentIndex = (index + slide.length) % slide.length;
    updateCarousel();
    resetAutoSlide();
}

//Next slide
function nextSlide(){
    goToSlide(currentIndex + 1);
}

//Previous slide
function prevSilde(){
    goToSlide(currentIndex -1);
}

//Auto slide every 8 second
function startAutoSlide(){
    autoSlideInterval = setInterval(nextSlide, 8000);

}
// Reset auto slide timer
 function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Event listeners for navigation
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

// Start auto sliding
startAutoSlide();

// Pause auto slide on hover
carouselSlide.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
carouselSlide.addEventListener('mouseleave', startAutoSlide);