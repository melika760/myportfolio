import React from 'react'
import Styles from "./About.module.css"
import me from "../assets/profile.png"
import Js from "../assets/JS.png"
import HTML from "../assets/HTML.png"
import CSS from "../assets/CSS.png"
import reacts from "../assets/react.png"
import next from "../assets/Next.png"
const About = () => {
  return (
    <section id='About' className={Styles.about}>
<h2>About</h2>
<section className={Styles.content}>
<div className={Styles.profile}>
<div className={Styles.profilepic}>
<img src={me} width="70%" alt='Profilepic'/>
</div>
<p className={Styles.profilecontent}>
Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I’m not at my computer I like to spend my time reading, keeping fit and playing guitar.
</p>
</div>
<div className={Styles.skills}>
<div className={Styles.rows}>
<div className={Styles.skills__item}>
    <img src={HTML} alt='HTML'/>
    <div className={Styles.skillname}>HTML</div>
</div>
<div className={Styles.skills__item}>
    <img src={CSS} alt='CSS'/>
    <div className={Styles.skillname}>CSS</div>
</div>
<div className={Styles.skills__item}>
    <img src={Js} alt='JavaScript'/>
    <div className={Styles.skillname}>JavaScript</div>
</div>
</div>
<div className={Styles.rows}>
<div className={Styles.skills__item}>
    <img src={reacts} alt='React'/>
    <div className={Styles.skillname}>React</div>
</div>
<div className={Styles.skills__item}>
    <img src={next} alt='Next'/>
    <div className={Styles.skillname}>Next.Js</div>
</div>
<div className={Styles.skills__item}>
    <img src={Js} alt='JavaScript'/>
    <div className={Styles.skillname}>JavaScript</div>
</div>
</div>
</div>
</section>
    </section>
  )
}

export default About
