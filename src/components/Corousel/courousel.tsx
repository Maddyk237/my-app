import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./carousel.css";
import { useNavigate } from "react-router-dom";

interface CarouselProps {
  images: {
    src: string;
    name: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const navigate = useNavigate();
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{ position: "relative" }}
          >
            <img className="d-block w-100" src={item.src} alt={item.name} />
            <button
              className="carousel-text"
              // onClick={() => navigate(`/details/${item.name.toLowerCase()}`)}
              onClick={() => navigate(`/services`)}
            >
              Visit {item.name}
            </button>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
      </button>
    </div>
  );
};

const imgData = [
  {
    src: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg",
    name: "Maldives",
  },
  {
    src: "https://images.pexels.com/photos/2711640/pexels-photo-2711640.jpeg",
    name: "Bali",
  },
  {
    src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg",
    name: "Singapore",
  },
];

export default function App() {
  return <Carousel images={imgData} />;
}
