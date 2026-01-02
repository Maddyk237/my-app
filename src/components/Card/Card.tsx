import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import styles from "./css/card.module.css";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

interface CardProps {
  id?: any;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
}

const CardComponent: React.FC<CardProps> = ({
  id,
  image,
  title,
  subtitle,
  description,
  price,
}) => {
  const navigate = useNavigate();
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const header = (
    <img
      alt={title}
      src={image}
      style={{ width: "100%", height: "200px", objectFit: "cover" }}
    />
  );

  const loginNavigation = () => {
    if (!user) {
      alert("Please login to book this package");
      navigate("/login");
      return;
    }
    navigate("/services/booking", {
      state: {
        id,
        image,
        title,
        subtitle,
        description,
        price,
      },
    });
  };
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this package?"))
      return;

    try {
      await api.delete(`/packages/${id}`);
      alert("Package deleted successfully");
      window.location.reload();
    } catch (error) {
      alert("Failed to delete package");
    }
  };

  const footer = (
    <div className="flex justify-content-between gap-2 mt-3">
      <Button
        label={user?.role === "admin" ? "Update Package" : "Learn More"}
        icon="pi pi-info-circle"
        className="p-button-outlined"
        onClick={
          user?.role === "admin"
            ? () => navigate(`/editPackage/${id}`)
            : loginNavigation
        }
      />
      <Button
        label={user?.role === "admin" ? "Delete Package" : "Book Now"}
        icon="pi pi-check"
        onClick={user?.role === "admin" ? handleDelete : loginNavigation}
      />
    </div>
  );

  return (
    <div className={styles.cardDiv}>
      <Card
        title={title}
        subTitle={subtitle}
        header={header}
        footer={footer}
        className="p-3"
      >
        <p style={{ lineHeight: "1.6", fontSize: "1rem", color: "#333" }}>
          {description}
        </p>
        <p style={{ fontWeight: "bold", color: "#ff7700", fontSize: "1.1rem" }}>
          ₹{price} onwards!
        </p>
      </Card>
    </div>
  );
};

export default CardComponent;
