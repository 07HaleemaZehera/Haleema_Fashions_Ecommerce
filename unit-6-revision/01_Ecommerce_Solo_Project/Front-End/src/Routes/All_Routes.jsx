import React from "react";
import { Routes, Route, Link, Navigate ,useLocation} from "react-router-dom";
import HomePage from "../Components/Home/HomePage";
import Mens from "../Components/Products/Mens";
import Not_Found from "../Components/Not_Found";
import Kids from "../Components/Products/Kids";
import Womens from "../Components/Products/Womens";
import Products from "../Components/Products/Products";
import ProductDetails from "../Components/Products/ProductDetails";
import CartPage from "../Components/Cart/CartPage";
import CheckoutPage from "../Components/Checkout/CheckoutPage";
import PaymentForm from "../Components/Checkout/PaymentForm";
import Review from "../Components/Checkout/Review";
import AdressForm from "../Components/Checkout/AdressForm";
import RegisterLogin from "../Components/Login/RegisterLogin";
import Login from "../Components/Login/Login";

const All_Routes = () => {
  let location = useLocation();
  const isAuth = "abc";
  const PrivateRouteBuy = ({ isAuth, children }) => {
    return isAuth == "" ? (
      <Navigate to="/registerlogin" state={{ from: location }} replace />
    ) : (
      children
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/registerlogin" element={<RegisterLogin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/*" element={<Not_Found />}></Route>
        <Route path="/product/men" element={<Mens />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/product/women" element={<Womens />}></Route>
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/checkoutform" element={<CheckoutPage />}></Route>
        <Route
          path="/checkout"
          element={
            <PrivateRouteBuy isAuth={isAuth}>
              {" "}
              <AdressForm />
            </PrivateRouteBuy>
          }
        ></Route>
        <Route path="/paymentform" element={<PaymentForm />}></Route>
        <Route path="/review" element={<Review />}></Route>
      </Routes>
    </div>
  );
};

export default All_Routes;
