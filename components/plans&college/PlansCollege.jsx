import React from 'react'
import styles from "./styles.module.scss"
import { FaAngleRight, FaArrowRight } from 'react-icons/fa'
import grp from "../../public/grp.jpeg"
import Image from 'next/image'
const PlansCollege = () => {
    const data = [
        { id: 1, text: 'Column 1' },
        { id: 2, text: 'Column 2' },
        { id: 3, text: 'Column 3' },
        { id: 1, text: 'Column 1' },
        { id: 2, text: 'Column 2' },
        { id: 3, text: 'Column 3' },
        // Add more data objects as needed
      ];
      const images = [
        '/college.png',
        '/college.png',
        '/college.png',
        '/college.png',
        '/college.png',
        '/college.png',
        // Add more image URLs or paths as needed
      ];
  return (
    
    
    <div className={styles.maindiv}>
    <div className={styles.gridcontainer}>
      <div className={styles.leftdiv}>
        <h1>Amplify Your College Experience</h1>
        <h4>Take your education anywhere you want. You lead, and we&apos;ll help</h4>

        <div className={styles.gridrow}>
       
          <div className={styles.childgrid}>
          {data.map(item => (
        <div key={item.id} className={styles.childrow}>
          <div className={styles.childcolleft}></div>
          <div className={styles.childcolmiddle}>{item.text}</div>
          <div className={styles.childcolright}><FaAngleRight /></div>
        </div>
      ))}
        
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>

      <Image
        src={grp}
        alt="My Image"
    
      />
    </div>
    </div>
 
    
  </div>
  )
}

export default PlansCollege