import React from 'react'
import Image from 'next/image';
import AboutImg from '../../public/about.jpg'
import styles from "./mocktest.module.scss"
import Link from 'next/link';
import {AiOutlineRight } from "react-icons/ai";
import { FaAngleRight } from 'react-icons/fa';
const page = () => {
  return (
    <>
     <div className={styles.container}>
      <Image
        src={AboutImg}
        alt="Background Image"
      />
      <div className={styles['text-overlay']}>
        <h1>About</h1>
        <p>
            <Link href="/">Home</Link>
            <AiOutlineRight className={styles.arrow} />
            About
          </p>
      </div>
    </div>
    <div className={styles.gridrow}>
        <div className={styles.title}>
        <h1>Test yourself!</h1>
        <p>Choose any to any test to skills and talent</p>
        </div>
            <div className={`${styles.row} `}>
              <div className={styles.colleft}></div>
              <div className={styles.colmiddle}><h1><Link href="/mocktest/see">SEE</Link></h1></div>
              <div className={styles.colright}><AiOutlineRight/></div>
            </div>
            <div className={`${styles.row} `}>
              <div className={styles.colleft}></div>
              <div className={styles.colmiddle}><h1>SEE</h1></div>
              <div className={styles.colright}><AiOutlineRight/></div>
            </div>
            <div className={`${styles.row} `}>
              <div className={styles.colleft}></div>
              <div className={styles.colmiddle}><h1>SEE</h1></div>
              <div className={styles.colright}><AiOutlineRight/></div>
            </div>
          </div>
    </>
  )
}

export default page