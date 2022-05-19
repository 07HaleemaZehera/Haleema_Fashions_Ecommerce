import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AddtCartData,
  getFilter_product_Women,
  getwomen_Json_Data,
  getWomen_Sorting_product,
} from "../../Redux/Actions/actionProducts";
import { addSearch } from "../../Redux/Actions/actionSearch";
import Styles from "../../Styles/StylesProduct.module.css";
import Navbar from "../Navbar/Navbar";

const Womens = () => {
  const dispatch = useDispatch();
  const searchs = useSelector((state)=> state.searchs.searchs)
  if(searchs.length >= 1){
    dispatch(getFilter_product_Women(searchs))
    dispatch(addSearch([]))


  }

  // const womens = useSelector((state) => state.products.products_data);

  const handleFilter = (data) => {
    dispatch(getFilter_product_Women(data));
    console.log("data", data);
  };

  const handleSorting = (e) => {
    let value = e.target.value;
    console.log(value);
    dispatch(getWomen_Sorting_product(value));
  };

  useEffect(() => {
    dispatch(getwomen_Json_Data("Women"));
  }, []);
  const products = useSelector((state) => state.products.women_data);
  console.log("products page", products);
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
            <div>
              <button onClick={() => handleFilter("skirt")}>Skirt</button>
            </div>
            <div>
              <button onClick={() => handleFilter("jacket")}>Jacket</button>
            </div>
            <div>
              <button onClick={() => handleFilter("bottom")}>Bottom</button>
            </div>
            <div>
              <button onClick={() => handleFilter("dress")}>Dress</button>
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
      </div>

      <div className={Styles.Product_Container}>
        <div>
          <h1>Women's Products</h1>
        </div>

        {products.map((ele) => {
          return (
            // <div className={Styles.Product_Child}>
            //   <div className={Styles.Product_Image}>
            //     <img
            //       className={Styles.Product_ImageImg}
            //       src={ele.image_url}
            //       alt="image"
            //     />
            //   </div>
            //   <div className={Styles.Product_Description}>
            //     <p>Name : {ele.brand}</p>
            //     <p>Price : {ele.price}</p>
            //     <p>Category : {ele.category}</p>
            //     <p>Color : {ele.color}</p>
            //     <div className={Styles.Product_CartContainer}>
                  
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
                    src={ele.image_url}
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
