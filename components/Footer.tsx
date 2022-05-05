import React from 'react'
import Container from './Container'

function Footer() {
  return (
    <footer className="bg-red-600 bg-opacity-20 p-3">
      <Container>
        <div className="cursor-pointer text-center text-3xl font-semibold text-black">
          PUNCH<span className="text-4xl text-red-600">X</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
