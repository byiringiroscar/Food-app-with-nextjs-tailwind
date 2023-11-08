import React from 'react'
import Dash from './Dash'

const Feature = () => {
  return (
    <div className='container pt-40'>
        <h2 className='text-6xl font-bold'>Our</h2>
        <h2 className='text-6xl font-bold pt-2'>Featured <span className='text-accent'>Food</span></h2>
        <p className='max-w-[550px] pt-10 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quos?</p>

        <Dash />
    </div>
  )
}

export default Feature