import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import shopIcon from "../../assets/icons/shop.svg";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
            <div className={styles.productLink}>
                <Link  to="#">Home</Link>
                <Link  to="/products">Products</Link>
                <Link  to="#">About Us</Link>
                <Link  to="#">Sign Up</Link>

            </div>
                <div className={styles.iconContainer}>
                    <Link to="/cart"><img src={shopIcon} /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;