import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddtCartData, getwomen_Json_Data } from "../../Redux/Actions/actionProducts";
import Styles from "../../Styles/StylesProduct.module.css";
import Navbar from "../Navbar/Navbar";

const Womens = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getwomen_Json_Data("Women"));
  }, []);
  const products = useSelector((state) => state.products.products_data);
  console.log("products page", products);
  const handleAddCart=(id)=>{
 
    dispatch(AddtCartData(id))
   }

  return (
   <>
     <div className={Styles.Navbar}>
<Navbar/>
</div>
    <div className={Styles.Product_Container}>
      <div>
        <h1>Women's Products</h1>
      </div>

      {products.map((ele) => {
        return (
          <div className={Styles.Product_Child}>
            <div className={Styles.Product_Image}>
              <img
                className={Styles.Product_ImageImg}
                src={ele.Image_url}
                alt="image"
              />
            </div>
            <div className={Styles.Product_Description}>
              <p>Name : {ele.Brand}</p>
              <p>Price : {ele.Price}</p>
              <p>Rating : {ele.Rating}</p>
              <p>Size : {ele.Size}</p>
              <div className={Styles.Product_CartContainer}>
                {/* <button className={Styles.Product_Cart}>Add to Cart</button> */}
                 <button className={Styles.Product_Cart} onClick={()=>handleAddCart(ele.id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div></>
  );
};

export default Womens;
