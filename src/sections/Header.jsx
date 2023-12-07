import React from 'react'
import Navbar from './Header/Navbar'
import Hero from './Header/Hero'

const Header = () => {
  return (
    <header className='w-full px-8 | bg-bg-black  | '>
      <div className='max-w-7xl m-auto '>
        <Navbar />
        <Hero />
      </div>
    </header>
  )
}

export default Header