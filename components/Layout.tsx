import React from 'react'
import { Tchildren } from '../interfaces/'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }: Tchildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
