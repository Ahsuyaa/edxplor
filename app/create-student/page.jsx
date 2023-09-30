"use client"
import React, { useState } from 'react';
import styles from "./styles.module.scss";
import Image from 'next/image';
import profile from "../../public/profile.png";


const Page = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [gender, setGender] = useState('');
  const [religion, setReligion] = useState('');
  const [ethnicity, setEthnicity] = useState('');
  const [edj, setEdj] = useState('');
  const [nationality, setNationality] = useState('');

  return (
    <>
     <div className={styles.maindiv}>
     <h2 className={styles.mainheadline}> Students <span> Create</span></h2>
   
      <div className={styles.container}>
        
        <div>
          <h1 className={styles.heading}>Basic Information</h1>
          <div className={styles.img}>
            <Image src={profile} alt='img'/>
          </div>
          <div className={styles.row}>
            <div>
              <h2>First Name</h2>
            </div>
            <div>
              <h2>Middle Name</h2>
            </div>
            <div>
              <h2>Last Name</h2>
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <h2>Personal Email</h2>
            </div>
            <div>
              <h2>College Email</h2>
            </div>
            <div>
              <h2>Dob</h2>
            </div>
          </div>
          <div className={styles.row}>
            <div>
              <h2>Phone No</h2>
            </div>
            <div>
              
              <select value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
            
              <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
                <option value="">Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <div>
          
              <select value={religion} onChange={(e) => setReligion(e.target.value)}>
                <option value="">Religion</option>
                <option value="hindu">Hindu</option>
                <option value="muslim">Muslim</option>
                <option value="christian">Christian</option>
                <option value="sikh">Sikh</option>
                <option value="buddhist">Buddhist</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
          
              <select value={ethnicity} onChange={(e) => setEthnicity(e.target.value)}>
                <option value=" ">Ethnicity</option>
                <option value="asian">Asian</option>
                <option value="african">African</option>
                <option value="caucasian">Caucasian</option>
                <option value="hispanic">Hispanic</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
          
              <select value={edj} onChange={(e) => setEdj(e.target.value)}>
                <option value="">EDJ</option>
                <option value="bachelor">Bachelor's</option>
                <option value="master">Master's</option>
                <option value="phd">PhD</option>
                <option value="diploma">Diploma</option>
              </select>
            </div>
            <div>
          
              <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                <option value="">Nationality</option>
                <option value="us">US</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <h1 className={styles.heading}>Academic Information</h1>
          <div className={styles.rightrow}>
           
          <div >
             
              <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                <option value="">Interested College</option>
                <option value="us">US</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              
              <select value={nationality} onChange={(e) => setNationality(e.target.value)}  >
                <option value="" disabled hidden >Interested Stream</option>
                <option value="us">US </option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className={styles.rightrow}>
          <div >
             
              <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                <option value="">Interested College</option>
                <option value="us">US</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              
              <select value={nationality} onChange={(e) => setNationality(e.target.value)}  >
                <option value="" disabled hidden >Interested Stream</option>
                <option value="us">US </option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
           
          </div>
          <h1 className={styles.heading}>Certificate/Training</h1>
          <div className={styles.rightrow}>
          <div >
             
              <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                <option value="">Interested College</option>
                <option value="us">US</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              
              <select value={nationality} onChange={(e) => setNationality(e.target.value)}  >
                <option value="" disabled hidden >Interested Stream</option>
                <option value="us">US </option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
           
          </div>
          <div className={styles.rightrow}>
          <div >
             
              <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                <option value="">Interested College</option>
                <option value="us">US</option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              
              <select value={nationality} onChange={(e) => setNationality(e.target.value)}  >
                <option value="" disabled hidden >Interested Stream</option>
                <option value="us">US </option>
                <option value="uk">UK</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="other">Other</option>
              </select>
            </div>
           
          </div>
          <textarea className={styles.textarea} placeholder='Description' />
        </div>
      </div>
      </div>
    </>
  );
};

export default Page;
