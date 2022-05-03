import React from 'react'
import { Tchildren } from '../interfaces/'
import Navbar from './Navbar'

function Layout({ children }: Tchildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
