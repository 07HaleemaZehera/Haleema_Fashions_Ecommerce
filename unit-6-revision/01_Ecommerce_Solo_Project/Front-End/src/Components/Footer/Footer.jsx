import React from "react";
import Styles from "../../Styles/Styles.module.css";

export default function Footer() {
  return (
    <div className={Styles.mainParent}>
      <div className={Styles.mainParentChild}>
        <div className={Styles.box}>
          <div className={Styles.footer_div}>Brand Collections</div>
          <img
            className={Styles.footer_img}
            src="https://i.pinimg.com/originals/5b/da/4d/5bda4d2cbc43ea370cb3e3fa25b574c0.jpg"
            alt=""
          />
          <img
            className={Styles.footer_img1}
            src="https://i.pinimg.com/originals/5a/a8/78/5aa878fed3b5eae23461914a6ddedbb7.jpg"
            alt=""
          />
        </div>
        <div className={Styles.box}>
          <div className={Styles.footer_div}>MEN'S CLOTHING</div>
          
          <div className={Styles.footer_data}>
            <p></p>

            <p>men's Shirts</p>
            <p>men's LoungeWear</p>

            <p>Men's Plus Size Store</p>

            <p>Women's Skirts</p>
          </div>
        </div>
        <div className={Styles.box}>
          <div className={Styles.footer_div}>Women's Wear</div>
          <div className={Styles.footer_data}>
            <p>Women's Half Sleeve T-Shirts</p>
            <p>Women's Hoodies </p>
            <p>Women's Plus Size Store</p>
          </div>
        </div>
        <div className={Styles.box}>
          <div className={Styles.footer_div}>Kids Wear</div>
          <div className={Styles.footer_data}>
            <p>Kid's \Shirts</p>
            <p>Kid's Hoodies </p>
            <p>Kid's Pants</p>
         <p>Masks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//  <div className={Styles.footer_data}>
{
  /* <p>Men's New Arrivals</p>

<p>Men's Half Sleeve T-Shirts</p>
<p>Men's Hoodies </p>
<p>Men's Plus Size Store</p>
<div className={Styles.brandImg}>
  <img
    src="https://i.pinimg.com/originals/5b/da/4d/5bda4d2cbc43ea370cb3e3fa25b574c0.jpg"
    alt=""
  />
</div>
</div> */
}
