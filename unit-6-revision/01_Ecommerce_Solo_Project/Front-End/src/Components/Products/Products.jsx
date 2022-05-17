import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddtCartData,
  getFilter_product,
  getJson_action_Products,
  getSorting_product,
} from "../../Redux/Actions/actionProducts";
import Styles from "../../Styles/StylesProduct.module.css";
import Navbar from "../Navbar/Navbar";
const Products = () => {
  const products = useSelector((state) => state.products.products_data);

  const handleFilter = (data) => {
    dispatch(getFilter_product(data));
    console.log("data", data);
  };

  const handleSorting = (e) => {
    let value = e.target.value;
    console.log(value);
    dispatch(getSorting_product(value));
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJson_action_Products());
  }, []);
  const handleAddCart = (id) => {
    dispatch(AddtCartData(id));
  };
  console.log("products page", products);
  return (
    <>
      <div className={Styles.welcome}>
        <h2>
          <marquee direction="left"> Welcome to HAleema Fashions</marquee>
        </h2>
      </div>
      <br />
      <br />
      <div className={Styles.Navbar}>
        <Navbar />
      </div>
      <br />
      <br />
      <div className={Styles.filter_div}>
        <div className={Styles.filter_div_left}>
          <div>Filter By Brand</div>
          <div className={Styles.filter_div_left_brand}>
            <div>
              <button onClick={() => handleFilter("Halime")}>Halime</button>
            </div>
            <div>
              <button onClick={() => handleFilter("Allen Solley")}>
                Allen Solley
              </button>
            </div>
          </div>
        </div>
        <div className={Styles.sort_div_right}>
          <div>Sort By Price</div>
          <div>
            <select name="" id="" onChange={handleSorting}>
              <option>Select</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div className={Styles.Product_Container}>
        {products.map((ele) => {
          return (
            <>
              <div className={Styles.Product_Child}>
                <Link to={`/details/${ele.id}`} className={Styles.decoration}>
                  <div className={Styles.Product_Image}> 
                   {/* //Image_url */}
                    <img
                      className={Styles.Product_ImageImg}
                      src={ele.Image_url}
                      alt=""
                    />
                  </div>
                  <div className={Styles.Product_Description}>  
                   {/* //contnt */}
                    <p>Brand : {ele.name}</p>
                    <p>Price : {ele.price}</p>
                    <p>Rating : {ele.brand}</p>
                    <p>Size : {ele.color}</p>
                  </div>
                </Link>
                <button
                  className={Styles.Product_Cart}
                  onClick={() => handleAddCart(ele.id)}
                >
                  Add to Cart
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Products;
