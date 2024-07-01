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
  const grupos = document.querySelectorAll(
    ".grupo1, .evento2, .evento3, .evento4, .evento5"
  );

  grupos.forEach((grupo) => {
    const img = grupo.querySelector("img");
    const hoverSrc = grupo.getAttribute("data-hover-img");
    const originalSrc = grupo.getAttribute("data-original-img");

    grupo.addEventListener("mouseover", () => {
      img.src = hoverSrc;
    });

    grupo.addEventListener("mouseout", () => {
      img.src = originalSrc;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carrusel = document.querySelector(".carrusel");
  const articles = document.querySelectorAll(".article.carrusel");
  let currentIndex = 0;
  const totalCards = articles.length;
  const cardsPerView = 3;

  function showNextCard() {
    currentIndex = (currentIndex + 1) % totalCards;
    const offset = -currentIndex * (115 / totalCards);
    carrusel.style.transform = `translateX(${offset}%)`;
  }

  setInterval(showNextCard, 3000);
});
