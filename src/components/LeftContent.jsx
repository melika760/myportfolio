import React from 'react'
import { contsants } from './Constants'
import styles from "./Projects.module.css"
const LeftContent = () => {
    return(<React.Fragment>
          {contsants.map((item)=>{
if(item.space==="right"){
   return( <div className={`${styles.content} ${styles.right}`} key={item.id}>
    <div className={styles.info2}>
<h3 className={styles.title}>{item.name}</h3>
<p className={styles.descriptions}>{item.description}</p>

<a href={item.live} target='__blank' alt={item.name}><div className={styles.live1}>Live app</div></a>
<a href={item.learn} target='__blank'><div className={styles.live1}>Learn more</div></a>


    </div>
    <a href={item.live} alt={item.name} target='__blank'>
    <div className={styles.pic2}>
    <div className={styles.image2}>
      <img src={item.photo} alt={item.name}/>
    </div>
    </div>
    </a>
  </div>)
}else{
    return(<div className={`${styles.content} ${styles.left }`} key={item.id}>
        <a href={item.live} alt={item.name} target='__blank'>
        <div className={styles.pic}>
        <div className={styles.image}>
          <img src={item.photo} alt={item.name}/>
        </div>
        </div>
        </a>
        
        <div className={styles.info}>
        <h3 className={styles.title}>{item.name}</h3>
        <p className={styles.descriptions}>{item.description}</p>
        
        <a href={item.live} target='__blank' alt={item.name}><div className={styles.live1}>Live app</div></a>
        <a href={item.learn} target='__blank'><div className={styles.live1}>Learn more</div></a>
        
        
        </div>
        </div>)
}
          })}
    </React.Fragment>
      
    )
}

export default LeftContent
