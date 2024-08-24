import React, { useState } from 'react'
import styles from "./Contact.module.css"
import useInput from './hooks/useInput'
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
Namereset();
Emailreset();
Messagereset()
setsubmited(true)
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
  {submited && <p className={styles.error}>Your message is submited!</p>}
  <button type='submit'className={styles.btn} disabled={!NameIsValid && !EmailIsValid && !MessageIsValid}>Submit</button>
 </form>
 
  </section>
  )
}

export default Contact
