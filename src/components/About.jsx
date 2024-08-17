import React, { useEffect, useRef, useState } from 'react'
import Styles from "./About.module.css"
import me from "../assets/profile.png"
import Js from "../assets/JS.png"
import HTML from "../assets/HTML.png"
import CSS from "../assets/CSS.png"
import reacts from "../assets/react.png"
import next from "../assets/Next.png"
import Git from "../assets/Git.png"
import Firebase from "../assets/Firebase.png"
import Strapi from "../assets/Strapi.png"
import Tailwind from "../assets/Tailwind.png"
import Bootstrap from "../assets/bootstrap.png"
import useCurrent from './useCurrent'
const About = () => {
    const[isVisible,setIsvisible]=useState(false)
    const aboutSectionRef=useRef()
    const {setsection}=useCurrent()
    useEffect(()=>{
        const observer = new IntersectionObserver(
            (entries) => {
              const entry = entries[0];
              if (entry.isIntersecting) {
                setIsvisible(true);
                observer.unobserve(entry.target); 
                setsection("About")
              }
            },
            { threshold: 0.3 } 
          );
          const currentref=aboutSectionRef.current
          if (currentref) {
            observer.observe(currentref);
          }
      
          return () => {
            if (currentref) {
              observer.unobserve(currentref);
            }
          };

    },[setsection])
    const skillitem1=[
        {name:"HTML",image:HTML},
        {name:"CSS",image:CSS},
        {name:"JavaScript",image:Js},
    ]
    const skillitem2=[
        {name:"React",image:reacts},
        {name:"NextJs",image:next},
        {name:"Git",image:Git},
        {name:"Bootstrap",image:Bootstrap},
    ]
    const skillitem3=[
        {name:"Firebase",image:Firebase},
        {name:"Strapi",image:Strapi},
        {name:"Tailwind",image:Tailwind}
    ]
    const getRandomDelay = () => {
        return Math.random() * 1.5;
      };
const renderrows=(skill)=>{
return(<div className={Styles.rows}>
{skill.map((skil,index)=>{
    const randomnum=Math.random()>0.5;
    const delay=randomnum?`${getRandomDelay()}s`:"0s";
    let change=false
    if(skil.name==="Tailwind" ||skil.name==="Strapi"|| skil.name==="Bootstrap"|| skil.name==="NextJs"||skil.name==="Firebase"){
change=true
    }
    return(
        <div className={`${Styles.skills__item} ${isVisible?Styles.fadeto:""}`} style={{transitionDelay:delay}} key={index}>
        <img src={skil.image} alt={skil.name} className={change?Styles.rounded:""}/>
        <div className={Styles.skillname}>{skil.name}</div>
    </div>
    )
})}
</div>)
}
  return (
    <section id='About' className={Styles.about} ref={aboutSectionRef}>
<h2>About</h2>
<section className={Styles.content}>
<div className={`${Styles.profile} ${isVisible?Styles.fadein:""}`}>
<div className={Styles.profilepics}>
<img src={me} width="55%" alt='Profilepic' className={Styles.profilepic}/>
</div>
<p className={Styles.profilecontent}>
I’m a front end developer with an endless curiosity and a serious love affair with JavaScript, React, and all things web. The thrill of combining creativity, logic, and technology—plus the fact that there’s always something new to learn—keeps me hooked on web development. Lifelong learning is my jam, and I’m fully committed to riding this exciting wave of discovery every day!
</p>
</div>
<div className={Styles.skills}>
{renderrows(skillitem1)}
{renderrows(skillitem2)}
{renderrows(skillitem3)}
</div>
</section>
    </section>
  )
}

export default About
