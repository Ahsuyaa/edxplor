import React from "react";
import Banner from "../../components/banner/Banner";
import AboutImg from "../../public/about.jpg";
import styles from "./styles.module.scss"
const page = () => {
  const breadcrumbs = [
    { text: "Home", link: "/" },
    { text: "Benefits of membership", link: "/about" },
  ];
  return (
    <>
      <div>
        <Banner
          backgroundImageSrc={AboutImg}
          title="Benefits of membership"
          breadcrumbs={breadcrumbs}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Benefit for Membership</h1>
          <p >
          last updated on july 18 2022
          </p>
        </div>
        <div className={styles.description}>
          <h1>For Students</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusantium, veritatis eius obcaecati porro quos numquam iusto minus veniam vel, dolor consectetur expedita aperiam fugit? Aliquam molestiae amet minima magnam?
          </p>
          <ol className={styles.customlist}>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus iure facere aliquid sequi quas animi,
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus iure facere aliquid sequi quas animi,
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus iure facere aliquid sequi quas animi,
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus iure facere aliquid sequi quas animi,
            </li>
          </ol>
        </div>
  
        <div className={styles.description}>
          <h1>For College</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo accusantium, veritatis eius obcaecati porro quos numquam iusto minus veniam vel, dolor consectetur expedita aperiam fugit? Aliquam molestiae amet minima magnam?
          </p>
          <ol className={styles.customlist}>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus iure facere aliquid sequi quas animi,
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus iure facere aliquid sequi quas animi,
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus iure facere aliquid sequi quas animi,
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus iure facere aliquid sequi quas animi,
            </li>
          </ol>
        </div>
        <div className={styles.contactcontainer}>
      <h1>For more information please mail us.</h1>
      <form>
        <div className={styles.row}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className={styles.row}>
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
 
    </>
  );
};

export default page;
