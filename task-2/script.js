const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
let currentSlide = 0;

// Set up event listeners for buttons
prevButton.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlide(-1);
});

nextButton.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  updateSlide(1);
});

// Function to update the slide display
function updateSlide(direction) {
  const slideWidth = slides[0].offsetWidth;
  const offset = -currentSlide * slideWidth * direction;
  carousel.style.transform = `translateX(${offset}px)`;
  carousel.style.transition = 'transform 0.5s ease-in-out';
  
  setTimeout(() => {
    carousel.style.transition = '';
  }, 500);
}

// Initialize the slide display
updateSlide(1);

// Make the carousel responsive on window resize
window.addEventListener('resize', () => {
  const slideWidth = slides[0].offsetWidth;
  const totalSlideWidth = slideWidth * slides.length + (slides.length * 20) - 20;
  carousel.style.width = `${totalSlideWidth}px`;
  updateSlide(0);
});
