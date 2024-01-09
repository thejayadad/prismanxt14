import React from 'react'
import Logo from '../Logo'
import AuthLinks from './AuthLinks'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='px-4 py-12'>
        <nav className='flex mx-auto max-w-screen-lg justify-between'>
            <Logo />
            <div className='flex items-center gap-2'>
                <Link href={'/dashboard'}>Dashboard</Link>
            <AuthLinks />
            </div>
        </nav>
    </header>
  )
}

export default Navbar