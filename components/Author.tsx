import React from 'react'

type Tauthor = {
  name: string
  isLightBg?: boolean
}
function Author({ name, isLightBg }: Tauthor) {
  return (
    <span
      className={`text-md uppercase ${
        isLightBg ? 'text-zinc-900' : 'text-white'
      }`}
    >
      by - {name}
    </span>
  )
}

export default Author
