import React from 'react'

import Logo from '../../components/Logo/Logo'
import NavLinks from '../../components/Nav/NavLinks'
import Button from '../../components/Buttons/Button'

const Navbar = () => {
  return (
    <nav className='max-w-7xl m-auto px-8 py-5 | flex items-end justify-between '>
      <Logo />
      <NavLinks />
      <Button text="Urgent tukay" />
    </nav>
  )
}

export default Navbar