import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import styles from "./option.module.scss"
const Option = () => {
  return (
    <>
     <div className={styles.gridcontainer}>
    <div className={styles.left}>
 <h1>Compare Your School Option</h1>
 <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem dolor sapiente nihil molestiae dolore exercitationem quos eos veniam ipsa omnis.</p>
    </div>
    <div className={styles.right}>
    <div className={`${styles.secondcard} ${styles.override}`}>
  
            <div>
  <div className={styles.card2}>

</div>
<div className={styles.card3}>

</div>
<div className={styles.btn}>
<div className={styles.button1}>
<h6>location</h6>
</div>
<div className={styles.button2}>
<h6>online</h6>
</div>
<div className={styles.button3}>
<h6>NonProfit</h6>
</div>
<div className={styles.button4}>
<h6>Public</h6>
</div>
</div>
<div className={styles.card4}></div>
<div className={styles.card5}></div>
</div>
<div>
<div className={styles.card6}>
    <div className={styles.card7}><FaGraduationCap/></div>
    <div className={styles.card8}>University</div>

</div>
<div className={styles.card9}>Learn Morea</div>
</div>
  </div>
  <div className={`${styles.card} ${styles.overlap}`}>
  <div className={styles.card2}>

</div>
<div className={styles.card3}>

</div>
<div className={styles.btn}>
<div className={styles.button1}>
<h6>location</h6>
</div>
<div className={styles.button2}>
<h6>online</h6>
</div>
<div className={styles.button3}>
<h6>NonProfit</h6>
</div>
<div className={styles.button4}>
<h6>Public</h6>
</div>
</div>
<div className={styles.card4}></div>
<div className={styles.card4}></div>
<div className={styles.card4}></div>
<div className={styles.card5}></div>
<hr></hr>
<div className={styles.card6}>
    <div className={styles.card7}><FaGraduationCap/></div>
    <div className={styles.card8}>University</div>
    <div className={styles.card9}>Learn More</div>
</div>
  </div>
 
    </div>
 </div>
    </>
  )
}

export default Option