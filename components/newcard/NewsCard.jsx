import Image from "next/image";
import { FaRegClock } from "react-icons/fa";
import styles from "./styles.module.scss";

const NewsCard = ({ item }) => {
  return (
    <div className={styles.main}>
    <div className={styles.slide} key={item.id}>
      <div className={styles.card}>
        <Image src={item.images} alt="Background Image" className={styles.image} width={200} height={350} />
        <div className={styles.details}>
          <div className={styles.titleAuthorRow}>
            <h3 className={styles.title}>{item.title}</h3>
            <span className={styles.author}>
              <Image
                src={item.authorimg}
                alt="Author Image"
                className={styles.authorImage}
                width={40}
                height={40}
              />
              {item.author}
            </span>
          </div>
          <div className={styles.description}>{item.description}</div>
          <div className={styles.footerRow}>
            <span className={styles.readMore}>Read More</span>
            <span className={styles.time}>
              <FaRegClock />
              {item.time}
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NewsCard;
