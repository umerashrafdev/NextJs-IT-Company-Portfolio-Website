import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>Onward Tech.</h1>
        <h1 className={styles.linktitle}>
          <a href="/contact" passHref>
            <span className={styles.linktext}>Contact us</span>
          <Image src="/img/link.png" height="40px" width="40px"/>
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.carditem}>
          Office 109 1st floor sabzazar<br/>lahore
        </div>
        <div className={styles.carditem}>
          info@onwardtech.co<br />+92319 447 8452
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.carditem}>
          Follow us @<br />_FB _IG _TW _WA
        </div>
        <div className={styles.carditem}>
          @ OnwardTech<br /> ALL RIGHT RESERVED
        </div>
      </div>

    </div>
  )
}

export default Footer