import React, { useState } from "react";
import axios from "axios";
import Styles from "../../Styles/StylesProduct.module.css";
import { Link } from "react-router-dom";

export default function RegisterLogin() {
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });

// ================================================================================================================================
// loggg
 

  // const [logout, setLogout] = useState(false);

  // const logoutUser = () => {
  // //     const token = JSON.parse(localStorage.getItem("token"));
  // // console.log("token", token);
  //   localStorage.removeItem("token");
  //   setLogout(true);
  // };
// ==========================================================================================================================
  const handleRegister = (e) => {   
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    user.email != "" && user.password != "" && user.role != "" ? (
      setToggle(false)
    ) : (
      <></>
    );

    console.log("user", user);
  };
  const handleregisterSubmit = () => {
    axios.post("http://localhost:5000/register", user).then((res) => {
      console.log(res.data.token.split(".")[0]);
      // localStorage.setItem("token", JSON.stringify(res.data.token.split(".")[0]));==========log
      // setLogout(false);------------log
    });
  };
  return (
    <div className={Styles.login_container}>
    <h1>Register/Sign Up</h1>
    <div className={Styles.login_input}>
      <input
        className={Styles.inputBox}
        type="text"
        placeholder="Enter email here."
        name="email"
        onChange={handleRegister}
      />
      <input
        className={Styles.inputBox}
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleRegister}
      />
      <input
        className={Styles.inputBox}
        type="text"
        placeholder="role"
        name="role"
        onChange={handleRegister}
      />
      <div className={Styles.login_btn}>
        <Link to="/login">
          <button
            className={Styles.submit}
            type="submit"
            onClick={handleregisterSubmit}
            disabled={toggle}
          >
            Register
          </button>
        </Link>
      </div>
      <br />
      <div className={Styles.login_btn}>
        <Link to="/login" className={Styles.link_btn}>
          {" "}
          Already a user? Click here
          <button
            className={Styles.submits}
            type="submit"
            onClick={handleregisterSubmit}
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  </div>
  );
}
// http://localhost:5000/login
