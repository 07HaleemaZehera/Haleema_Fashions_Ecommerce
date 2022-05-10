import React from "react";
import Styles from "../../Styles/Styles.module.css";

const Slider = () => {
  return (
    <div className={Styles.SliderChild}>
      <div className={Styles.SliderImages}>
        <div className={Styles.Slider_Titiles}>Western Fashion </div>
        <div className={Styles.Slider_images}>
          {" "}
          <img
            src="https://www.signatureclothing.com.au/wp-content/uploads/2018/07/Womens-Shirts-Blouses.jpg"
            alt="western-wear"
            className={Styles.imgTag}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;

// rgb