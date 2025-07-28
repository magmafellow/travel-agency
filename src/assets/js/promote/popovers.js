import popoverFabric from "../utils/popover-fabric"

window.addEventListener("DOMContentLoaded", function () {
  popoverFabric(
    "#tippy-trigger-promote-location",
    "#tippy-popover-promote-location"
  )

  popoverFabric(
    "#tippy-trigger-promote-date",
    "#tippy-popover-promote-date",
    false
  )

  const guestTippy = popoverFabric(
    "#tippy-trigger-promote-guest",
    "#tippy-popover-promote-guest",
    false,
    '#promote-guest-action'
  )
})
