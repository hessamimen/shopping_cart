import React from 'react'

//Images:
import abuotImg from '../assets/images/aboutUsImage.jpeg';

//Styles:
import styles from "./About.module.css";



function About() {
  return (
    <div className={styles.container}>
    <div className={styles.textContainer}>
        <h2>About Us</h2>
        <p>The number one fashion and lifestyle destination in Australia and New Zealand. We believe it's all about the people. Our customer focus is matched by the empowerment and support we giveour employees and partners who make what we do possible.</p>
    </div>
        <img className={styles.imageContainer} src={abuotImg} alt="aboutus" />
    </div>
  )
}

export default About