export default function popoverFabric(triggerSelector, popoverSelector, blockScroll=true, ctaSelector, placement = "bottom") {
  const res = tippy(triggerSelector, {
    content: document.querySelector(popoverSelector),
    allowHTML: true,
    interactive: true,
    trigger: "click",
    placement: "bottom",
    onCreate: (instance) => {
      const tippyBox = instance.popper.querySelector(".tippy-box")
      tippyBox.classList.add("general-popover")

      // Make delegation. It will save you
      if (ctaSelector) {
        setTimeout(() => {
          const actionButton = document.querySelector(ctaSelector)
          actionButton.addEventListener('click', function() {
            instance.hide()
          })
        }, 500)
      }
    },
    onShow: (instance) => {
      const popper = instance.popper
      const trigger = instance.reference
      popper.classList.add("showed")
      popper.classList.remove("hidden")
      trigger.classList.add("showed")
      trigger.classList.remove("hidden")
      if (blockScroll) {
        document.body.classList.add('scroll-lock')
      }
    },
    onHide: (instance) => {
      const popper = instance.popper
      const trigger = instance.reference
      popper.classList.add("hidden")
      popper.classList.remove("showed")
      trigger.classList.add("hidden")
      trigger.classList.remove("showed")
      document.body.classList.remove('scroll-lock')
    },
  })

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' || event.code === 'Escape') {
      res.forEach(el => el.hide())
    }
  })

  return res
}
