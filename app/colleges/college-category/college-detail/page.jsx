"use client"
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Banner from "../../../../components/banner/Banner"
import AboutImg from "../../../../public/about.jpg"
import Image from 'next/image';
const HeadingRow = () => {
  const [currentHeading, setCurrentHeading] = useState('Heading 1');

  const handleHeadingChange = (heading) => {
    setCurrentHeading(heading);
  };
  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
   
  ];
  const getContent = () => {
    if (currentHeading === 'Heading 1') {
      return (
        <div className={styles['personal-info-form']}>
        <div className={styles.row}>
         <div><label>first name</label>
         <input type='text'></input></div>
     
        <div><label>first name</label>
         <input type='text'></input></div>
      
         <div><label>first name</label>
         <input type='text'></input></div>
       
        </div>
        <div className={styles.row2}>
         <div className={styles.email }><label>first name</label>
         <div className={styles.verify}><input type='text'></input>
         <button>verify</button></div>
         </div>
     
        <div className={styles.phone}><label>first name</label>
         <input type='text'></input></div>
      
     
       
        </div>
        <div className="textarea-row">
        <textarea placeholder="Textarea"></textarea>
      </div>
       
      </div>
      );
    } else if (currentHeading === 'Heading 2') {
      return (
        <div>
          <h3>Content for Heading 2</h3>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        </div>
      );
    } else if (currentHeading === 'Heading 3') {
      return (
        <div>
          <h3>Content for Heading 3</h3>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      );
    }
  };
  return (
    <>
     <div className={styles.app}>
      <Banner
        backgroundImageSrc={AboutImg}
        title="About"
        breadcrumbs={breadcrumbs}
      />
   </div>
    <div className={styles.container}>
        <div className={styles.column30}>
         <Image src={AboutImg} alt="image"/>
         <h1>college name</h1>
         <h6>college@info.np</h6>
         <button>copy url</button>
        </div>
        <div className={styles.column70}>
        <div className={styles.headingRow}>
      <h2
        className={`${styles.heading} ${currentHeading === 'Heading 1' && styles.active}`}
        onClick={() => handleHeadingChange('Heading 1')}
      >
        Heading 1
      </h2>
      <h2
        className={`${styles.heading} ${currentHeading === 'Heading 2' && styles.active}`}
        onClick={() => handleHeadingChange('Heading 2')}
      >
        Heading 2
      </h2>
      <h2
        className={`${styles.heading} ${currentHeading === 'Heading 3' && styles.active}`}
        onClick={() => handleHeadingChange('Heading 3')}
      >
        Heading 3
      </h2>

     
    </div>
    <hr className={styles.line} />
    <div className={styles.content}>{getContent()}</div>
        </div>
    </div>
    </>
  );
};

export default HeadingRow;
