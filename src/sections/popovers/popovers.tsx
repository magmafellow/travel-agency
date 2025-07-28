import React from 'react'
import { ButtonBrand } from '../../components/ui/button'
import LocationPopover from '../promote/location-popover'
import DatePopover from '../promote/date-popover'
import GuestPopover from '../promote/guest-popover'

export default function Popovers() {
  return (
    <div className='popovers_box'>
      <LocationPopover />
      <DatePopover />
      <GuestPopover />
    </div>
  )
}
