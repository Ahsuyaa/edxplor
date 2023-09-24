"use client";
import React from "react";
import AboutImg from "../../public/about.jpg";
import styles from "./search.module.scss";
import Image from "next/image";
import Link from "next/link";
import Select from "react-select";
import { FaClock, FaRegClock, FaUniversity } from "react-icons/fa";
const page = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const data = [
    {name:"science", title: 'National Examination Board', time: '2 year' },
    {name:"science", title: 'National Examination Board', time: '2 year' },
    {name:"science", title: 'National Examination Board', time: '2 year' },
  ];
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
    }),
    indicatorSeparator: () => null,
  };
  return (
    <>
      <div className={styles.container}>
        <Image src={AboutImg} alt="Background Image" />
        <div className={styles["text-overlay"]}>
          <h1>About</h1>
          <p>
            <Link href="/">Home</Link>
          </p>
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.dropdownButton}>
          <div className={styles.dropdown}>
            <Select
              styles={customStyles}
              options={options}
              placeholder="Select Option 1"
            />
          </div>
          <div className={styles.separator}></div> {/* Add this separator */}
          <div className={styles.dropdown}>
            <Select
              styles={customStyles}
              options={options}
              placeholder="Select Option 2"
            />
          </div>
          <div className={styles.separator}></div> {/* Add this separator */}
          <div className={styles.dropdown}>
            <Select
              styles={customStyles}
              options={options}
              placeholder="Select Option 3"
            />
          </div>
          <button className={styles.button}>Submit</button>
        </div>
      </div>
      <div className={styles.container3}>
        {data.map((item, index) => (
          <div key={index} className={styles.colleges}>
            <div className={styles.name}>
                <h1>{item.name}</h1>
            </div>
            <div className={styles.description}>
            <h2><FaUniversity/>{item.title}</h2>
            <p><FaRegClock/>{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
