let body = document.querySelector("body");

// SWIPER

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  loop: true,

  speed: 650,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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


$(document).ready(function () {
  $("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
});

