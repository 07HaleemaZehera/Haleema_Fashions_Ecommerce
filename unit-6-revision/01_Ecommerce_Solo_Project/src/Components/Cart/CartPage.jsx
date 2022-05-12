import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatedCarts } from "../../Redux/Actions/actionProducts";
import Styles from "../../Styles/StylesProduct.module.css";
export default function CartPage() {
  const dispatch = useDispatch();
  const [items, setItem] = useState(1);
  const cartsData = useSelector((state) => state.products.cart);
  console.log("cartsData", cartsData);
  useEffect(() => {}, []);
  const handleQuantityDec = (id) => {
    let index = cartsData.findIndex((ele) => ele.id == id);

    (cartsData[index].Item = cartsData[index].Item - 1);
    setItem(cartsData[index].Item);

    dispatch(updatedCarts(cartsData));
  };

  const handleQuantityInc = (id) => {
    let index = cartsData.findIndex((ele) => ele.id == id);

 (cartsData[index].Item = cartsData[index].Item + 1);
    setItem(cartsData[index].Item);

    dispatch(updatedCarts(cartsData));
  };
  return (
    <>
      {/* header for cart   */}
      <div className={Styles.Cart_mainContainerheader}>
        <div className={Styles.Cart_mainContainerheadercild}>
          <div className={Styles.Cart_mainContainerheadeleft}>Price: 0</div>
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
                <p>{items}</p>
                <button onClick={() => handleQuantityInc(e.id)}>+</button>
              </div>
              <div className={Styles.Cart_sub_mainContainerfourth}>
                <button>Delete</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}