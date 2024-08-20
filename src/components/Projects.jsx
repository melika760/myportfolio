import React, { useEffect } from 'react'
import useCurrent from './useCurrent'
import styles from "./Projects.module.css"
import Dominique from "../assets/Dominiques.png"
const Projects = () => {
  const{setsection}=useCurrent()
  useEffect(()=>{
    setsection("Projects")
  },[setsection])
  return (
    <section id='Projects' className={styles.projects}>
      <h2 className={styles.head}>Projects</h2>
      <div className={styles.contents}>
        <div className={styles.content}>
          <a href='/' alt="Dominiques">
          <div className={styles.pic}>
          <div className={styles.image}>
            <img src={Dominique} alt='DominiqueCafe'/>
          </div>
          </div>
          </a>
          
          <div className={styles.info}>
<h3 className={styles.title}>Dominiques' Cafe</h3>
<p className={styles.descriptions}>Full stack social media application built with React, Node.js, Express.js, MongoDB, Socket.io and AWS S3</p>

{/* <a href='/'><div className={styles.live1}>Live app</div></a> */}
<a href='/'>Learn more</a>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
