
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import bgVid from "../assets/video/e00c0ff7-7e4e0fb8.mp4"
import newWave from "../assets/images/new-wave.png"

//Context
import { LoginContext } from '../context/LoggedInContextProvider'


function Home() {

  const loginContext = useContext(LoginContext);

  return (
    <div className='relative min-h-[80vh] md:min-h-screen bg-black/20 bg-blend-overlay '>
        <div className='relative -z-10 sm:top-[80%]'>
        {/* <div className='absolute -z-10 top-[50%] sm:top-[40%] translate-y-[-60%]'> */}
            <video autoPlay 
                  loop 
                  muted 
                  className="object-fill absolute top-1/2 translate-y-[50%] sm:translate-y-0">
            <source src={bgVid} type="video/mp4" />
            </video>
        </div>
        <div className='relative top-10 sm:top-28'>
            <img className=' w-1/2 mx-auto' src={newWave} alt="newWave" />
        </div>
        <div className='absolute h-20 bottom-10 left-1/2 -translate-x-1/2 md:scale-150'>
        {/* <div className='absolute h-20 bottom-[10%] sm:bottom-[20%] sm:translate-y-[-50%] left-[55%] translate-x-[-50%] w-80 '> */}
            <Link to="/products" className='border box-border italic rounded-xl px-8 py-4 text-white hover:bg-black/60 hover:border-none hover:cursor-default'> Shop New Products</Link>
        </div>
    </div>
  )
}

export default Home