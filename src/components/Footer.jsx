import React from 'react'
import styles from "./Footer.module.css"
import arrow from "../assets/svg.svg"
import github from "../assets/github.png"
import email from "../assets/mail.png"
const Footer = () => {
  return (
  <footer className={styles.footer}>
    <a href='#home' alt="Home">
    <div className={styles.arrow}>
<img src={arrow} alt='arrow'className={styles.svg}/>
    </div>
    </a>
    
    <div className={styles.social}>
        <a href='https://github.com/melika760' alt="Github" target='__blank'>
        <div className={styles.socials}>
        <img src={github} alt='github'/>
            </div></a>
            <a href='mailto:melikaaatafazoli@gmail.com' alt="email" target='__blank'>
        <div className={styles.socials2}>
        <img src={email} alt='email'/>
            </div></a>
    </div>
  </footer>
  )
}

export default Footer
