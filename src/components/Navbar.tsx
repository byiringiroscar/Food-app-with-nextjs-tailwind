import Image from 'next/image'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='container pt-6'>
        <div className='flex justify-between items-center'>
            <Image src='/logo.png' width={50} height={50} alt='logo' className='cursor-pointer' />
            <ul className='md:flex hidden gap-8 items-center font-semibold text-[14px]'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Food</li>
                <li className='cursor-pointer'>Dish</li>
                <li className='cursor-pointer'>Contact</li>

                <button className='bg-accent text-white px-6 py-2 rounded-3xl'>SignUp</button>
            </ul>
            <AiOutlineMenu size={30} className="md:hidden text-accent cursor-pointer" />
        </div>
    </div>
  )
}

export default Navbar