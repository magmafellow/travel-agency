import { appearByTrigger, translateXByTrigger } from "../utils/gsap/utils"

document.addEventListener("DOMContentLoaded", (event) => {
  const titleElem = document.querySelector(".promote__title")

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".promote__title",
    },
  })

  tl.to(
    titleElem,
    { opacity: 1, duration: 1.25 }
  )

  const paragraph = document.querySelector(".promote__description")
  let mySplitText = SplitText.create(paragraph, {
    type: "lines",
    charsClass: "char",
  })
  const lines = mySplitText.lines

  gsap.from(lines, {
    opacity: 0,
    duration: 0.35,
    y: 30,
    stagger: {
      each: 0.35,
    },
  })

  const picture = document.querySelector(".promote__picturish-shell")
  gsap.to(picture, {
    opacity: 1,
    duration: 1.25,
  })

})
