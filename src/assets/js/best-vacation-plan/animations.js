import { appearByTrigger, appearsViaLinesByTrigger, rotateViaStaggerByTrigger, translateXByTrigger } from "../utils/gsap/utils"

document.addEventListener("DOMContentLoaded", (event) => {
  appearByTrigger('.best-vacation-plan__title')
  appearsViaLinesByTrigger('.best-vacation-plan__description')
  translateXByTrigger('.best-vacation-plan__palms')
})
