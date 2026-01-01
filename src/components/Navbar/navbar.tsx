import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setUserName(user.name || user.email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUserName("");
    navigate("/");
  };

  return (
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
          <li>
            <Link to={"/test"}>Test</Link>
          </li>
        </ul>
      </div>
      <div className={styles.navdiv3}>
        <ul>
          {userName ? (
            <>
              <li style={{ color: "white", fontWeight: "bold" }}>
                Welcome, {userName}
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                    marginLeft: "10px",
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/signup"}>Sign Up</Link>
              </li>
              <li>
                <Link to={"/login"}>Log In</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
