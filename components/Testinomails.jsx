import React from 'react'
import styles from '../styles/Testinomails.module.css'
import Image from 'next/image'
import Circle from './Circle'
import {users} from "../data"
const Testinomails = () => {
  return (
    
    <div className={styles.container}>
          <Circle backgroundColor="#34ebba" top="-70%" margin="auto" right="0" left="0"/>
          <div className={styles.title}>Testinomails</div>
            <div className={styles.wrapper}>
                {users.map(user=>(
                    <div key={user.id} className={styles.card}>
                        <Image src={`/img/${user.logo}`} height="30px" width="30px" />
                        <p className={styles.comment}>{user.comment}</p>
                        <div className={styles.person}>
                            <Image className={styles.avatar} src={`/img/${user.avatar}`} height="45" width="45"/>
                            <div className={styles.info}>
                                <span className={styles.username}>{user.name}</span>
                                <span className={styles.jobtitle}>{user.title}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
          
    </div>
  )
}

export default Testinomails