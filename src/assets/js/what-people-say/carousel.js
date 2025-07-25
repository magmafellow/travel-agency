import Swiper from "swiper"
import {
  EffectCreative,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules"

const swiper = new Swiper(".what-people-say__swiper", {
  modules: [Navigation, Pagination, EffectCreative, Keyboard],
  slidesPerView: 1,
  effect: "creative",
  spaceBetween: 32,
  slideNextClass: "next-slide",
  slidePrevClass: "prev-slide",
  speed: 500,
  keyboard: {
    enabled: false,
    onlyInViewport: true,
  },

  navigation: {
    prevEl: ".what-people-say__nav_prev",
    nextEl: ".what-people-say__nav_next",
    disabledClass: "disabled",
  },
  creativeEffect: {
    limitProgress: 1,
    next: {
      translate: [30, 35, 0],
    },
    prev: {
      translate: [-50, 0, 0],
    },
  },
  breakpoints: {
    1170: {
      creativeEffect: {
        limitProgress: 1,
        next: {
          translate: [30, 70, 0],
        },
        prev: {
          translate: [-50, 0, 0],
        },
      },
    },
  },
})
