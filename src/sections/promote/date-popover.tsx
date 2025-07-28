import React from "react"
import { ButtonBrand } from "../../components/ui/button"

export default function DatePopover() {
  return (
    <div id="tippy-popover-promote-date">
      <h3 className="typo-h3 text-primary-b">Date</h3>
      <p className="mb-4">Pick up the date</p>
      <input className="date-input" id="promote-datepicker" />
    </div>
  )
}
