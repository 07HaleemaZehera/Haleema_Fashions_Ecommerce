import React, { useState } from "react";
import axios from "axios";
import Styles from "../../Styles/StylesProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loginToken } from "../../Redux/Actions/LoginAction";
import { Link } from "react-router-dom";

export default function Login() {
  const get_token=useSelector((state)=>state.tokenLogin.token)
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });
  const handleLogin = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    console.log("user", user);
  };
  const handleLoginSubmit = () => {
    axios.post("http://localhost:5000/login", user).then((res) => {
      // console.log();
      localStorage.setItem("token",JSON.stringify(res.data.token.split(".")[0]))
      // localStorage.getItem()
      // dispatch(loginToken(res.data.token.split(".")[0]));
    });

  };
  return (
    <div className={Styles.login_container}>
      <h1>Login</h1>
      <div className={Styles.login_input}>
        <input
          className={Styles.inputBox}
          type="text"
          placeholder="Enter email here."
          name="email"
          onChange={handleLogin}
        />
        <input
          className={Styles.inputBox}
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleLogin}
        />
        <input
          className={Styles.inputBox}
          type="text"
          placeholder="role"
          name="role"
          onChange={handleLogin}
        />
        <div className={Styles.login_btn}>
         <Link to="/">
         <button
         
            className={Styles.submit}
            type="submit"
            onClick={handleLoginSubmit}
            
          >
            Login
          </button>
         </Link>
        </div>
      </div>
    </div>
  );
}
// http://localhost:5000/login


