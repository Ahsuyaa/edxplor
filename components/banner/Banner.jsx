import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';
import styles from './banner.module.scss';

const Banner = ({ backgroundImageSrc, title, breadcrumbs }) => {
  return (
    <div className={styles.container}>
      <Image src={backgroundImageSrc} alt="Background Image" />
      <div className={styles['text-overlay']}>
        <h1>{title}</h1>
        <p>
          {breadcrumbs.map((breadcrumb, index) => (
            <span key={index}>
              <Link href={breadcrumb.link} className={styles.linkcolor}>{breadcrumb.text}</Link>
              {index !== breadcrumbs.length - 1 && (
                <AiOutlineRight className={styles.arrow} />
              )}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Banner;
