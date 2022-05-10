import React from "react";
import Styles from "../../Styles/Styles.module.css";

export default function Navbar() {
  // const nav
  return (
    <nav className={Styles.Nav}>
      <div className={Styles.LeftNavBar}>
        <div className={Styles.logo}>Click here</div>
        <div className={Styles.category}>
          <div className={Styles}>MEN</div>
          <div className={Styles}>WOMEN</div>
          <div className={Styles}>BABY</div>
          <div className={Styles}>ACCESSORIES</div>
        </div>
      </div>
      <div className={Styles.RightNavBar}>
        <div className={Styles.Inputs}>
          <input
            placeholder="Search...."
            className={Styles.Inputss}
            type="text"
            onChange={""}
          />{" "}
        </div>
        <div>
          <input type="Submit" className={Styles.InputsBtn} />
       
        </div>
        <div className={Styles}>
          <i
            onClick={(e) => console.log(e.target)}
            class="fa-solid fa-user-plus"
          ></i>
        </div>
        <div className={Styles}>
          <i
            onClick={(e) => console.log(e.target)}
            class="fa-solid fa-cart-arrow-down"
          ></i>
        </div>
      </div>
    </nav>
  );
}

// mens
// womens
// logo redirect
// accessories
// kids
// cart
// signup
// login
