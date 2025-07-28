import React from "react"
import { ButtonBrand } from "../../components/ui/button"

export default function GuestPopover() {
  return (
    <div id="tippy-popover-promote-guest">
      <h3 className="typo-h3 text-primary-b">Guest</h3>
      <p className="mb-4">Number of guest</p>
      <p className="mb-4">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
        consectetur iste fugit magni ullam officiis?
      </p>
      <ButtonBrand id='promote-guest-action' className="w-full promote-guest-action-class">Select</ButtonBrand>
    </div>
  )
}
