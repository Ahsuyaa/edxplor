import React from "react";
import homeui from "./homeui.module.scss";
import Feature from "../feature/Feature";
import SearchBar from "../searchbar/SearchBar";
import Option from "../option/Option";

import LatestNews from "../latestnews/LatestNews";
import { AiOutlineRight } from "react-icons/ai";

import PlansCollege from "../plans&college/PlansCollege";
import girl from "../../public/gl.jpg"
import Image from "next/image";
const HomeUi = () => {
  return (
    <>
    <div className={homeui.maindiv}>
      <div className={homeui.gridcontainer}>
        <div className={homeui.leftdiv}>
          <h1 className={homeui.heading}>
            Find the Best College For Your Future
          </h1>
          <h4 className={homeui.headingcontent}>
            Take your education anywhere you want. you lead, and we'll help
          </h4>
          <div className={homeui.gridrow}>
            <div className={`${homeui.row} `}>
              <div className={homeui.colleft}></div>
              <div className={homeui.colmiddle}>
                <h1 className={homeui.middlecontent}>I`m ready to </h1>{" "}
                <span>Find course</span>
              </div>
              <div className={homeui.colright}>
                <AiOutlineRight />
              </div>
            </div>
            <div className={homeui.childgrid}>
              <div className={homeui.childrow}>
                <div className={homeui.childcolleft}></div>
                <div className={homeui.childcolmiddle}>
                  <h1 className={homeui.middlecontent}>I`m ready to </h1>{" "}
                  <span>Find course</span>
                </div>
                <div className={homeui.childcolright}>
                  <AiOutlineRight />
                </div>
              </div>
              <div className={homeui.childrow}>
                <div className={homeui.childcolleft}></div>
                <div className={homeui.childcolmiddle}>
                  <h1 className={homeui.middlecontent}>I`m ready to </h1>{" "}
                  <span>Find course</span>
                </div>
                <div className={homeui.childcolright}>
                  <AiOutlineRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${homeui.hideonsmall} ${homeui.imagecontainer}`}>
  <div className={homeui.centeredimage}>
    <Image
      src={girl}
      alt="Description of the image"
    
    />
  </div>
</div>

      </div>
      </div>
      <Feature />
      <Option />
      {/* <SearchBar />
      <LatestNews />
      <PlansCollege /> */}
    </>
  );
};

export default HomeUi;
