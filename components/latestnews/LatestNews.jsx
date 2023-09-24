// Slider.js
"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./latestnews.module.scss";
import NewsCard from "../newcard/NewsCard";
import Image from "next/image";
import { FaArrowRight, FaClock, FaRegClock } from "react-icons/fa";
const SliderComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
  // Sample data array
  const data = [
    {
      id: 1,
      images: "/about.png",
      title: "Title 1",
      author: "Author 1",
      description: "Description 1",
      time: "10 min",
      authorimg:"/about.png"
    },
    {
      id: 2,
      images: "/about.jpg",
      title: "Title 2",
      author: "Author 2",
      description: "Description 2",
      time: "15 min",
    },
    {
        id: 1,
        images: "/college.png",
        title: "Title 1",
        author: "Author 1",
        description: "Description 1",
        time: "10 min",
        authorimg:"/about.png"
      },
      {
        id: 2,
        images: "/uniform.png",
        title: "Title 2",
        author: "Author 2",
        description: "Description 2",
        time: "15 min",
      },
      {
        id: 1,
        images: "/college.png",
        title: "Title 1",
        author: "Author 1",
        description: "Description 1",
        time: "10 min",
        authorimg:"/about.png"
      },
      {
        id: 2,
        images: "/college.png",
        title: "Title 2",
        author: "Author 2",
        description: "Description 2",
        time: "15 min",
        authorimg:"/about.png"
      },
    // Add more data objects as needed
  ];

    const settings = {
      dots: true,
      dotsClass: styles.customDots,
      customPaging: (index) => (
        <div className={`${styles.customDot} ${currentSlide === index ? styles.activeDot : ''}`}></div>
      ),
      appendDots: (dots) => (
        <ul className={styles.customDotContainer}>{dots}</ul>
      ),
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      afterChange: (current) => {
        setCurrentSlide(current);
      },
    };

  return (
    <>
    <div className={styles.topic}>
    <h1>Latest News And Views</h1>
    <div className={styles.desc}>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, consectetur?</p>
     <button className={styles.btn}>View more <FaArrowRight/></button>
    </div>
    </div>
    <Slider {...settings} className={`${styles.slider} ${styles.rounded}`}>
  {data.map((item) => (
    <NewsCard item={item} key={item.id} />
  ))}
</Slider>

  </>
  );
};

export default SliderComponent;
