import React from 'react'
import styles from '../styles/LoadingScreen.module.css'
import Image from 'next/image'
const LoadingScreen = () => {
  return (
    <div className={styles.contanier}>
            <Image src="/load.svg" height="200px" width="200px" />
    </div>
  )
}

export default LoadingScreen