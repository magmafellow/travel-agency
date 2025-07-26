import Swiper from "swiper"
import { Keyboard, Navigation, Pagination } from "swiper/modules"

const baseClass = "latest-blog"

const swiper = new Swiper(`.${baseClass}__swiper`, {
  modules: [Navigation, Pagination, Keyboard],
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
  pagination: {
    el: ".latest-blog__pagination",
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
})
