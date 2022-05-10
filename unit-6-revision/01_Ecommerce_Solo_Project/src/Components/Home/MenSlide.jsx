import React from "react";
import Styles from "../../Styles/Styles.module.css"


const MenSlide = () => {
  return (
    <div className={Styles.SliderChild}>
      <div className={Styles.SliderImages}>
        <div className={Styles.Slider_Titiles}>Men Fashion </div>
        {/* <div className={Styles.Slider_images}>
          {" "}
          <img
            src="https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I="
            className={Styles.imgTag}
          />
        </div> */}
      </div>
    </div>
  );
};

export default MenSlide;
