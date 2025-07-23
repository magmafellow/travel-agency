// core version + navigation, pagination modules:
import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"

// init Swiper:
const swiper = new Swiper(".best-vacation-plan__swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 32,
})
