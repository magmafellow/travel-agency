// core version + navigation, pagination modules:
import Swiper from "swiper"
import { Keyboard, Navigation, Pagination } from "swiper/modules"

// init Swiper:
const swiper = new Swiper(".best-vacation-plan__swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Keyboard],
  slidesPerView: "auto",
  keyboard: {
    enabled: false,
    onlyInViewport: true,
  },
  navigation: {
    prevEl: ".best-vacation-plan__nav_prev",
    nextEl: ".best-vacation-plan__nav_next",
    disabledClass: "disabled",
  },
  spaceBetween: 32,
})
