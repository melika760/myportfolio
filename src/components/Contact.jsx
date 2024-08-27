import React, { useState } from 'react'
import styles from "./Contact.module.css"
import useInput from './hooks/useInput'
import done from "../assets/done.svg"
const Contact = (props) => {
  const[submited,setsubmited]=useState(false)
const{
  value:name,
  ValueIsvalid:NameIsValid,
  hasError:NameHasError,
  Changehandler:NameChange,
  Blurhandler:NameBlur,
  reset:Namereset,
  }=useInput(value=>value.trim()!== "")
  const{
    value:Email,
    ValueIsvalid:EmailIsValid,
    hasError:EmailHasError,
    Changehandler:EmailChange,
    Blurhandler:EmailBlur,
    reset:Emailreset,
    }=useInput(value=>value.includes("@"))
    const{
      value:Message,
      ValueIsvalid:MessageIsValid,
      hasError:MessageHasError,
      Changehandler:MessageChange,
      Blurhandler:MessageBlur,
      reset:Messagereset,
      }=useInput(value=>value.trim()!== "")
const formhandle=(event)=>{
event.preventDefault();
props.onConfirm({
  name,
  Email,
  Message
})
setsubmited(true)
Namereset();
Emailreset();
Messagereset();
setTimeout(()=>{
  setsubmited(false)
},1500)
  }

  return (
  <section className={styles.contact} id='Contact'>
    <h2 className={styles.header}>Contact</h2>
    <p className={styles.description}>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
 <form className={styles.form} onSubmit={formhandle}>
  <label htmlFor='Name'>
    <input type='text' placeholder='Name' className={`${styles.inpt} && ${NameHasError?styles.er:""}`} value={name} onChange={NameChange} onBlur={NameBlur} />
    {NameHasError && <p className={styles.error}>Please enter your name.</p>}
  </label>
  <label htmlFor='Email'>
    <input type='email' placeholder='Email' className={`${styles.inpt} && ${EmailHasError?styles.er:""}`} value={Email} onChange={EmailChange} onBlur={EmailBlur}/>
    {EmailHasError && <p className={styles.error}>Please enter your email.</p>}
  </label>
  <label htmlFor='Message'>
    <textarea className={ `${styles.message} && ${MessageHasError?styles.er:""}`} placeholder='Message'value={Message} onChange={MessageChange} onBlur={MessageBlur}></textarea>
    {MessageHasError && <p className={styles.error}>Please enter your message.</p>}
  </label>
  <button type='submit'className={styles.btn} disabled={!NameIsValid && !EmailIsValid && !MessageIsValid}>{submited ? <img src={done} alt='donetag' className={styles.e}/>:"submit"}</button>
 </form>
 
  </section>
  )
}

export default Contact
