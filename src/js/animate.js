function checkAndAnimate() {
  const offerCards = document.querySelectorAll('.cards__item');
  const gallery = document.querySelector('.gallery');
  const height = 1100;
  const galleryRect = gallery.getBoundingClientRect();
  const galleryTop = galleryRect.top;

  offerCards.forEach(element => {
    const elementRect = element.getBoundingClientRect();
    const elementTop = elementRect.top;

    if (elementTop <= height) {
      element.classList.add('animate__fadeInUp');
    }
  });

  if (galleryTop <= height) {
    gallery.classList.add('animate__fadeIn');
  }
}

window.addEventListener('scroll', checkAndAnimate);
