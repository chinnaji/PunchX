import React from 'react'

type Tauthor = {
  name: string
  isLightBg?: boolean
}
function Author({ name, isLightBg }: Tauthor) {
  return (
    <span
      className={`text-md text-sm uppercase lg:text-base ${
        isLightBg ? 'text-zinc-900' : 'text-white'
      }`}
    >
      by - {name}
    </span>
  )
}

export default Author
