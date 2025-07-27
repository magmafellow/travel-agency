window.addEventListener("DOMContentLoaded", function () {
  console.log("called via DOMContentLoaded")
  tippy("#trigger-tippy", {
    content: document.querySelector("#tippy-popover"),
    allowHTML: true,
    interactive: true,
    trigger: "click",
    placement: "bottom",
    onCreate: (instance) => {
      console.log('instance: ', instance)
      const tippyBox = instance.popper.querySelector('.tippy-box')
      tippyBox.classList.add('general-popover')
    },
  })
})
