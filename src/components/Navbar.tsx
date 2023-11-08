import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='container pt-6'>
        <div className='flex justify-between items-center'>
            <Image src='/logo.png' width={50} height={50} alt='logo' />
            <ul className='md:flex hidden gap-8 items-center font-semibold text-[14px]'>
                <li>Home</li>
                <li>About</li>
                <li>Food</li>
                <li>Dish</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar