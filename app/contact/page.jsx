import React from "react";
import Banner from "../../components/banner/Banner";
import AboutImg from "../../public/about.jpg";
import styles from "./styles.module.scss";
import { RiMailLine, RiPhoneLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const page = () => {
  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Contact", link: "/contact" },
  ];
  return (
    <>
      <div>
        <Banner
          backgroundImageSrc={AboutImg}
          title="Contact"
          breadcrumbs={breadcrumbs}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.col1}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <RiPhoneLine />
            </div>
          </div>
          <div className={styles.content}>
            <h3>9845600000</h3>
            <span>Call anytime</span>
          </div>
        </div>
        <div className={styles.col1}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <RiMailLine />
            </div>
          </div>
          <div className={styles.content}>
            <h3>9845600000</h3>
            <span>Call anytime</span>
          </div>
        </div>
        <div className={styles.col1}>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <IoLocationOutline />
            </div>
          </div>
          <div className={styles.content}>
            <h3>9845600000</h3>
            <span>Call anytime</span>
          </div>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.left}>
          <h2>We are Always Ready to Hear From You</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptas
            libero alias est, totam consequuntur suscipit delectus ratione rem
            numquam!
          </p>
          <div className={styles.iconRow}>
            <div className={styles.roundedIcon}>
              <FaFacebook />
            </div>
            <div className={styles.roundedIcon}>
              <AiFillInstagram />
            </div>
            <div className={styles.roundedIcon}>
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className={styles.contactcontainer}>
      
      <form>
        <div className={styles.Row}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className={styles.Row}>
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Subject" />
        </div>
        <div className={styles.fullRow}>
          <textarea placeholder="Message"></textarea>
        </div>
        <div className={styles.submitRow}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
      </div>
      <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37445.93173391206!2d85.3225751480072!3d27.677475263872555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f2804a02bf%3A0x85468199859b2d8d!2sKoteshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1688812559153!5m2!1sen!2snp"
        className={styles.iframe}
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </>
  );
};

export default page;
