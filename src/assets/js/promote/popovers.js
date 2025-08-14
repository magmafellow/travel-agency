import popoverFabric from "../utils/popover-fabric"

window.addEventListener("DOMContentLoaded", function () {
  const locationTippy = popoverFabric(
    "#tippy-trigger-promote-location",
    "#tippy-popover-promote-location",
    true,
    "#promote-location-action"
  )

  const dateTippy = popoverFabric(
    "#tippy-trigger-promote-date",
    "#tippy-popover-promote-date",
    false
  )

  const guestTippy = popoverFabric(
    "#tippy-trigger-promote-guest",
    "#tippy-popover-promote-guest",
    true,
    "#promote-guest-action"
  )
})
