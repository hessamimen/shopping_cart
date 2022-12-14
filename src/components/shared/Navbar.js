import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../../context/CartContextProvider';
import { LoginContext } from '../../context/LoggedInContextProvider';

// Icons
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import shopIcon from "../../assets/icons/shop.svg";

// Style
// import styles from "./Navbar.module.css";

const Navbar = () => {

    // TEST CONTEXT
    const loginContext = useContext(LoginContext);
    const {loginData, handleLogin} = loginContext;

//     const [navState, setNavstate] = useState({})

//     const navData = () => {
//         setNavstate(loginData)}



// useEffect(() => {
//     navData()
// })

    // TEST CONTEXT

    const {state} = useContext(CartContext);

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav)
    }


    return (
        <div className='w-screen relative h-20 z-10 bg-zinc-300/80 drop-shadow-2xl'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div >
                    <div className='hidden sm:flex items-center'>
                        <Link to="/" className='cursor-default hover:bg-gray-200 rounded-xl p-2 m-2'>Home</Link>
                        <Link to="/products" className='cursor-default hover:bg-gray-200 rounded-xl p-2 m-2'>Products</Link>
                        <Link to="/aboutus" className='cursor-default hover:bg-gray-200 rounded-xl p-2 m-2'>About Us</Link>
                        <Link to="/signup" className='cursor-default hover:bg-gray-200 rounded-xl p-2 m-2'> {loginData.loggedInStatus === "LOGGED_IN" ? `${loginData.user.name}` : 'Sign Up'} </Link>
                    </div>
                    <div className='sm:hidden mr-4' onClick={handleClick}>
                        {!nav ? <Bars3Icon className='w-7'/> : <XMarkIcon className='w-7'/>}
                    </div>
                    {/* test */}
                    <ul className={!nav ? 'hidden' : 'absolute top-16 left-0 bg-black text-white w-full sm:hidden'}>
                        <li className='border-b-2 border-zinc-300 cursor-default hover:bg-slate-600/80 h-10 text-center p-2'><Link to="/" onClick={handleClick}>Home</Link></li>
                        <li className='border-b-2 border-zinc-300  cursor-default hover:bg-slate-600/80 h-10 text-center p-2'><Link to="/products" onClick={handleClick} >Products</Link></li>
                        <li className='border-b-2 border-zinc-300  cursor-default hover:bg-slate-600/80 h-10 text-center p-2'><Link to="/aboutus" onClick={handleClick}>About Us</Link></li>
                        <li className='border-b-2 border-zinc-300  cursor-default hover:bg-slate-600/80 h-10 text-center p-2'>  <Link to="/signup" onClick={handleClick}>Sign Up</Link></li>
                    </ul>
                </div>
                <div className='relative mr-8'>
                    <Link to="/cart"><img className='w-10' src={shopIcon} alt="shoppingcart"/></Link>
                    <span className='absolute -top-2 -right-2 bg-black rounded-xl w-5 h-5 text-sm text-center text-white'>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;