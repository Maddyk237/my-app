import React from "react";
import styles from "./css/signup.module.css";
import Navbar from "../../components/Navbar/navbar";

function Signup() {
  return (
    <>
      <Navbar />
      <div className={styles.signuppage}>
        <div className={styles.signuptext}>
          <h2>Sign Up</h2>
          <hr className={styles.hrrule} />
        </div>
        <div className={styles.labeltextarea}>
          <label htmlFor="" className="">
            F Name :
          </label>
          <input type="text" style={{ marginLeft: "20px" }} />
          <br />
          <label htmlFor="" className="">
            L Name :
          </label>
          <input
            type="text"
            style={{ marginLeft: "20px", marginTop: "20px" }}
          />
          <br />
          <label htmlFor="" className="">
            Password :
          </label>
          <input
            type="password"
            style={{ marginLeft: "9px", marginTop: "20px" }}
          />
          <br />
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Signup;
