import React from "react";
import Styles from "../../Styles/Styles.module.css";

const Slider = () => {
  return (
   <>
    <div className={Styles.SliderChild}>
      <div className={Styles.Image_Container}>
        <div className={Styles.Image}>
          <img className={Styles.First_img} src="https://showbizpk.com/wp-content/uploads/2021/04/nida-yasir-3aa-4.jpg"></img>
          <img className={Styles.First_img1} src="https://www.24newshd.tv/digital_images/extra-large/2021-04-19/nida-yasir-s-attempt-to-copy-ertugrul-s-halime-sultan-backfires-1618823287-4267.png"></img>
         
        </div>
        
      </div>
 

    </div>
         <br />
         {/* <div className={Styles.sub_container}>
           <div className={Styles.sub_containers1}>
             <div className={Styles.homepage_category}>hello</div>
             <div className={Styles.homepage_category}>hello</div>
             <div className={Styles.homepage_category}>hello</div>
             <div className={Styles.homepage_category}>hello</div>
            
           </div>
         </div> */}  
   </>
  );
};

export default Slider;

