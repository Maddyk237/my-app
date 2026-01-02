import React, { useState } from "react";
import styles from "./css/signup.module.css";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name: `${user.fname} ${user.lname}`,
        email: user.email,
        password: user.password,
      });

      alert("Signup successful!");
      navigate("/login");
    } catch (error: any) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.signuppage}>
        <div className={styles.overlay}>
          <form className={styles.login} onSubmit={handleSignup}>
            <h2 className={styles.header}>Sign Up</h2>

            <label>First Name</label>
            <input
              required
              onChange={(e) => setUser({ ...user, fname: e.target.value })}
            />

            <label>Last Name</label>
            <input
              required
              onChange={(e) => setUser({ ...user, lname: e.target.value })}
            />

            <label>Email</label>
            <input
              type="email"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />

            <label>Password</label>
            <input
              type="password"
              required
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
