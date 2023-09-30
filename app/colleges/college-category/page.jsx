"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDown, AiOutlineRight, AiOutlineUp } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { RiPhoneLine } from 'react-icons/ri';
import styles from "./styles.module.scss";
import AboutImg from "../../../public/about.jpg";
import pic from "../../../public/college.png";
import Pagination from "../../../components/pagination/Pagination";

import Banner from "../../../components/banner/Banner"


const Page = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const handleButtonDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const handleButtonDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const handleButtonDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };
  const dataArray = [
    { id: 1, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 2, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 3, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 4, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 5, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 6, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 7, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 8, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 9, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 10, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 11, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 12, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 13, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 14, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 15, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 16, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 17, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 18, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 19, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 20, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 21, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 22, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 23, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 24, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 25, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 26, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 27, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 28, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 29, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },
    { id: 30, name: "kantipur college of management and iformation technology",location:"baneshwor kathmandu", number: "014 56734 , 9851011223", picture: pic },

  ];

  const totalItems = dataArray.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataArray.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
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
      <div className={styles.row}>
        <div className={styles.column1}>
          <div className={styles.searchInput}>
            <input type="text" placeholder="Search" />
            <IoMdSearch className={styles.searchIcon} />
          </div>

          <div className={styles.dropdownContainer}>
            <div className={styles.separator}></div>
            <div className={styles.dropdown}>
              <button onClick={handleButtonDropdown1}>
                Dropdown 1{showDropdown1 ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>
              {showDropdown1 && (
                <div className={styles.dropdownContent}>
                  <ul>
                    <li className={styles.dropdownbox}>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        Associate
                      </label>
                      <button>10</button>
                    </li>
                    <li className={styles.dropdownbox}>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        Associate
                      </label>
                      <button>10</button>
                    </li>
                    <li className={styles.dropdownbox}>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        Associate
                      </label>
                      <button>10</button>
                    </li>
                    {/* Add more options as needed */}
                  </ul>
                </div>
              )}
              <div className={styles.separator}></div>
            </div>
            <div className={styles.dropdown}>
              <button onClick={handleButtonDropdown2}>
                Dropdown 2{showDropdown2 ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>
              {showDropdown2 && (
                <div className={styles.dropdownContent}>
                  <ul>
                    <li className={styles.dropdownbox}>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        Associate
                      </label>
                      <button>10</button>
                    </li>
                    <li className={styles.dropdownbox}>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        Associate
                      </label>
                      <button>10</button>
                    </li>
                    <li className={styles.dropdownbox}>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        Associate
                      </label>
                      <button>10</button>
                    </li>
                    {/* Add more options as needed */}
                  </ul>
                </div>
              )}
              <div className={styles.separator}></div>
            </div>
            <div className={styles.dropdown}>
              <button onClick={handleButtonDropdown3}>
                Dropdown 3{showDropdown3 ? <AiOutlineUp /> : <AiOutlineDown />}
              </button>
              {showDropdown3 && (
                <div className={styles.dropdownContent}>
                  <ul>
                    <li className={styles.dropdownbox}>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        Associate
                      </label>
                      <button>10</button>
                    </li>
                    <li className={styles.dropdownbox}>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        Associate
                      </label>
                      <button>10</button>
                    </li>
                    <li className={styles.dropdownbox}>
                      <label className={styles.checkboxLabel}>
                        <input type="checkbox" className={styles.checkbox} />
                        Associate
                      </label>
                      <button>10</button>
                    </li>
                    {/* Add more options as needed */}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.column2}>
          <div className={styles.heading}>
            <h1>
              Showing <span>10</span> colleges out of <span>40</span> 
            </h1>
         
              <select id="sort" >
              <option value="">Sort By</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
                <option value="price">Price</option>
              </select>
           
          </div>
          <div className={styles["card-grid"]}>
            {currentItems.map((item) => (
              <div className={styles.card} key={item.id}>
                <div className={styles["card-picture"]}>
                  <Image src={item.picture} alt="Background Image" />
                  <h3>{item.name}</h3>
                </div>
                <h4 className={styles["card-location"]}><IoLocationOutline/>{item.location}</h4>
                <p className={styles["card-number"]}><RiPhoneLine outline={true}/>{item.number}</p>
              </div>
            ))}
          </div>
          <div className={styles.pagination}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
