import React, { useState } from "react";
import Styles from "../../Styles/Styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSearch } from "../../Redux/Actions/actionSearch";
export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchs = useSelector((state) => state.searchs.searchs);
  // console.log('searchs', searchs);
  // const nav
  const [search, setSearch] = useState("");
  const handleSearchBtn = () => {
    dispatch(addSearch(search));
  };
  return (
    <nav className={Styles.Nav}>
      <div className={Styles.LeftNavBar}>
        <div className={Styles.logo}>
          <img
            onClick={() => navigate("/")}
            src="data:image/png;base64,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"
            width="140px"
            height="101px"
            className={Styles.logoImg}
          ></img>
        </div>
        <div className={Styles.category}>
          <div className={Styles}>
            <Link className={Styles.linkMen} to={"/"}>
              <p className={Styles.men}>Home</p>
            </Link>
          </div>
          <div>
            <Link className={Styles.linkMen} to={"/product/men"}>
              <p className={Styles.men}>Men</p>
            </Link>
          </div>

          <div>
            <Link className={Styles.linkMen} to={"/product/women"}>
              <p className={Styles.men}>Women</p>
            </Link>
          </div>
          <div>
            <Link className={Styles.linkMen} to={"/kid"}>
              <p className={Styles.men}>Kids</p>
            </Link>
          </div>
          {/* <div className={Styles.accessories}>PERFUMES</div> */}
        </div>
      </div>
      <div className={Styles.RightNavBar}>
        <div className={Styles.Inputs}>
          <input
            placeholder="Search...."
            className={Styles.Inputs_search}
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
        </div>
        <div className={Styles.btn}>
          <input
            type="Submit"
            onClick={handleSearchBtn}
            className={Styles.InputsBtn}
          />
        </div>
        <div className={Styles.register_Icon}>
          <Link className={Styles.register_Icon} to="/registerlogin">
            {" "}
            <i
              onClick={(e) => console.log(e.target)}
              class="fa-solid fa-user-plus"
            ></i>
          </Link>
        </div>

        <div className={Styles.cart_Icon}>
          <Link className={Styles.cart_Icon} to={"/cart"}>
            {" "}
            <i
              onClick={(e) => console.log(e.target)}
              class="fa-solid fa-cart-arrow-down"
            ></i>
          </Link>
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
