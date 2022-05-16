import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DeleteTheData, updatedCarts } from "../../Redux/Actions/actionProducts";
import Styles from "../../Styles/StylesProduct.module.css";
export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [items, setItems] = useState(0);
  console.log('items', items);
  let itemPrice=0;
  let All_Price = 0;
  const cartsData = useSelector((state) => state.products.cart);
  console.log("cartsData", cartsData);
  {
    cartsData.map((e) => {
      All_Price = All_Price + +e.Price;
    });
  }
  const handleQuantityDec = (id) => {
    let index = cartsData.findIndex((ele) => ele.id == id);

    cartsData[index].Item = cartsData[index].Item - 1;
    // setItem(id);

    dispatch(updatedCarts());
  };

  const handleQuantityInc = (id) => {


    let index = cartsData.findIndex((ele) => ele.id == id);

    cartsData[index].Item = cartsData[index].Item + 1;
    
    let indexCartdata=cartsData[index].Price* cartsData[index].Item;
    // setItem(cartsData[index].Item);
    itemPrice=indexCartdata;
    console.log('itemPrice', itemPrice);
    All_Price=All_Price+ itemPrice
    setItems(items+itemPrice)

    dispatch(updatedCarts());
  };
  const handleDelete=(id)=>{
    dispatch(DeleteTheData(id))
  }
  return (
    <>
      {/* header for cart   */}
      <div className={Styles.Cart_mainContainerheader}>
        <div className={Styles.Cart_mainContainerheadercild}>
          <div className={Styles.Cart_mainContainerheadeleft}>
            Price:{All_Price + itemPrice}
          </div>
          <div className={Styles.Cart_mainContainerheadeleft}>
            cart : {cartsData.length}
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* map data */}
      {cartsData.map((e) => {
        return (
          <div className={Styles.Cart_mainContainer}>
            <div className={Styles.Cart_sub_mainContainer}>
              <div className={Styles.Cart_sub_mainContainerfirst}>
                <img
                  className={Styles.Cart_sub_mainContainerfirstImage}
                  src={e.Image_url}
                  alt=""
                />
              </div>
              <div className={Styles.Cart_sub_mainContainersecond}>
                <span>{e.Brand}</span>
                <span>{e.Size}</span>
              </div>
              <div className={Styles.Cart_sub_mainContainerthird}>
                <button onClick={() => handleQuantityDec(e.id)}>-</button>
                <p>{e.Item}</p>
                <button onClick={() => handleQuantityInc(e.id)}>+</button>
              </div>
              <div className={Styles.Cart_sub_mainContainerfourth}>
                <button onClick={()=>handleDelete(e.id)}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
      <br></br>
      <br></br>
      <div className={Styles.checkout_box_container}>
        <button
          className={Styles.checkout_btn}
          onClick={() => navigate("/checkout")}
        >
          CHECKOUT
        </button>
      </div>{" "}
    </>
  );
}
