import React from 'react'
import { Tchildren } from '../interfaces'

function Container({ children }: Tchildren) {
  return (
    <>
      <section className="relative z-30 mx-auto h-fit w-full max-w-[1400px] px-3 text-zinc-100">
        {children}
      </section>
    </>
  )
}

export default Container
