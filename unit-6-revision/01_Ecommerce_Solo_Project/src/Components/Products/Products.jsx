import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import {
  AddtCartData,
  getFilter_product,
  getJson_action_Products,
  getSorting_product,
} from "../../Redux/Actions/actionProducts";
import Styles from "../../Styles/StylesProduct.module.css";
import Navbar from "../Navbar/Navbar";
const Products = () => {
 
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
  const products = useSelector((state) => state.products.products_data);
  const handleAddCart=(id)=>{
    const cartData = products.filter((ele)=> ele.id === id )
   dispatch(AddtCartData(cartData))
  }
  console.log("products page", products);
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
                  <img
                    className={Styles.Product_ImageImg}
                    src={ele.Image_url}
                    alt=""
                  />
                </div>
                <div className={Styles.Product_Description}>
                  <p>Brand : {ele.Brand}</p>
                  <p>Price : {ele.Price}</p>
                  <p>Rating : {ele.Rating}</p>
                  <p>Size : {ele.Size}</p>
                  
                </div>
               </Link>
                    <button className={Styles.Product_Cart} onClick={()=>handleAddCart(ele.id)}>Add to Cart</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Products;
