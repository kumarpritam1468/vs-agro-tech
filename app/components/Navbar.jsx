'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Squash as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='fixed top-0 backdrop-blur-2xl bg-black/60 h-[10svh] w-full flex justify-between items-center px-12 max-md:px-6 z-50 border-b border-b-black shadow-2xl'>
      <div className="flex items-center gap-2">
        <Image src="/logo.png" alt="Logo" width={80} height={80} />
        <h2 className=' font-medium md:hidden text-2xl text-white'> VS Agrotech</h2>
      </div>

      <div className='navlinks flex gap-1 max-md:hidden'>
        <a href='/' className={`${pathname === '/' ? 'active' : ''}`}>Home</a>
        <a href='/products' className={`${pathname === '/products' ? 'active' : ''}`}>Products</a>
        <a href='/gallery' className={`${pathname === '/gallery' ? 'active' : ''}`}>Gallery</a>
        <a href='/about' className={`${pathname === '/about' ? 'active' : ''}`}>About</a>
        <a href='/contact' className={`${pathname === '/contact' ? 'active' : ''}`}>Contact Us</a>
      </div>
      <div className='md:hidden'>
        <Hamburger size={25} color='#ffffff' onToggle={toggled => {
          if (toggled) {
            setMenuOpen(true)
          } else {
            setMenuOpen(false)
          }
        }} />
      </div>

      <div className={`navlinks absolute top-[12vh] rounded-3xl md:hidden px-8 py-5 flex flex-col items-center gap-1 bg-[#66C15F] transition-all duration-300 ease-in-out ${menuOpen ? 'right-4' : '-right-60'}`}>
        <a href='/' className={`${pathname === '/' ? 'active' : ''}`}>Home</a>
        <a href='/products' className={`${pathname === '/products' ? 'active' : ''}`}>Products</a>
        <a href='/gallery' className={`${pathname === '/gallery' ? 'active' : ''}`}>Gallery</a>
        <a href='/about' className={`${pathname === '/about' ? 'active' : ''}`}>About</a>
        <a href='/contact' className={`${pathname === '/contact' ? 'active' : ''}`}>Contact Us</a>
      </div>
    </nav>
  )
}

export default Navbar