import React from 'react'
import styles from "./footer.module.scss"
const Footer = () => {
  return (
    <div className={styles.gridcontainer}>
    <div className={styles.col}>
      <h1>Useful links</h1>
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
      <h1>Our Service</h1>
      <ul>
        <li>ATM</li>
        <li>Remittance</li>
        <li>Deposit</li>
        <li>Loan</li>
        <li>Extra Banking</li>
      </ul>
    </div>
    <div className={styles.col}>Column 3</div>
    <div className={styles.col}>Column 4</div>
  </div>
  )
}

export default Footer