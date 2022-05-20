import React from "react";
import Styles from "../../Styles/Styles.module.css";

const Features = () => {
  return (
  <>
  <div className={Styles.Features_Container}>    
    <div className={Styles.Arrival}>
      <div className={Styles.features_Title}>New Arrival</div>   
      <div className={Styles.Features_img}>
        <img src="https://cdn-skin.sanaullastore.com/media/catalog/product/h/a/halima-sultan-lawn-2021-collection-volume-1-hs21l-05-_1_.jpg" alt="image" className={Styles.arrivalImg} />
      </div>
    </div>

    {/* ------------------------------------- */}
   
    <div className={Styles.Arrival}>
      <div className={Styles.features_Title}>New Arrival</div>
      <div className={Styles.Features_img}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzecBRQVeVb3Gv7X2Oh-wRM2ALxPTT2HgR_7gOi8e7Me6RqWayx1C4fquMj7dU4W4AU0w&usqp=CAU" alt="image" className={Styles.arrivalImg} />
      </div>
    </div>

    <div className={Styles.Arrival}>
      <div className={Styles.features_Title}>New Arrival</div>
      <div className={Styles.Features_img}>
        <img src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/26/75011.jpg" alt="image" className={Styles.arrivalImg} />
      </div>
    </div>
    {/* ----------------------------------- */}
    <div className={Styles.Arrival}>
      <div className={Styles.features_Title}>New Arrival</div>
      <div className={Styles.Features_img}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHOGYDjkBIULmYwdPdkrsw8MhC4SeMfSpibuAfWJ89NMZYjg5bkL-5UwYtGCqKQcwjUG4&usqp=CAU" alt="image" className={Styles.arrivalImg} />
      </div>
    </div>
    <div className={Styles.Arrival}>
      <div className={Styles.features_Title}>New Arrival</div>
      <div className={Styles.Features_img}>
        <img src="https://pbs.twimg.com/media/Eo8slOfWEAIjDSI.jpg" alt="image" className={Styles.arrivalImg} />
      </div>
    </div>
  </div>
  </>
  );
};

export default Features;
