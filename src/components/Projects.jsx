import React from 'react'
import styles from "./Projects.module.css"
import Dominique from "../assets/Dominiques.png"
import Grocery from "../assets/GroceryStore.png"
import Dictionary from "../assets/Dictionary.png"
import Weatherapp from "../assets/Weatherapp.png"
import melromin from "../assets/melromin.png"
import rock from "../assets/Rock.png"
const Projects = () => {

  return (
    <section id='Projects' className={styles.projects}>
      <h2 className={styles.head}>Projects</h2>
        <div className={`${styles.content} ${styles.left}`}>
          <a href='https://dominique-5aac4.web.app/' alt="Dominiques" target='__blank'>
          <div className={styles.pic}>
          <div className={styles.image}>
            <img src={Dominique} alt='DominiqueCafe'/>
          </div>
          </div>
          </a>
          
          <div className={styles.info}>
<h3 className={styles.title}>Dominiques' Cafe</h3>
<p className={styles.descriptions}>Full stack resturant website built with React,CSS Module,React-router,Firebase</p>

<a href='https://dominique-5aac4.web.app/' target='__blank' alt="Domique's Cafe"><div className={styles.live1}>Live app</div></a>
<a href='https://github.com/melika760/OrderCheck' target='__blank'><div className={styles.live1}>Learn more</div></a>


          </div>
        </div>
        <div className={`${styles.content} ${styles.right}`}>
          <div className={styles.info2}>
<h3 className={styles.title}>Groccery Store</h3>
<p className={styles.descriptions}>Full stack Groccery store  built with Nextjs,Tailwind CSS,Strapi</p>

<a href='https://groccerystore.vercel.app/' target='__blank' alt="GroceryStore"><div className={styles.live1}>Live app</div></a>
<a href='https://github.com/melika760/newNextJsProject' target='__blank'><div className={styles.live1}>Learn more</div></a>


          </div>
          <a href='https://groccerystore.vercel.app/' alt="GroceryStore" target='__blank'>
          <div className={styles.pic2}>
          <div className={styles.image2}>
            <img src={Grocery} alt='GrocceryStore'/>
          </div>
          </div>
          </a>
        </div>
<div className={`${styles.content} ${styles.left}`}>
          <a href='https://melrominglobalnetwork.co.uk/' alt="Melromin" target='__blank'>
          <div className={styles.pic}>
          <div className={styles.image}>
            <img src={melromin} alt='Melromin'/>
          </div>
          </div>
          </a>
          
          <div className={styles.info}>
<h3 className={styles.title}>Melromin Global Network</h3>
<p className={styles.descriptions}>Full-stack website built with Next.js, Firebase, and Stripe, featuring two admin panels for chat, contracts, and payments.</p>

<a href='https://melrominglobalnetwork.co.uk/' target='__blank' alt="DictionaryApp"><div className={styles.live1}>Live app</div></a>
<a href='https://github.com/melika760/MelrominGlobalNetwork' target='__blank'><div className={styles.live1}>Learn more</div></a>


          </div>
        </div>
        <div className={`${styles.content} ${styles.right}`}>
          <div className={styles.info2}>
<h3 className={styles.title}>Weather App</h3>
<p className={styles.descriptions}>Full stack Weather app built with React and Axios</p>

<a href='https://fanciful-bublanina-8bd2c6.netlify.app/' target='__blank' alt="WeatherApp"><div className={styles.live1}>Live app</div></a>
<a href='https://github.com/melika760/vanilla-weather-app' target='__blank'><div className={styles.live1}>Learn more</div></a>


          </div>
          <a href='https://fanciful-bublanina-8bd2c6.netlify.app/' alt="WeatherApp" target='__blank'>
          <div className={styles.pic2}>
          <div className={styles.image2}>
            <img src={Weatherapp} alt='Weatherapp'/>
          </div>
          </div>
          </a>
        </div>
        <div className={`${styles.content} ${styles.left}`}>
          <a href='https://musical-sorbet-7120c3.netlify.app/' alt="Dictionary" target='__blank'>
          <div className={styles.pic}>
          <div className={styles.image}>
            <img src={Dictionary} alt='Dictionary'/>
          </div>
          </div>
          </a>
          
          <div className={styles.info}>
<h3 className={styles.title}>Dictionary App</h3>
<p className={styles.descriptions}>Full stack Dictionary website built with React and Axios</p>

<a href='https://musical-sorbet-7120c3.netlify.app/' target='__blank' alt="DictionaryApp"><div className={styles.live1}>Live app</div></a>
<a href='https://github.com/melika760/Dictionary' target='__blank'><div className={styles.live1}>Learn more</div></a>


          </div>
        </div>
        <div className={`${styles.content} ${styles.right}`}>
          <div className={styles.info2}>
<h3 className={styles.title}>Game App</h3>
<p className={styles.descriptions}>Rock,Paper,Scissors built with React and css module</p>

<a href='https://rockpaperscissorsgaame.netlify.app/' target='__blank' alt="GameApp"><div className={styles.live1}>Live app</div></a>
<a href='https://github.com/melika760/Game' target='__blank'><div className={styles.live1}>Learn more</div></a>


          </div>
          <a href='https://rockpaperscissorsgaame.netlify.app/' alt="Game" target='__blank'>
          <div className={styles.pic2}>
          <div className={styles.image2}>
            <img src={rock} alt='Weatherapp'/>
          </div>
          </div>
          </a>
        </div>
    </section>
  )
}

export default Projects
