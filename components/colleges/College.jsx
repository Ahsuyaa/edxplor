import React from 'react'
import styles from "./styles.module.scss"
import { FaAngleRight, FaArrowRight } from 'react-icons/fa'
const College = () => {
    const data = [
        { id: 1, text: 'Column 1' },
        { id: 2, text: 'Column 2' },
        { id: 3, text: 'Column 3' },
        { id: 1, text: 'Column 1' },
        { id: 2, text: 'Column 2' },
        { id: 3, text: 'Column 3' },

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
    <div>
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
    </div>
  )
}

export default College