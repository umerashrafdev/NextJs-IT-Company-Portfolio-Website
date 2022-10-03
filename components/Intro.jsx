import React from 'react'
import styles from'../styles/Intro.module.css'
import Image from 'next/image'
import Circle from './Circle'
 const Intro = () => {
  return (
      <div className={styles.container}>
      <Circle className={styles.circle} top="-50vh" left="-50vh" backgroundColor="#cdd404" />
      <Circle right="-40vh" className={styles.ani} />
        <div className={styles.card}>
              <h1 className={styles.title}><span className={styles.brand}>Onward Tech</span> best IT company around the globe</h1>
              <p className={styles.desc}>are you planning to start new business online.we are here for you.</p>
              <button className={styles.button}>Discover</button>
        </div>
          <div className={styles.card}>
            <Image src="/img/avocado.png" alt='onward tech' width="90%" height="90%" layout="fill" objectFit='cover'/>
          </div>

      </div>
  )
}

export default Intro