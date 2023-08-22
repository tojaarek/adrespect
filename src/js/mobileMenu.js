const icon = document.getElementById("icon");
const icon1 = document.getElementById("a");
const icon2 = document.getElementById("b");
const icon3 = document.getElementById("c");

icon.addEventListener("click", () => {
  icon1.classList.toggle("a");
  icon2.classList.toggle("c");
  icon3.classList.toggle("b");
});

const mobileMenu = document.querySelector(".js-menu-container");
const openMenuButton = document.querySelector(".js-open-menu");
const header = document.querySelector(".header");

const toggleMenu = () => {
  const isMenuOpen = mobileMenu.classList.toggle("is-open");
  header.classList.toggle("header--border");
};

openMenuButton.addEventListener("click", toggleMenu);

window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
  if (!event.matches) return;
  mobileMenu.classList.remove("is-open");
  icon1.classList.toggle("a");
  icon2.classList.toggle("c");
  icon3.classList.toggle("b");
});
