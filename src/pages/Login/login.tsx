import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./css/login.module.css";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful!");
      navigate("/");
    } catch (error: any) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.loginpage}>
        <div className={styles.loginform}>
          <h2>Login</h2>

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <button onClick={handleLogin}>Log In</button>
        </div>
      </div>
    </>
  );
}

export default Login;
