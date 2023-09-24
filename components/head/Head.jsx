import React from 'react';
import styles from './head.module.scss'; // Import your CSS module
import Image from 'next/image';
import logo from "../../public/logo1.png"
const Head = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Image  className={styles.logo} src={logo} alt="imag"/>
      </div>
      <div className={styles.actions}>
        <button className={styles.signin}>Sign In</button>
        <button className={styles.signup}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Head;
