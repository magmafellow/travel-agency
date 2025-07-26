import Swiper from "swiper"
import { Keyboard, Navigation } from "swiper/modules"

const baseClass = "exclusive-deals"

const swiper = new Swiper(`.${baseClass}__swiper`, {
  modules: [Navigation, Keyboard],
  spaceBetween: 32,
  speed: 500,
  slidesPerView: "auto",
  keyboard: {
    enabled: false,
    onlyInViewport: true,
  },

  navigation: {
    prevEl: `.${baseClass}__nav_prev`,
    nextEl: `.${baseClass}__nav_next`,
    disabledClass: "disabled",
  },
})
