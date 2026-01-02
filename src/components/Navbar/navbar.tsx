import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
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
            <Link to={"/services"}>Plan a Trip</Link>
          </li>
          {/* <li>
            <Link to={"/test"}>Test</Link>
          </li> */}
          {user &&
            (user?.role === "admin" ? (
              <li>
                <Link to="/admin/bookings">Trips</Link>
              </li>
            ) : (
              <li>
                <Link to={"/my-trips"}>My Trips</Link>
              </li>
            ))}
        </ul>
      </div>
      <div className={styles.navdiv3}>
        <ul className={styles.navList}>
          {user ? (
            <>
              {user?.role === "admin" && (
                <li>
                  <button
                    onClick={() => navigate("/addPackage")}
                    className={styles.addPackageBtn}
                  >
                    + Add Package
                  </button>
                </li>
              )}

              <li className={styles.welcomeText}>
                Hello, {user.name || user.email}
              </li>

              <li>
                <button onClick={handleLogout} className={styles.logoutBtn}>
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
