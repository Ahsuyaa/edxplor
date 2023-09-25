import React from 'react'
import styles from "./footer.module.scss"
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhone, FaSearch, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className={styles.gridcontainer}>
    <div className={styles.col}>
      <h5>Useful links</h5>
      <ul>
        <li>
          Department of co operative
        </li>
        <li>
          Nepal rastra bank limited
        </li>
        <li>
         Employee Provident Fund
        </li>
        <li>
         Nepal Stock Exchange
        </li>
        <li>
          NEFSCUN
        </li>
        <li>
          Department of Transportation Management
        </li>
        <li>Citizen Investment Trust</li>
      </ul>
    </div>
    <div className={styles.col}>
      <h5>Our Service</h5>
      <ul>
        <li>ATM</li>
        <li>Remittance</li>
        <li>Deposit</li>
        <li>Loan</li>
        <li>Extra Banking</li>
      </ul>
    </div>
    <div className={`${styles.col} ${styles.detailsicon}`}>
    <h5>Contact Details</h5>
      <ul>
        <li><FaLocationArrow/> charikot, dolakha</li>
        <li><FaPhone/>98001828700,9826718720</li>
        <li><FaEnvelope/>abc@gmail.com</li>
      
      </ul>
    </div>
    <div className={styles.col}>
      <h5>Subscribe</h5>
      <p>subscribe to stay tuned for latest updates</p>
      <div className={styles.searchContainer}>
        
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Email"
        />
        <button className={styles.searchButton}>
          <FaSearch className={styles.searchIcon} />
          Search
        </button>
      </div>
      <h5>Social Media</h5>
      <div className={styles.socioicon}>
        <FaFacebook/>
        <FaInstagram/>
        <FaTwitter/>
      </div>
    </div>
  </div>
  )
}

export default Footer