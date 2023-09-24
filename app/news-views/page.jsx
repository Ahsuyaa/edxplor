
import AboutImg from '../../public/about.jpg'
import styles from "./styles.module.scss"

import Banner from "../../components/banner/Banner"
import NewsCard from '@/components/newcard/NewsCard';
const page = () => {
    const breadcrumbs = [
        { text: 'Home', link: '/' },
        { text: 'News & Views', link: '/news-views' },
       
      ];
        // Sample data array
  const data = [
    {
      id: 1,
      images: "/about.png",
      title: "Title 1",
      author: "Author 1",
      description: "Description 1",
      time: "10 min",
      authorimg:"/about.png"
    },
    {
      id: 2,
      images: "/about.jpg",
      title: "Title 2",
      author: "Author 2",
      description: "Description 2",
      time: "15 min",
    },
    {
        id: 1,
        images: "/college.png",
        title: "Title 1",
        author: "Author 1",
        description: "Description 1",
        time: "10 min",
        authorimg:"/about.png"
      },
      {
        id: 2,
        images: "/uniform.png",
        title: "Title 2",
        author: "Author 2",
        description: "Description 2",
        time: "15 min",
      },
      {
        id: 1,
        images: "/college.png",
        title: "Title 1",
        author: "Author 1",
        description: "Description 1",
        time: "10 min",
        authorimg:"/about.png"
      },
      {
        id: 2,
        images: "/college.png",
        title: "Title 2",
        author: "Author 2",
        description: "Description 2",
        time: "15 min",
        authorimg:"/about.png"
      },
    // Add more data objects as needed
  ]
  const firstTwoItems = data.slice(0, 2);
  const remainingItems = data.slice(2);
  return (
 <>
      <div className={styles.app}>
      <Banner
        backgroundImageSrc={AboutImg}
        title="News & views"
        breadcrumbs={breadcrumbs}
      />
      </div>
    <div className={styles.main}>
      <div className={styles.grid}>
        {/* Render the first two items */}
        {firstTwoItems.map((item) => (
          <NewsCard item={item} key={item.id} />
        ))}
      </div>

      {/* Render the remaining items */}
      <div className={styles.gridThreeColumns}>
        {remainingItems.map((item) => (
          <NewsCard item={item} key={item.id} />
        ))}
      </div>
      </div>
      </>
  )
}

export default page