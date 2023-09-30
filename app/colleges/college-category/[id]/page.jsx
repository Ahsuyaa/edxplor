"use client";
import Banner from "../../../../components/banner/Banner"
import AboutImg from "../../../../public/about.jpg"
import styles from "./styles.module.scss"
import Image from 'next/image';
const page = () => {
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
  </>
  )
}

export default page