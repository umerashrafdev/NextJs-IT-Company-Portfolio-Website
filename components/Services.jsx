import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Services.module.css'
const Services = ({Daata}) => {
  return (
      <div className={styles.container} id="Services">
        <h1 className={styles.title}>what do we offer?</h1>
        <h1 className={styles.subtitle}>Our services we are offering</h1>
        <div className={styles.services}>
        {Daata.map((ser)=>(
            <Link key={ser.id} passHref href={`/product/${ser.name}`}>
                <div className={styles.service}>
                    <div className={styles.desc}>{ser.desc}</div>
                    <span className={styles.cat}>{ser.title}</span>
                    <div className={styles.media}>
                        {ser.video?(
                            <video src={`/img/${ser.video}`} loop autoPlay muted className={styles.video}></video>
                        ):(
                            <Image src={`/img/${ser.photo}`} height='100%' layout='responsive' width="100%" objectFit='cover'/> 
                        )}
                    </div>
                </div>
            </Link>
        ))}
        </div>
    </div>
  )
}

export default Services