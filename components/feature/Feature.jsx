import styles from './feature.module.scss';
import Image from 'next/image';
import { FaArrowRight, FaUniversity } from "react-icons/fa";
export default function Home() {
  const dataArray = [
    { id: 1, title: 'Agriculture',content:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus maxime eveniet at vitae vero nam iusto explicabo quis accusantium.', icon:<FaUniversity/> },
    { id: 2, title: 'Architecture',content:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus maxime eveniet at vitae vero nam iusto explicabo quis accusantium.', icon:<FaUniversity/>  },
    { id: 3, title: 'Chemical Engineering',content:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus maxime eveniet at vitae vero nam iusto explicabo quis accusantium.', icon:<FaUniversity/>  },
    { id: 4, title: 'Finance',content:'  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus maxime eveniet at vitae vero nam iusto explicabo quis accusantium.', icon:<FaUniversity/>  },

  ];


  return (
    <>
    <div className={styles.featureddiv}>
     <div className={styles.topic}>
    <h1>Find Your Passion</h1>
    <div className={styles.desc}>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, consectetur?</p>
     <button className={styles.btn}>View more <FaArrowRight/></button>
    </div>
    </div>
    <div className={styles['card-grid']}>
      {dataArray.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles['card-icon']}>
           {item.icon}
          </div>
          <h2 className={styles['card-title']}>{item.title}</h2>
          <p className={styles['card-content']}>
           {item.content}
          </p>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}
