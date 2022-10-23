import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
// import styles from "./Navbar.module.css";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className='w-screen fixed h-20 z-10 bg-zinc-300/60 drop-shadow-2xl'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center'>
                    <Link to="#" className='cursor-default hover:bg-indigo-600 rounded-xl p-2 m-2'>Home</Link>
                    <Link to="/products" className='cursor-default hover:bg-indigo-600 rounded-xl p-2 m-2'>Products</Link>
                    <Link to="/aboutus" className='cursor-default hover:bg-indigo-600 rounded-xl p-2 m-2'>About Us</Link>
                    <Link to="/signup" className='cursor-default hover:bg-indigo-600 rounded-xl p-2 m-2'>Sign Up</Link>
                </div>
                <div className='relative mr-20'>
                    <Link to="/cart"><img className='w-12' src={shopIcon} alt="shoppingcart"/></Link>
                    <span className='absolute top-0 right-0 bg-indigo-600 rounded-xl w-5 h-5 text-sm text-center text-white'>{state.itemsCounter}</span>
                </div>
                {/* <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} alt="shoppingcart"/></Link>
                    <span>{state.itemsCounter}</span>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;