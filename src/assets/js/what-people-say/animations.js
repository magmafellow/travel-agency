import { appearByTrigger, appearsViaLinesByTrigger, rotateViaStaggerByTrigger, translateXByTrigger } from "../utils/gsap/utils"

document.addEventListener("DOMContentLoaded", (event) => {
  appearByTrigger('.what-people-say__title')
  appearsViaLinesByTrigger('.what-people-say__description')
  translateXByTrigger('.what-people-say__flies', -100)
})
