import React from 'react'
import Styles from "../../Styles/Styles.module.css"
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Features from './Features'
import MenSlide from "./MenSlide"
import Slider from './Slider'

export default function HomePage() {
  return (
    <div className={Styles.HomeBigContainer}>
<div className={Styles.Navbar}>
<Navbar />
</div>
<div className={Styles.Slider}>
  <Slider></Slider>
</div><br></br>
<div className={Styles.Slider}>
  <MenSlide/>
</div>
<div className={Styles.Features}>
<Features />
</div>
<div className={Styles.Footer}><Footer/></div>
  

    </div>
  )
}
