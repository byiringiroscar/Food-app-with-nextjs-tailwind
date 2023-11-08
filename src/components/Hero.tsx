import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='relative min-h-screen'>
        <Image className='lg:w-[580px] xl:w-[620px] h-auto absolute top-0 right-0 -z-10' src='/hero2.png' alt='hero bg' width={1000} height={600} />
        <Navbar />
    </div>
  )
}

export default Hero