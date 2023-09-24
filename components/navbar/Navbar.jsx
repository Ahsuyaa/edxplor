"use client"
import { IoMdSearch, IoMdArrowDropdown } from 'react-icons/io';

import {AiOutlineDown } from "react-icons/ai";
import { useState } from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import Head from "../head/Head"
import {  FaListUl} from 'react-icons/fa';
const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showCourses, setShowCourses] = useState(false);
  const [showColleges, setShowColleges] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const handleButtonClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCoursesClick = () => {
    setShowCourses(!showCourses);
  };

  const handleCollegesClick = () => {
    setShowColleges(!showColleges);
  };

  
  const toggleMenu = () => {
    setShowToggle(!showToggle);
  };
  return (
    <>
    <Head/>
    <nav className={styles.navbar}>
    <Link href="" onClick={toggleMenu }>
            
            <FaListUl  className={styles.toggleicon}  size={20} />
          </Link>
          {showToggle && (
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <Link href="" onClick={handleCoursesClick}>
            Courses
            <AiOutlineDown  size={20} />
          </Link>
          {showCourses && (
            <ul className={styles.dropdown}>
              <li>
                <a href="#">Course 1</a>
              </li>
              <li>
                <a href="#">Course 2</a>
              </li>
              <li>
                <a href="#">Course 3</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" onClick={handleCollegesClick}>
            Colleges
            <AiOutlineDown  size={20} />
          </a>
          {showColleges && (
            <ul className={styles.dropdown}>
              <li>
                <a href="#">College 1</a>
              </li>
              <li>
                <a href="#">College 2</a>
              </li>
              <li>
                <a href="#">College 3</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href={"/about"}>News and Views</Link>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li className={styles.search}>
          {!showInput && (
            <button onClick={handleButtonClick} className={styles.searchicon}>
              <IoMdSearch size={25} />
            </button>
          )}
          {showInput && (
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={handleInputChange}
              />
              <button>Go</button>
            </div>
          )}
        </li>
      </ul>
          )}
            <ul className={styles.largescreenshow}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <Link href="" onClick={handleCoursesClick}>
            Courses
            <AiOutlineDown  size={20} />
          </Link>
          {showCourses && (
            <ul className={styles.dropdown}>
              <li>
                <a href="#">Course 1</a>
              </li>
              <li>
                <a href="#">Course 2</a>
              </li>
              <li>
                <a href="#">Course 3</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" onClick={handleCollegesClick}>
            Colleges
            <AiOutlineDown  size={20} />
          </a>
          {showColleges && (
            <ul className={styles.dropdown}>
              <li>
                <a href="#">College 1</a>
              </li>
              <li>
                <a href="#">College 2</a>
              </li>
              <li>
                <a href="#">College 3</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href={"/about"}>News and Views</Link>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li className={styles.search}>
          {!showInput && (
            <button onClick={handleButtonClick} className={styles.searchicon}>
              <IoMdSearch size={25} />
            </button>
          )}
          {showInput && (
            <div className={styles.inputContainer}>
              <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={handleInputChange}
              />
              <button>Go</button>
            </div>
          )}
        </li>
      </ul>
          
    </nav>
    </>
  );
};

export default Navbar;
