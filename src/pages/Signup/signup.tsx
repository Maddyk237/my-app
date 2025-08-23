import React, { useState } from "react";
import styles from "./css/signup.module.css";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    const fullUser = {
      name: `${user.fname} ${user.lname}`,
      email: user.email,
      password: user.password,
    };

    localStorage.setItem("user", JSON.stringify(fullUser));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className={styles.signuppage}>
        <video
          className={styles.videoBackground}
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/3640406/3640406-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}>
          <form className={styles.login} onSubmit={handleSignup}>
            <h2 className={styles.header}>Sign Up</h2>
            <div className={styles.labeltextarea}>
              <label htmlFor="fname">F Name:</label>
              <input
                type="text"
                id="fname"
                required
                onChange={(e) => setUser({ ...user, fname: e.target.value })}
              />
              <br />

              <label htmlFor="lname">L Name:</label>
              <input
                type="text"
                id="lname"
                required
                onChange={(e) => setUser({ ...user, lname: e.target.value })}
              />
              <br />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <br />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                required
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <br />

              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
