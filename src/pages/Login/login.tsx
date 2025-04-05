import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./css/login.module.css";
import Navbar from "../../components/Navbar/navbar";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <Navbar />
      <div>
        <div>
          <h2 className={styles.loginlabel}>Login !!</h2>
          <hr className={styles.hrrule} />
        </div>
        <div className={styles.loginform}>
          <label htmlFor="username" style={{ marginLeft: "-10px" }}>
            U Name :
          </label>
          <input type="text" id="username" style={{ marginLeft: "15px" }} />
          <br />
          <label htmlFor="password">Password :</label>
          <div style={{ position: "relative", display: "inline-block" }}>
            <input type={passwordVisible ? "text" : "password"} id="password" />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.eyeicon}
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <br />
          <button className={styles.loginbutton}>Log In</button>
        </div>
      </div>
    </>
  );
}

export default Login;
