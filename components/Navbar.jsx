import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <div className={styles.container}>

            <Link href="/">
                <Image src="/img/logo.png" alt='onward tech' width="70px" height="70px"  objectFit='cover' />
            </Link>
            <ul className={styles.list}>
                <li className={styles.listitem}>
                    <Link href="/#Services">Services</Link>
                </li>
                <li className={styles.listitem}>
                    <Link href="/product/development">Devlopment</Link>
                </li>
                <li className={styles.listitem}>
                    <Link href="/product/photography">Photograpy</Link>
                </li>
                <li className={styles.listitem}>
                    <Link href="/contact">Contact</Link>
                </li>


            </ul>
        </div>
    )
}

export default Navbar