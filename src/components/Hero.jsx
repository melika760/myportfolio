import React from 'react'
import Styles from "./Hero.module.css"
import Canvas from './UI/Canvas'
const Hero = () => {  
    const draw = (context,count) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        context.fillStyle = 'purple'
        const d = count % 800
        context.fillRect(10+d  , 10 , 100 , 100)
        context.fillRect(10 +d , 10+d , 10-2*d , 10+d)
        context.fillRect(10+d  , 10 , 10+d , 100)
      }
      const draw2 = (context,count) => {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        context.fillStyle = 'white'
        const d = count % 800
        context.fillRect(10+d  , 10 , 100 , 100)
        context.fillRect(10+d , 10 +d, 10-2*d , 10+d)
        context.fillRect(10+d  , 10 , 10+d , 100)
       
      }
    
    
  return (
    <div className={Styles.hero} id='home'>
        <div className={Styles.canva}>
        <Canvas draw={draw} width="1200" height="800" />
        <Canvas draw={draw2} width="1200" height="800" />
        </div>
     <header className={Styles.header}>
        <div className={Styles.headingone}>
        Hello I am <span className={Styles.name}>Melika</span>
        </div>
        <div className={Styles.headingtwo}>
       I'm a Front end <span className={Styles.name}>developer.</span>
        </div>
        <button className={Styles.btn}><a href='#Projects'>View my works
            
            </a></button>
     </header>
    </div>
  )
}

export default Hero
