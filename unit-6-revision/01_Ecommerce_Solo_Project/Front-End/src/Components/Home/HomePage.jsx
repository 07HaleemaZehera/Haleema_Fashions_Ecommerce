import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Styles from "../../Styles/Styles.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Features from "./Features";
import Features2 from "./Features2";
// import LandingPage from "./LandingPage";
import MenSlide from "./MenSlide";
import Slider from "./Slider";

export default function HomePage() {
  const navigate=useNavigate()
  const searchs = useSelector((state) => state.searchs.searchs);
  console.log("searchs", searchs);
  return (
    <>
      {/* <LandingPage/> */}
      <div className={Styles.HomeBigContainer}>
        <div className={Styles.welcome}>
          <h2>
            <marquee direction="left"> Welcome to Haleema Fashions</marquee>
          </h2>
        </div>
        <div className={Styles.Navbar}>
          <Navbar />
        </div>
        <div  onClick={()=>navigate("/product/women")} className={Styles.Slider}>
          <Slider></Slider>
        </div>
        <br></br>
        <div onClick={()=>navigate("/product/men")} className={Styles.Slider}>
          <MenSlide />
        </div>
       
        <div onClick={()=>navigate("/kid")} className={Styles.Features}>
          <Features />
        </div>
        <div className={Styles.Features2}>
          <Features2 />
        </div>
        <div className={Styles.Footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}
