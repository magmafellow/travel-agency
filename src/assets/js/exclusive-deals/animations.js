import { appearByTrigger, appearsViaLinesByTrigger, rotateViaStaggerByTrigger, translateXByTrigger } from "../utils/gsap/utils"

document.addEventListener("DOMContentLoaded", (event) => {
  appearByTrigger('.exclusive-deals__title')
  appearsViaLinesByTrigger('.exclusive-deals__description')
})
