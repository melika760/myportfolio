import React from 'react'
import { contsants } from './Constants'
import styles from "./Projects.module.css"
const LeftContent = ({name,space}) => {
    // const item=contsants.find((item)=>item.name===name)
    // return (
    // <div className={`${styles.content} ${
    //     space === "left" ? styles.left : styles.right
    //   }`}>
    // <a href='https://dominique-5aac4.web.app/' alt="Dominiques" target='__blank'>
    // <div className={styles.pic}>
    // <div className={styles.image}>
    //   <img src={item.photo} alt={item.name}/>
    // </div>
    // </div>
    // </a>
    
    // <div className={styles.info}>
    // <h3 className={styles.title}>{item.name}</h3>
    // <p className={styles.descriptions}>{item.description}</p>
    
    // <a href='https://dominique-5aac4.web.app/' target='__blank' alt="Domique's Cafe"><div className={styles.live1}>Live app</div></a>
    // <a href='https://github.com/melika760/OrderCheck' target='__blank'><div className={styles.live1}>Learn more</div></a>
    
    
    // </div>
    // </div>)  
    return(<React.Fragment>
          {contsants.map((item)=>(
            <div className={`${styles.content} ${
                item.space === "left" ? styles.left : styles.right
              }`}>
            <a href='https://dominique-5aac4.web.app/' alt="Dominiques" target='__blank'>
            <div className={styles.pic}>
            <div className={styles.image}>
              <img src={item.photo} alt={item.name}/>
            </div>
            </div>
            </a>
            
            <div className={styles.info}>
            <h3 className={styles.title}>{item.name}</h3>
            <p className={styles.descriptions}>{item.description}</p>
            
            <a href='https://dominique-5aac4.web.app/' target='__blank' alt="Domique's Cafe"><div className={styles.live1}>Live app</div></a>
            <a href='https://github.com/melika760/OrderCheck' target='__blank'><div className={styles.live1}>Learn more</div></a>
            
            
            </div>
            </div>
        ))}
    </React.Fragment>
      
    )
}

export default LeftContent
