// SWIPER

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const header = document.querySelector("header");

if (header) {
  const headerBurger = document.querySelector(".header__burger");
  const mobileNav = document.querySelector(".mob-nav");

  headerBurger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    headerBurger.classList.toggle("active");
  });
}
