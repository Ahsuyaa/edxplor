"use client";
import React from "react";
import AboutImg from "../../public/about.jpg";
import settingimg from "../../public/settings.png"
import management from "../../public/management.png"
import hotel from "../../public/hotel.png"
import medical from "../../public/medical.png"
import mangement from "../../public/management.png"
import computer from "../../public/computer.png"
import styles from "./styles.module.scss";
import Image from "next/image";

const page = () => {
    
const imagesData = [
    {
      name: 'Image 1',
      src: settingimg,
      details: 'Image 1 details...'
    },
    {
      name: 'Image 2',
      src: management,
      details: 'Image 2 details...'
    },
    {
        name: 'Image 1',
        src: hotel,
        details: 'Image 1 details...'
      },
      {
        name: 'Image 2',
        src: management,
        details: 'Image 2 details...'
      },
      {
        name: 'Image 1',
        src: computer,
        details: 'Image 1 details...'
      },
      {
        name: 'Image 2',
        src: medical,
        details: 'Image 2 details...'
      },
      {
        name: 'Image 1',
        src: settingimg,
        details: 'Image 1 details...'
      },
      {
        name: 'Image 2',
        src: management,
        details: 'Image 2 details...'
      },
      {
          name: 'Image 1',
          src: hotel,
          details: 'Image 1 details...'
        },
        {
          name: 'Image 2',
          src: management,
          details: 'Image 2 details...'
        },
        {
          name: 'Image 1',
          src: computer,
          details: 'Image 1 details...'
        },
        {
          name: 'Image 2',
          src: medical,
          details: 'Image 2 details...'
        },
        {
            name: 'Image 1',
            src: settingimg,
            details: 'Image 1 details...'
          },
          {
            name: 'Image 2',
            src: management,
            details: 'Image 2 details...'
          },
          {
              name: 'Image 1',
              src: hotel,
              details: 'Image 1 details...'
            },
            {
              name: 'Image 2',
              src: management,
              details: 'Image 2 details...'
            },
            {
              name: 'Image 1',
              src: computer,
              details: 'Image 1 details...'
            },
            {
              name: 'Image 2',
              src: medical,
              details: 'Image 2 details...'
            }
    // Add more image data objects here...
  ];
  return (
    <>
      <div className={styles.container}>
        <Image src={AboutImg} alt="Background Image" />
        <div className={styles["text-overlay"]}>
          <h1>Your Serach for college starts here </h1>
        </div>
      </div>
      <div className={styles.container2}>
        <input type="text" className="search-input" placeholder="Search..." />

        <button className={styles.button}>Submit</button>
      </div>
      <div className={styles.imageRow}>
        {imagesData.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image src={image.src} alt={image.name} className={styles.image}  />
            <div className={styles.imageDetails}>
              <h4>{image.name}</h4>
              <p>{image.details}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
