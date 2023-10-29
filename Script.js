// Gsap Animation Header //

window.addEventListener("load", function () {
  const header = document.querySelector(".header");
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl.to(header, { opacity: 1, transform: "translateY(0)", duration: 2 });
});

// --------------------------------------------------------------------- //

// Swiper //
const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const slideImages = document.querySelectorAll(".swiper-slide ");
slideImages.forEach((image) => {
  image.addEventListener("click", () => {
    if (swiper.activeIndex === swiper.slides.length - 5) {
      swiper.slideTo(8);
    } else {
      swiper.slideNext();
    }
  });
});
