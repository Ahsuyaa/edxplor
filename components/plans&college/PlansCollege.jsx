import React from 'react'
import styles from "./styles.module.scss"
import { FaAngleRight, FaArrowRight } from 'react-icons/fa'
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
    
    
    <>
    <div className={styles.gridcontainer}>
      <div className={styles.leftdiv}>
        <h1>Amplify Your College Experience</h1>
        <h4>Take your education anywhere you want. you lead, and we'll help</h4>
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
      <div>Grid Item 2</div>
    </div>
    <div className={styles.topic}>
    <h1>These College Trust Us</h1>
    <div className={styles.desc}>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, consectetur?</p>
     <button className={styles.btn}>View more <FaArrowRight/></button>
    </div>
    <div className={styles.imageContainer}>
      {images.map((image, index) => (
        <div key={index} className={styles.gridItem}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
    </div>
    
  </>
  )
}

export default PlansCollege