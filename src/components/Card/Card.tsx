import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import styles from "./css/card.module.css";
import { useNavigate } from "react-router-dom";

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
}

const CardComponent: React.FC<CardProps> = ({
  image,
  title,
  subtitle,
  description,
  price,
}) => {
  const navigate = useNavigate();
  const header = (
    <img
      alt={title}
      src={image}
      style={{ width: "100%", height: "200px", objectFit: "cover" }}
    />
  );

  const footer = (
    <div className="flex justify-content-between gap-2 mt-3">
      <Button
        label="Learn More"
        icon="pi pi-info-circle"
        className="p-button-outlined"
      />
      <Button
        label="Book Now"
        icon="pi pi-check"
        onClick={() => {
          navigate("/services/booking", {
            state: {
              image,
              title,
              subtitle,
              description,
              price,
            },
          });
        }}
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
