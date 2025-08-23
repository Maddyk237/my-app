import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./css/login.module.css";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      if (email === parsedUser.email && password === parsedUser.password) {
        // Save logged-in state
        localStorage.setItem("loggedInUser", JSON.stringify(parsedUser));
        alert("Login successful!");
        navigate("/");
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("No user found. Please sign up first.");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.loginpage}>
        <div className={styles.videoBackground}>
          <video autoPlay loop muted playsInline>
            <source
              src="https://videos.pexels.com/video-files/3877441/3877441-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className={styles.loginform}>
          <h2 className={styles.loginlabel}>Login !!</h2>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          <label htmlFor="password">Password:</label>
          <div style={{ position: "relative", display: "inline-block" }}>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.eyeicon}
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>
          <br />

          <button className={styles.loginbutton} onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
