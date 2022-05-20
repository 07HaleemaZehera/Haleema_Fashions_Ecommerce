import React from "react";
import Styles from "../../Styles/Styles.module.css";

const MenSlide = () => {
  return (
    <>

      <div className={Styles.mensContainer}>
        <div className={Styles.mensSubContainer}>
          <div className={Styles.men1}>
            {" "}
            <img className={Styles.men1img}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvmlW15wnBk_XSgGSbSyROqhAIuI9q8V9yInq0xUZJw2FwxERsFK8xWH1PMjsipB-IjT4&usqp=CAU"
              alt=""
            />
          </div>
          <div className={Styles.men1}>
            {" "}
            <img className={Styles.men1img}
              src="https://i.pinimg.com/originals/2f/43/3b/2f433b057908b186325cabd04d44982b.jpg"
              alt=""
            />
          </div>
          <div className={Styles.men1}>
            {" "}
            <img className={Styles.men1img}
              src="https://hoodarcheryshop.com/images/thumbs/0002355_ertugrul-ghazi-dress-uc-bey-kaftan-dress-costume-medieval-robe-kaftan-silk-robes-and-kimonos-ottoman_1200.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenSlide;

