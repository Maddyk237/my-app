import React, { useEffect, useState } from "react";
import CardComponent from "../../components/Card/Card";
import styles from "./css/services.module.css";
import Navbar from "../../components/Navbar/navbar";
import Loader from "../../components/Loader/Loader";

function Services() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const cardData = [
    {
      image:
        "https://w0.peakpx.com/wallpaper/922/892/HD-wallpaper-maldives-beach-scenery-13.jpg",
      title: "Maldives",
      subtitle: "Tropical Paradise",
      description:
        "Relax on white sand beaches with crystal-clear waters and sunset views.",
      price: "50,000",
    },
    {
      image:
        "https://i.pinimg.com/736x/e3/30/48/e33048701bff67a2467390969212ba6f.jpg",
      title: "Singapore",
      subtitle: "Urban Adventure",
      description:
        "A vibrant city with iconic architecture, nightlife, and nature experiences.",
      price: "75,000",
    },
    {
      image:
        "https://c4.wallpaperflare.com/wallpaper/811/217/233/amsterdam-canal-sunset-houses-wallpaper-preview.jpg",
      title: "Bali",
      subtitle: "Island of Gods",
      description:
        "Explore temples, rice terraces, and beaches rich in culture and beauty.",
      price: "40,000",
    },
    {
      image:
        "https://images.pexels.com/photos/2779863/pexels-photo-2779863.jpeg",
      title: "Switzerland",
      subtitle: "Alpine Wonder",
      description:
        "Snowy peaks, lakes, and chocolate await in this scenic European country.",
      price: "1,50,000",
    },
    {
      image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
      title: "Paris",
      subtitle: "City of Lights",
      description:
        "Home to the Eiffel Tower, cafés, art, and romance in every corner.",
      price: "2,50,000",
    },
    {
      image:
        "https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg",
      title: "New York",
      subtitle: "The Big Apple",
      description:
        "Iconic skyscrapers, Broadway shows, and Central Park in a bustling city.",
      price: "2,00,000",
    },
    {
      image: "https://images.unsplash.com/photo-1584395630827-860eee694d7b",
      title: "Norway",
      subtitle: "Land of Fjords",
      description:
        "Witness the Northern Lights and cruise through majestic fjords.",
      price: "2,50,000",
    },
    {
      image:
        "https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg",
      title: "Tokyo",
      subtitle: "Neon Metropolis",
      description:
        "A fusion of cutting-edge tech, ancient shrines, and sushi excellence.",
      price: "1,50,000",
    },
    {
      image: "https://images.pexels.com/photos/221532/pexels-photo-221532.jpeg",
      title: "Santorini",
      subtitle: "Greek Gem",
      description:
        "Famous for whitewashed houses, blue domes, and Aegean sunsets.",
      price: "2,75,000",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.header}>Services</div>
      {loading ? (
        <Loader />
      ) : (
        <div className="d-flex flex-wrap justify-content-center m-4">
          {cardData.map((data, index) => (
            <CardComponent
              key={index}
              image={data.image}
              title={data.title}
              subtitle={data.subtitle}
              description={data.description}
              price={data.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Services;
