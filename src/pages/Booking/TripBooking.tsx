import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./css/TripBooking.module.css";
import Navbar from "../../components/Navbar/navbar";

function TripBooking() {
  const location = useLocation();
  const { image, title, subtitle, description } = location.state || {};

  if (!image) {
    return <div>No trip details provided.</div>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.detailsContainer}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
        />
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>{description}</p>
      </div>
    </>
  );
}

export default TripBooking;
