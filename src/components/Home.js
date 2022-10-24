
import React from 'react'
import { Link } from 'react-router-dom'

import bgVid from "../assets/video/e00c0ff7-7e4e0fb8.mp4"
import newWave from "../assets/images/new-wave.png"

function Home() {
  return (
    <div className='relative min-h-screen mt-20 bg-black/20 bg-blend-overlay '>
        <div className='absolute -z-10 top-[40%] sm:top-[50%] translate-y-[-50%]'>
            <video autoPlay loop muted 
            className="object-fill">
            <source src={bgVid} type="video/mp4" />
            </video>
        </div>
        <div>
            <img className='py-20 m-auto w-1/2 md:absolute md:top-[50%] md:translate-y-[-150%] md:left-[50%] md:translate-x-[-50%] md:w-1/3 md:p-10' src={newWave} alt="newWave" />
        </div>
        <div className='absolute h-20 bottom-[20%] sm:bottom-[20%] sm:translate-y-[-50%] left-[55%] translate-x-[-50%] w-80 '>
            <Link to="/products" className='border italic rounded-xl px-8 py-4 text-white hover:bg-black/60 hover:border-none hover:cursor-default'> Shop New The best Products</Link>
        </div>
    </div>
  )
}

export default Home