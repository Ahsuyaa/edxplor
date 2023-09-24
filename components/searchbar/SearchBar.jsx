"use client"
import React from "react";
import styles from "./searchbar.module.scss";
import Select from "react-select";
import Image from 'next/image';
import { FaSearch, FaSearchLocation } from "react-icons/fa";
import img from "../../public/uniform.png"
const SearchBar = () => {
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" }
      ];
      const customStyles = {
        control: (provided) => ({
          ...provided,
          border: 'none',
          boxShadow: 'none',
        }),
        indicatorSeparator: () => null,
      };
  return <>


 <div className={styles.container}>
        <div className={styles.dropdownButton}>
          <div className={styles.dropdown}>
            <Select styles={customStyles} options={options} placeholder="Select Option 1" />
          </div>
          <div className={styles.separator}></div> {/* Add this separator */}
          <div className={styles.dropdown}>
            <Select styles={customStyles} options={options} placeholder="Select Option 2" />
          </div>
          <div className={styles.separator}></div> {/* Add this separator */}
          <div className={styles.dropdown}>
            <Select styles={customStyles} options={options} placeholder="Select Option 3" />
          </div>
          <button className={styles.button}>Search Program</button>
        </div>
      </div>
      <div className={styles.container2}>
      <div className={styles.imagecontainer}>
      <Image src={img} alt="Your Image" width={400} height={300} />
      </div>
      <div  className={styles.datacontainer}><h1> Find From Where You Live</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos maxime nostrum ducimus repudiandae omnis maiores </p>
      <div className={styles.searchContainer}>
        
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search for a location, e.g. New York"
          />
          <button className={styles.searchButton}>
            <FaSearch className={styles.searchIcon} />
            Search
          </button>
        </div>
        </div>
    </div>
  </>;
};

export default SearchBar;
