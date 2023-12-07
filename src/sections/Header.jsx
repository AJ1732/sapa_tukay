import React from 'react'
import Navbar from './Header/Navbar'
import Hero from './Header/Hero'

const Header = () => {
  return (
    <header className='w-full | bg-bg-black  | '>
      <div className=''>
        <Navbar />
        <hr />
        <Hero />
      </div>
    </header>
  )
}

export default Header