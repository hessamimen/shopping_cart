import React from 'react'

function NavBar1() {
  return (
    <div className='w-full flex lg:grid grid-cols-2 bg-black h-10 text-white items-center'>
        <div className='m-auto lg:mx-20'>
            <h3>FREE SHIPPING FOR ORDERS OVER $100</h3>
        </div>
        <div className='hidden md:flex justify-end xl:mx-20 items-center'>
            <p className='mx-5'>Sustainability</p>
            <p className='mx-5'>Find a store</p>
            <p className='mx-5'>Customer Service</p>
        </div>
    </div>
  )
}

export default NavBar1