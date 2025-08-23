import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import styles from "./css/loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loaderText}>Please wait...</div>
      <ProgressSpinner
        style={{ width: "70px", height: "70px" }}
        strokeWidth="5"
        animationDuration=".8s"
      />
    </div>
  );
};

export default Loader;
