import React from "react";
import Styles from "../../Styles/Styles.module.css";

const Slider = () => {
  return (
    <div className={Styles.SliderChild}>
      <div className={Styles.Slider_Image}>
        <img
          className={Styles.image_slider}
          src="https://mantrafashion.in//images/product/sub_images/2021/03/shivali-fashion-urvashi-peplam-5-2021-03-15_19_01_18-SHIVALI%20URVASHI%20PEPLAM%20(6).jpeg"
          alt=""
        />
        {/* <br></br> */}
        <img
          className={Styles.image_slider}
          src="https://rrgandhi.com/wp-content/uploads/2021/04/halime-sultan-by-shivali-readymade-heavy-work-garara-suits-eid-special-pakistani-suits-2021-04-08_10_26_31.jpeg"
          alt=""
        />
        <img
          className={Styles.image_slider}
          src="https://wholesaleyug.com/wp-content/uploads/2021/04/halime-sultan-by-shivali-readymade-heavy-work-garara-suits-eid-special-pakistani-suits-0-2021-04-08_10_26_31-1.jpeg"
          alt=""
        />
      </div>
      <br />
      <div className={Styles.SliderMen_Image}>
        {/* <div>Men's Ertugrul Collection</div> */}
        <img  className={Styles.image_slider2} src="https://i.etsystatic.com/10634065/r/il/fd1c34/2183691587/il_fullxfull.2183691587_or9f.jpg" alt="" />
        <img  className={Styles.image_slider2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCq6nTa49gV5Y0y5-TDqGFNqp5cXq2MPF-vS-YiFnLSe3654Qh6Ero1lpGJjE2AeeapxY&usqp=CAU" alt="" />
        <img  className={Styles.image_slider2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW5NzjGMlBQVwZqV-vh0m_BsXzVJsLWNDlyQED1pOxB90aheTyQcaqd9IWzACAdOaR31s&usqp=CAU" alt="" />
         
      </div>
    </div>
  );
};

export default Slider;

// rgb
