import { appearByTrigger, translateXByTrigger } from "../utils/gsap/utils"

document.addEventListener("DOMContentLoaded", (event) => {
  appearByTrigger(".subscribe-section__block")
  translateXByTrigger('.subscribe-section__block')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.subscribe-section__block',
      start: 'top bottom',
      toggleActions: 'restart none none none',
    }
  })
  tl.fromTo('.subscribe-section__block', {rotate: 7}, {rotate: 0, duration: 1})
})
