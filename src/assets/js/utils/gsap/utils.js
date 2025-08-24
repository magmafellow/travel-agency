export function appearByTrigger(selector) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: selector,
      toggleActions: "restart none none none",
    },
  })

  tl.fromTo(
    selector,
    { opacity: 0 },
    { opacity: 1, y: 0, delay: 0.2, duration: 1.5 }
  )
}

export function appearsViaLinesByTrigger(selector) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: selector,
      toggleActions: "restart none none none",
      start: "top bottom",
      end: "bottom top",
    },
  })
  const paragraph = document.querySelector(selector)
  let mySplitText = SplitText.create(paragraph, {
    type: "lines",
    charsClass: "char",
  })
  const lines = mySplitText.lines
  tl.fromTo(
    lines,
    {
      duration: 1,
      opacity: 0,
      y: 30,
      stagger: {
        each: 0.35,
      },
    },
    {
      duration: 1,
      delay: 0.3,
      opacity: 1,
      y: 0,
      stagger: {
        each: 0.35,
      },
    }
  )
}

export function rotateViaStaggerByTrigger(selectorTrigger, selector) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: selectorTrigger,
      toggleActions: "restart none none none",
      start: "top bottom",
      end: "bottom center+=200",
      scrub: 0.5,
    },
  })

  tl.fromTo(
    selector,
    {
      rotate: -45,
      stagger: {
        each: 0.2,
      },
    },
    {
      rotate: 0,
      stagger: {
        each: 0.2,
      },
    }
  )
}

export function translateXByTrigger(selector, x = 100, duration = 1) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: selector,
      toggleActions: "restart none none none",
    },
  })

  tl.from(selector, { x, duration })
}
