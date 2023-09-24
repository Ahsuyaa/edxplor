import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import image from "../../../public/about.png";
import { BiCalendar, BiUser } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

import {
  FaFacebook,
 
  FaFacebookF,
 
  FaRegClock,
  FaTwitter,
 
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const page = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.circleRow}>
          <div className={styles.circle}>
            <div className={styles.content}>
              <h1>
                00
                <span>Hours</span>
              </h1>
            </div>
          </div>
          <div className={styles.circle}>
            <div className={styles.content}>
              <h1>
                00
                <span>Hours</span>
              </h1>
            </div>
          </div>
          <div className={styles.circle}>
            <div className={styles.content}>
              <h1>
                00
                <span>Hours</span>
              </h1>
            </div>
          </div>
          <div className={styles.circle}>
            <div className={styles.content}>
              <h1>
                00
                <span>Hours</span>
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.maincontainer}>
          <h1 className={styles.heading}>
            Gigital Marketo Launched Ready Their Website Working On Our site
          </h1>
          <Image src={image} alt="img" className={styles.image} />
          <div className={styles.detail}>
            <p className={styles.icons}>
              <BiUser />
              <span>Ram Shrestha</span>
            </p>
            <p className={styles.icons}>
              <BiCalendar />
              <span>july,18,2022</span>
            </p>
            <p className={styles.icons}>
              <IoLocationOutline />
              <span>Sanepa-Lalitpur</span>
            </p>
            <p className={styles.icons}>
              <FaRegClock />
              <span>8:00am-9:00am</span>
            </p>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            quos delectus quidem voluptas debitis rem dolorem consectetur
            placeat sapiente aut eligendi distinctio aperiam blanditiis earum
            excepturi provident ipsam odit inventore recusandae iste, deleniti
            est in adipisci molestias. Odit autem maxime atque nisi libero harum
            fuga a itaque ipsam, accusantium, debitis perferendis natus
            voluptatum aspernatur ipsum quia? Tempore ut rerum esse ipsa
            consectetur sunt dicta illo, hic nostrum quod, corporis modi quidem,
            cumque omnis debitis sapiente veritatis perspiciatis quia reiciendis
            provident totam. Cumque sed recusandae ipsum porro ad nisi, quae
            repellat atque deserunt animi voluptate asperiores molestias amet
            saepe aperiam. Ipsum!Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Nostrum soluta doloremque, temporibus hic adipisci
            quos maiores qui nobis corporis ut natus non minus recusandae
            similique nulla, provident illum at deleniti consequuntur beatae
            nesciunt. Aut, a ipsa corporis omnis debitis commodi sequi quidem
            esse quaerat eius voluptate dolores inventore voluptas facere ullam
            at deserunt atque mollitia, voluptatibus id numquam est natus sit.
            Veritatis perspiciatis temporibus incidunt alias neque quaerat nihil
            explicabo fugiat reprehenderit repellendus magni in architecto
            tempora, error labore aliquam quo quam ipsam facilis unde distinctio
            quia excepturi eveniet quibusdam? Temporibus labore unde consectetur
            itaque veritatis magni cum nesciunt molestias quidem sint eveniet
            error numquam repellat esse eius sed doloribus, pariatur deserunt
            voluptatibus impedit rerum iure? Iure, doloremque facere ea ducimus
            odio quis ut optio nesciunt unde cumque voluptates distinctio
            necessitatibus blanditiis temporibus pariatur cupiditate aspernatur
            aut repellat aliquam tempore, dignissimos accusantium! Perferendis,
            placeat. Impedit accusamus in sequi ipsam repellat?
          </p>
          <div className={styles.maprow}>
            <div className={styles.content}>
              <div className={styles.locationdetail}>
                <h1>Rivia infosys</h1>
                <h6>Naraynthan, Kathmandu</h6>
                <h6>Nepal</h6>
              </div>
              <div className={styles.locationdetail}>
                <h1>Contact Info</h1>
                <h6> Phone no:123456</h6>
                <h6>Email:riviainfosys@gmail.com</h6>
                <h6>riviainfosys.com.np</h6>
              </div>
            </div>
            <div className={styles.darkmode}>
              {" "}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.609271192613!2d85.33165227508836!3d27.72934782452138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1940331fa893%3A0x589d7e213947c966!2sBaneshwor!5e0!3m2!1sen!2snp!4v1689055298075!5m2!1sen!2snp"
                width="600"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            natus. Expedita sed provident minus. Porro, consequatur numquam
            quibusdam adipisci consectetur, quia placeat quod aut cumque
            deleniti voluptatum aliquid atque. At.
          </p>

         <p className={styles.separator}>  <hr /></p>
          <div className={styles.shares}>
            
            <div className={styles.socialmedia}>
          
              <h6>Share now</h6>
           
            <div className={styles.roundedIcon}>
              <FaFacebookF />
            </div>
            <div className={styles.roundedIcon}>
              <AiFillInstagram />
            </div>
            <div className={styles.roundedIcon}>
              <FaTwitter />
            </div>
         
            </div>
            <div className={styles.tags}>
              <h6>Tags</h6>
              <p>Information Technology</p>
              <p>law</p>
              <p>Security</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
