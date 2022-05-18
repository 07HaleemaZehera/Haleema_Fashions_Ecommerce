import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddtCartData,
  getFilter_product_Men,
  getMen_Json_Data,
  getMen_Sorting_product,
} from "../../Redux/Actions/actionProducts";
import Styles from "../../Styles/StylesProduct.module.css";
import Navbar from "../Navbar/Navbar";

const Mens = () => {
  const dispatch = useDispatch();
  const mens = useSelector((state) => state.products.men_data);

  const handleFilter = (data) => {
    dispatch(getFilter_product_Men(data));
    console.log("data", data);
  };

  const handleSorting = (e) => {
    let value = e.target.value;
    console.log(value);
    dispatch(getMen_Sorting_product(value));
  };

  useEffect(() => {
    dispatch(getMen_Json_Data("Men"));
  }, []);
  const products = useSelector((state) => state.products.men_data);
  console.log("products page", products);
  const handleAddCart = (id) => {
    console.log("id", id);

    dispatch(AddtCartData(id));
  };

  return (
    <>
      <div className={Styles.Navbar}>
        <Navbar />
      </div>

      <div className={Styles.filter_div}>
        <div className={Styles.filter_div_left}>
          <div>Filter By Brand</div>
          <div className={Styles.filter_div_left_brand}>
            <div>
              <button onClick={() => handleFilter("shirts")}>Shirts</button>
            </div>
            <div>
              <button onClick={() => handleFilter("Loungewear")}>
                Loungewear
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
        <div>
          <h1></h1>
        </div>
        {products.map((ele) => {
          return (
            <div className={Styles.Product_Child}>
              <div className={Styles.Product_Image}>
                <img
                  className={Styles.Product_ImageImg}
                  src={ele.image_url}
                  alt=""
                />
              </div>
              <div className={Styles.Product_Description}>
                <p>Name : {ele.brand}</p>
                <p>Price : {ele.price}</p>
                <p>Category : {ele.category}</p>
                <p>Color : {ele.color}</p>
                <div className={Styles.Product_CartContainer}>
                  {/* <button className={Styles.Product_Cart}>Add to Cart</button> */}
                  <button
                    className={Styles.Product_Cart}
                    onClick={() => handleAddCart(ele._id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mens;
