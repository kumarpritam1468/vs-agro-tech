'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Squash as Hamburger } from 'hamburger-react'
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === '/') {
        const isScrolled = window.scrollY > 100;
        setScrolled(isScrolled);
      } else {
        setScrolled(true);
      }
    };

    handleScroll();
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`fixed top-0 ${scrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'} h-[10svh] w-full flex justify-between items-center px-12 max-md:px-6 z-50 transition-all duration-700 ease-in-out`}>
      <div className="flex items-center gap-2 lg:gap-6">
        <Image src="/logo.png" alt="Logo" width={80} height={80} />
        <h2 className=' font-medium text-2xl text-white'> VS Agrotech</h2>
      </div>

      <div className='navlinks flex gap-3 max-md:hidden'>
        <a href='/' className={`${pathname === '/' ? 'active' : ''}`}>Home</a>
        <Link href='/products' className={`${pathname === '/products' ? 'active' : ''}`}>Products</Link>
        <Link href='/about' className={`${pathname === '/about' ? 'active' : ''}`}>About</Link>
        <Link href='/contact' className={`${pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
      </div>
      <div className='md:hidden'>
        <Hamburger aria-label="Menu" size={25} color='#ffffff' onToggle={toggled => {
          if (toggled) {
            setMenuOpen(true)
          } else {
            setMenuOpen(false)
          }
        }} />
      </div>

      <div className={`navlinks navlinksPhn absolute w-[60vw] h-[90dvh] top-[10svh] md:hidden pl-8 py-10 flex flex-col justify-between bg-white border-l-2 border-l-gray-600 transition-all duration-300 ease-in-out ${menuOpen ? 'right-0' : '-right-[60vw]'}`}>
        <div className=' flex flex-col gap-4'  onClick={() => setMenuOpen(prev => !prev)}>
          <a href='/' className={`${pathname === '/' ? 'active' : ''}`}>Home</a>
          <Link href='/products' className={`${pathname === '/products' ? 'active' : ''}`}>Products</Link>
          <Link href='/about' className={`${pathname === '/about' ? 'active' : ''}`}>About</Link>
          <Link href='/contact' className={`${pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
        </div>

        <div className=' flex flex-col w-1/2 max-md:w-full'>
          <Image src='/logo.png' alt='Logo' width={60} height={60} />
          <h1 className=' font-medium text-xl mt-4'>V S Agrotech,</h1>
          <h2 className=' text-lg'>Mrs Varsha Agarwal</h2>
          <h3 className=' text-lg'>Customer helpline: <br /> 82495-10313(10 am to 5 pm) </h3>
        </div>
      </div>
    </nav>
  )
}

export default Navbar