import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddtCartData,
  getFilter_product_Kid,
  getKid_Json_Data,
  getKid_Sorting_product,
} from "../../Redux/Actions/actionProducts";
import { addSearch } from "../../Redux/Actions/actionSearch";
import Styles from "../../Styles/StylesProduct.module.css";
import Navbar from "../Navbar/Navbar";

const Womens = () => {
  const products = useSelector((state) => state.products.kid_data);

  const searchs = useSelector((state) => state.searchs.searchs);
  const dispatch = useDispatch();
  if (searchs.length >= 1) {
    dispatch(getFilter_product_Kid(searchs));
    dispatch(addSearch([]));
  }

  const handleFilter = (data) => {
    const kidData=data.target.value
    dispatch(getFilter_product_Kid(kidData));
  };

  const handleSorting = (e) => {
    let value = e.target.value;
    console.log(value);
    dispatch(getKid_Sorting_product(value));
  };

  useEffect(() => {
    dispatch(getKid_Json_Data("Kid"));
  }, []);

  const handleAddCart = (id) => {
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
            <select onChange={handleFilter} name="" id="" >
              <option>Select Brand</option>
              <option value="Jeans">Jeans</option>
              <option value="Hoodie">Hoodie</option>
              <option value="Pajamas">Pajamas</option>
              <option value="shirts">Shirts</option>
              <option value="Masks">Masks</option>
            </select>
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
      </div>

      <div className={Styles.Product_Container}>
       
        {products.map((ele) => {
          return (
            // <div className={Styles.Product_Child}>
            //   <div className={Styles.Product_Image}>
            //     <img
            //       className={Styles.Product_ImageImg}
            //       src={ele.Image_url}
            //       alt="image"
            //     />
            //   </div>
            //   <div className={Styles.Product_Description}>
            //     <p>Name : {ele.brand}</p>
            //     <p>Price : {ele.price}</p>
            //     <p>Category : {ele.category}</p>
            //     <p>Color : {ele.color}</p>
            //     <div className={Styles.Product_CartContainer}>
            //       {/* <button className={Styles.Product_Cart}>Add to Cart</button> */}
            //       <button
            //         className={Styles.Product_Cart}
            //         onClick={() => handleAddCart(ele._id)}
            //       >
            //         Add to Cart
            //       </button>
            //     </div>
            //   </div>
            // </div>

            <>
              <div className={Styles.Product_Child}>
                {/* //card */}
                <Link to={`/details/${ele._id}`} className={Styles.decoration}>
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
                    <p>Name: {ele.name}</p>
                    <p>Price : {ele.price}</p>
                    <p> Category: {ele.brand}</p>
                    <p>Color: {ele.color}</p>
                  </div>
                </Link>
                <button
                  className={Styles.Product_Cart}
                  onClick={() => handleAddCart(ele._id)}
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

export default Womens;
