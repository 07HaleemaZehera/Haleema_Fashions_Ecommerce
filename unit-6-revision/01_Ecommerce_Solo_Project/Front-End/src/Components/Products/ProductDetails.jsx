import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  AddHandleBuy,
  particularData,
} from "../../Redux/Actions/actionProducts";
import Styles from "../../Styles/StylesProduct.module.css";
import Navbar from "../Navbar/Navbar";

export default function ProductDetails() {
  // const isAuth = false;
  // const PrivateRouteBuy = ({ isAuth, children }) => {
  //  return isAuth==true ? children : alert("User not logged in");
  // };
  const [particularDatas] = useSelector(
    (state) => state.products.products_data
  );
  console.log("particularDatas", particularDatas);
  const dispatch = useDispatch();
  const { id } = useParams();
  const handleBuy = () => {
    dispatch(AddHandleBuy(particularDatas));
  };
  useEffect(() => {
    axios.get(`http://localhost:3000/products?id=${id}`).then((data) => {
      dispatch(particularData(data));
    });
  }, [id]);
  return (
    <>
      <div className={Styles.Navbar}>
        <Navbar />
      </div>
      <br></br>
      <br></br>
      <div>
        <div className={Styles.Detail_mainContainer}>
          <div className={Styles.Detail_subContainer}>
            <div className={Styles.Detail_LeftContainer}>
              <div className={Styles.Detail_Image}>
                <img
                  className={Styles.Detail_ImageChild}
                  src={particularDatas.Image_url}
                  alt="image"
                />
              </div>
              <div className={Styles.Detail_Title}>
                <b>Brand:</b> {particularDatas.Brand}
              </div>
              <div className={Styles.Detail_Size}>
                <b>Size:</b>
                {particularDatas.Size}
              </div>
              <div className={Styles.Detail_Description}>
                <b>Description:</b>
                {particularDatas.Description}
              </div>
            </div>
            <div className={Styles.Detail_RightContainer}>
              <div className={Styles.Detail_RightDescription}>
                <b>Description</b>
                {particularDatas.Description}
              </div>
              <div className={Styles.Detail_RightPrice}>
                <b>Price</b>
                {particularDatas.Price}
              </div>
              <div className={Styles.Detail_RightSize}>
                <select onChange={() => "handleSize"}>
                  <option>Size</option>
                  <option value="small">small</option>
                  <option value="medium">medium</option>
                  <option value="large">large</option>
                </select>
              </div>
              <div className={Styles.Detail_Cart}>
                
                  <button onClick={handleBuy}>
                    <Link to="/checkout">Buy Now</Link>
                  </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// getproduct uske cheexon ko
//
