import React from 'react'
import Circle from '../components/Circle'
import styles from '../styles/Contact.module.css'
const contact = () => {
  return (
    <div className={styles.contanier}>
        <Circle backgroundColor="yellow" top="-40vh" left="-25vh"></Circle>
        <Circle backgroundColor="gray" bottom="-40vh" right="-25vh"></Circle>
        <h1 className={styles.title}>Get in touch</h1>
        <form className={styles.form}>
            <input className={styles.inputS} placeholder="enter your Email"/>
            <input className={styles.inputS} placeholder="enter your Phone"/>
            <input className={styles.inputl} placeholder="enter your Full name"/>
            <input className={styles.inputl} placeholder="enter your subject"/>
            <textarea className={styles.textarea} placeholder="Enter your massage" rows={6}></textarea>
            <button className={styles.button}>Submit</button>
        </form>
    </div>
  )
}

export default contact