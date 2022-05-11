import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJson_action_Products, getMen_Json_Data } from "../../Redux/Actions/actionProducts";
import Styles from "../../Styles/StylesProduct.module.css";

const AllProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJson_action_Products());
  }, []);
  const products = useSelector((state) => state.products.products_data);
  console.log("products page", products);

  return (
    <div className={Styles.Product_Container}>
      {products.map((ele) => {
        return (
          <div className={Styles.Product_Child}>
            <div className={Styles.Product_Image}>
              <img
                className={Styles.Product_ImageImg}
                src={ele.Image_url}
                alt=""
              />
            </div>
            <div className={Styles.Product_Description}>
              <p>Name : {ele.Brand}</p>
              <p>Price : {ele.Price}</p>
              <p>Rating : {ele.Rating}</p>
              <p>Size : {ele.Size}</p>
              <div className={Styles.Product_CartContainer}>
                <button className={Styles.Product_Cart}>Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
