document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const items = Array.from(track.children);
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  const itemWidth = items[0].getBoundingClientRect().width;

  let currentIndex = 0;

  const setTrackPosition = (index) => {
    track.style.transform = "translateX(-" + itemWidth * index + "px)";
  };

  nextButton.addEventListener("click", () => {
    if (currentIndex < items.length - 4) {
      currentIndex++;
      setTrackPosition(currentIndex);
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      setTrackPosition(currentIndex);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".evento-img");

  images.forEach((img) => {
    const hoverSrc = img.getAttribute("data-hover");
    const originalSrc = img.getAttribute("data-original");

    img.addEventListener("mouseover", () => {
      img.src = hoverSrc;
    });

    img.addEventListener("mouseout", () => {
      img.src = originalSrc;
    });
  });
});
