document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll('.carousel');
  
    carousels.forEach(carousel => {
      const track = carousel.querySelector('.carousel-track');
      const items = Array.from(track.children);
      const nextButton = carousel.querySelector('.next');
      const prevButton = carousel.querySelector('.prev');
  
      const itemWidth = items[0].getBoundingClientRect().width + 20; // Considerar el margen
      const totalItems = items.length;
      let currentIndex = 0;
  
      const setTrackPosition = (index) => {
        track.style.transform = 'translateX(-' + itemWidth * index + 'px)';
      };
  
      nextButton.addEventListener('click', () => {
        if (currentIndex < totalItems - 4) {
          currentIndex++;
          setTrackPosition(currentIndex);
        }
      });
  
      prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          setTrackPosition(currentIndex);
        }
      });
    });
  });
  
