import React from 'react'

import Logo from '../../components/Logo/Logo'
import NavLinks from '../../components/Nav/NavLinks'
import Button from '../../components/Buttons/Button'

const Navbar = () => {
  return (
    <nav className='flex items-end justify-between | text-white | py-5'>
      <Logo />
      <NavLinks />
      <Button text="Urgent tukay" />
    </nav>
  )
}

export default Navbar