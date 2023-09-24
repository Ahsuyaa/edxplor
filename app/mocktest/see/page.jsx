import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { IoIosList } from 'react-icons/io'
import styles from "./see.module.scss"
const page = () => {
  return (
   <>
   <div className={styles.container}>
    <div className={styles.title} >
    <h1>
        Science Mockup Test
    </h1>
    <ul className={styles.heading} >
        <li><FaRegClock/> <span>2 question</span> per minute</li>
        <li><IoIosList/>
        <span>  10 Question</span>
        per page <span>out of 40</span></li>
    </ul>
    </div>
    <div className={styles.description}>
        <h1>Before you start</h1>
        <ol className={styles.customlist}>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus iure facere aliquid sequi quas animi,</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus iure facere aliquid sequi quas animi,</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus iure facere aliquid sequi quas animi,</li>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus iure facere aliquid sequi quas animi,</li>
        </ol>
    </div>
    <hr/>
    <div className={styles.btn}>
    <button>start</button>
  </div>
   </div>
   </>
  )
}

export default page