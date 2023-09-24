import React from 'react'
import Image from 'next/image';
import AboutImg from '../../public/about.jpg'
import styles from "./about.module.scss"
import Link from 'next/link';
import Banner from "../../components/banner/Banner"

import { FaUniversity} from "react-icons/fa";

const page = () => {
    const breadcrumbs = [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
       
      ];
  return (
 <>
      <div className={styles.app}>
      <Banner
        backgroundImageSrc={AboutImg}
        title="About"
        breadcrumbs={breadcrumbs}
      />
    </div>
    <div className={styles.container2}>
      <div  className={`${styles.column} ${styles.column1}`}>
       <h1>INDRODUCTION</h1>
      </div>
      <div  className={`${styles.column} ${styles.column2}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquam similique ipsum? Minus ea autem culpa, ipsa dolorum in magnam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit necessitatibus porro, pariatur quae dolorum sapiente quasi explicabo dolores corporis expedita!
      </div>
    </div>
    <div className={styles.Img}>
    <Image
        src={AboutImg}
        alt="Background Image"
      />
    </div>
    <div className={styles.main}>
      <div  className={styles.Headline}>
    <h1>Our Core Value</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur repellat ametl Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, animi! </p>
        </div>
    <div className={styles.container3}>
   
      <div className={styles.values}>
      
        <div className={`${styles.circleboundary} ${styles.b1}`}>
          <div className={styles['circleicon']}>
            <FaUniversity/>
          </div>
        </div>
        <h6>Leatrn Everything</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum id error, ex esse obcaecati porro? Doloribus doloremque ipsum non. </p>
      </div>
      <div className={styles.values}>
        <div className={`${styles.circleboundary} ${styles.b2}`}>
          <div className={styles['circleicon']}>
            <FaUniversity/>
          </div>
        </div>
        <h6>Leatrn Everything</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum id error, ex esse obcaecati porro? Doloribus doloremque ipsum non. </p>
      </div>
      <div className={styles.values}>
        <div className={`${styles.circleboundary} ${styles.b3}`}>
          <div className={styles['circleicon']}>
            <FaUniversity/>
          </div>
        </div>
        <h6>Leatrn Everything</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique cum id error, ex esse obcaecati porro? Doloribus doloremque ipsum non. </p>
      </div>
    </div>
    </div>
    <div className={styles.row}>
      <div className={styles.col1}><Image src={AboutImg} className={styles.image}/></div>
      <div className={styles.col2}>
        <div className={styles.description}>
          <h1>For College</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusantium, veritatis eius obcaecati 
          </p>
          <ol className={styles.customlist}>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          
            </li>
          </ol>
        </div></div>
    </div>
 </>
  )
}

export default page