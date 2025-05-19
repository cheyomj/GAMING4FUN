<script>
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.video-slide');
let currentIndex = 0;

document.querySelector('.left-btn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
  });

document.querySelector('.right-btn').addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  }
  });

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
  </script>