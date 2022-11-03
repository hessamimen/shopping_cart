
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import bgVid from "../assets/video/e00c0ff7-7e4e0fb8.mp4"
import newWave from "../assets/images/new-wave.png"

//Context
import { LoginContext } from '../context/LoggedInContextProvider'


function Home() {

  const loginContext = useContext(LoginContext);

  return (
    <div className='relative min-h-[80vh] mt-20 bg-black/20 bg-blend-overlay '>
    <h1>Status: {loginContext.loginData.loggedInStatus}</h1>
        <div className='absolute -z-10 top-[50%] sm:top-[40%] translate-y-[-60%]'>
            <video autoPlay loop muted 
            className="object-fill">
            <source src={bgVid} type="video/mp4" />
            </video>
        </div>
        <div>
            <img className='py-20 m-auto w-1/2 md:absolute md:top-[50%] md:translate-y-[-100%] md:left-[50%] md:translate-x-[-50%] md:w-1/3 md:p-10' src={newWave} alt="newWave" />
        </div>
        <div className='absolute h-20 bottom-[10%] sm:bottom-[20%] sm:translate-y-[-50%] left-[55%] translate-x-[-50%] w-80 '>
            <Link to="/products" className='border italic rounded-xl px-8 py-4 text-white hover:bg-black/60 hover:border-none hover:cursor-default'> Shop New The best Products</Link>
        </div>
    </div>
  )
}

export default Home