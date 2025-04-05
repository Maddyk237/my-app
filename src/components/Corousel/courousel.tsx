import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./carousel.css";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {images.map((imgSrc, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              className="d-block w-100"
              src={imgSrc}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

// Example usage:
const images: string[] = [
  "https://w0.peakpx.com/wallpaper/922/892/HD-wallpaper-maldives-beach-scenery-13.jpg",
  "https://i.pinimg.com/736x/e3/30/48/e33048701bff67a2467390969212ba6f.jpg",
  "https://c4.wallpaperflare.com/wallpaper/811/217/233/amsterdam-canal-sunset-houses-wallpaper-preview.jpg",
];

export default function App() {
  return <Carousel images={images} />;
}
