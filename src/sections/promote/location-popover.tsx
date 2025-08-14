import React from 'react'
import { ButtonBrand } from '../../components/ui/button'

export default function LocationPopover() {
  return (
      <div id='tippy-popover-promote-location'>
        <h3 className='typo-h3 text-primary-b'>Location</h3>
        <p className='mb-4'>Where are you going</p>
        <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita consectetur iste fugit magni ullam officiis?</p>
        <ButtonBrand id='promote-location-action' className='w-full'>Select</ButtonBrand>
      </div>
  )
}
