import React, { useState } from 'react'
import styles from "./Nav.module.css"
const Nav = () => {
    const[activeNav,setActiveNav]=useState("home")
    const handleclick=(nav)=>{
setActiveNav(nav)
    }
  return (
   <nav className={styles.navigationbar}>
<ul className={styles.navigation}>
    <li className={`${styles.navItems} ${activeNav==="home"?styles.active:""}`} onClick={()=>handleclick("home")}><a href='#home'>Home</a></li>
    <li className={`${styles.navItems} ${activeNav==="About"?styles.active:""}`} onClick={()=>handleclick("About")}><a href='#About'>About</a></li>
    <li className={`${styles.navItems} ${activeNav==="Projects"?styles.active:""}`} onClick={()=>handleclick("Projects")}><a href='#Projects'>Projects</a></li>
    <li className={`${styles.navItems} ${activeNav==="Contact"?styles.active:""}`} onClick={()=>handleclick("Contact")}><a href='#Contact'>Contact</a></li>
</ul>
   </nav>
  )
}

export default Nav
