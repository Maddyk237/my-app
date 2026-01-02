import React, { useEffect, useState } from "react";
import CardComponent from "../../components/Card/Card";
import styles from "./css/services.module.css";
import Navbar from "../../components/Navbar/navbar";
import Loader from "../../components/Loader/Loader";
import api from "../../services/api";

function Services() {
  const [loading, setLoading] = useState(true);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    api
      .get("/packages")
      .then((res) => {
        setPackages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching packages", err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.header}>Plan a Trip with Us !!</div>

      {loading ? (
        <Loader />
      ) : (
        <div className="d-flex flex-wrap justify-content-center m-4">
          {packages.map((pkg: any) => (
            <CardComponent
              key={pkg._id}
              id={pkg._id}
              image={pkg.imageUrl}
              title={pkg.title}
              subtitle={pkg.location}
              description={pkg.description}
              price={pkg.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Services;
