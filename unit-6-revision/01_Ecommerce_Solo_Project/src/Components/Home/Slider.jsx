import React from "react";
import Styles from "../../Styles/Styles.module.css";

const Slider = () => {
  return (
    <div className={Styles.SliderChild}>
      <div className={Styles.Slider_Image}>
        <img
          className={Styles.image_slider}
          src="https://i.ytimg.com/vi/dMDZArr0gL4/hqdefault.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Slider;

// rgb
