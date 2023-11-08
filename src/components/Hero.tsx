import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative min-h-screen'>
        <Image src='/hero2.png' alt='hero bg' width={1000} height={600} />
    </div>
  )
}

export default Hero