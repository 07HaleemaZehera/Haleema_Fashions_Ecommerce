import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJson_action_Products } from "../../Redux/Actions/actionProducts";
import Styles from "../../Styles/StylesProduct.module.css"

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJson_action_Products());
  }, []);
  const products = useSelector((state) => state.products.products_data);
  console.log("products page", products);
  return (
    <div>
      <h3>Products</h3>
      <div>
        {products.map((e, i) => {
          return (
            <div className={Styles.product_Parent}> 
              <div className={Styles.product_Child}>
                <div className={Styles.product_Image}>
                  <img src={e.Image_url} alt="" />
                </div>

                <div className={Styles.product_Decription}>
                  <p>Brand:{e.Brand}</p>
                  <p>Size:{e.Size}</p>
                  <p>Rating:{e.Rating}</p>
                  <p>Price:{e.Price}</p>
                  <p>Offer:{e.Offer}</p>
                  <p>Description{e.Decription}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
