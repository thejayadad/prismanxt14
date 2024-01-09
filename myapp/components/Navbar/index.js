import React from 'react'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <header className='px-4 py-8'>
        <nav className='flex mx-auto max-w-screen-lg justify-between'>
            <Logo />
        </nav>
    </header>
  )
}

export default Navbar