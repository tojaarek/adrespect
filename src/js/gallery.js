import Macy from "macy";
import simpleLightbox from "simplelightbox";

const macyGallery = new Macy({
  container: "#gallery",
  trueOrder: false,
  waitForImages: true,
  columns: 3,
  margin: 43,
  breakAt: {
    1023: {
      margin: 20,
      columns: 2,
    },
  },
});

const showMoreButton = document.getElementById("showMore");
const galleryOverlay = document.querySelector(".gallery__overlay");
const macyContainer = document.getElementById("gallery");
const lightbox = new simpleLightbox(".gallery a", {
  showCounter: false,
});

const hiddenImages = [
  {
    src: "/project-5.a26b06d0.png",
    big: "./images/project-5@2x.png",
    alt: "Hidden Image 1",
  },
  {
    src: "/project-1.e80da68e.png",
    big: "./images/project-1@2x.png",
    alt: "Hidden Image 2",
  },
  {
    src: "/project-6.14072982.png",
    big: "./images/project-6@2x.png",
    alt: "Hidden Image 2",
  },
];

function smoothScroll() {
  const { height: cardHeight } =
    macyContainer.firstElementChild.getBoundingClientRect();
  const scrollDistance = cardHeight * 1;

  window.scrollBy({
    top: scrollDistance,
    behavior: "smooth",
  });
}

showMoreButton.addEventListener("click", () => {
  galleryOverlay.classList.add("gallery__overlay--opacity");
  showMoreButton.classList.add("hidden");

  hiddenImages.forEach((image) => {
    const data = `<li><a href="${image.big}" class="gallery__item"><img class="gallery__image"
    src="${image.src}" alt="${image.alt}"></a></li>`;
    macyContainer.insertAdjacentHTML("beforeend", data);
    lightbox.refresh();
  });

  macyGallery.recalculate(true);
  smoothScroll();
});

window.addEventListener("resize", () => {
  macyGallery.recalculate(true);
});
