import React from 'react'
import { BiCalendarEvent } from 'react-icons/bi'

type Tdate = {
  value: string
  isLightBg?: boolean
}
function Date({ value, isLightBg }: Tdate) {
  return (
    <span
      className={`mr-4 flex items-center text-sm md:mr-8 lg:text-base ${
        isLightBg ? 'text-zinc-500' : 'text-white'
      }`}
    >
      <BiCalendarEvent className="mr-1 text-xl" /> <span>{value}</span>
    </span>
  )
}

export default Date
