import { appearByTrigger, appearsViaLinesByTrigger, rotateViaStaggerByTrigger, translateXByTrigger } from "../utils/gsap/utils"

document.addEventListener("DOMContentLoaded", (event) => {
  appearByTrigger(".things-you-need-to-do__title")
  appearsViaLinesByTrigger('.things-you-need-to-do__description')
  translateXByTrigger(".things-you-need-to-do__flies-couple", 100, 0.7)
  rotateViaStaggerByTrigger(".things-you-need-to-do__grid", ".things-you-need-to-do__card-instruction")
})
