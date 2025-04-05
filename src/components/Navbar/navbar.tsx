import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navdiv1}>
          <h3>Dream Holidays</h3>
        </div>
        <div className={styles.navdiv2}>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
          </ul>
        </div>
        <div className={styles.navdiv3}>
          <ul>
            <li>
              <Link to={"/signup"}>Sign Up</Link>
            </li>
            <li>
              <Link to={"/login"}>Log In</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
