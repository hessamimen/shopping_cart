import React from 'react'
import { Link } from 'react-router-dom'

//Icons:
import {AiOutlineFacebook} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

//Style:
import styles from "./Footer.module.css"

function footer() {
  return (
    <div className={styles.container}>
    <p className={styles.copyright} >&copy;Copyright <span>Hessam</span></p> 
    <div className={styles.linkContainer}>
        <Link to="/aboutus">About</Link> 
        <Link to="#">Contact Us</Link> 
        <Link to="#">Terms & Conditions</Link> 
        <Link to="#">Privacy Policy</Link> 
    </div>
    <div className={styles.footerLink}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" ><AiOutlineFacebook className={styles.linkIcon}/></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" ><AiOutlineInstagram className={styles.linkIcon}/></a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><AiOutlineLinkedin className={styles.linkIcon}/></a>
    </div>
    </div>
  )
}

export default footer