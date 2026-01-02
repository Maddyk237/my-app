import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import api from "../../services/api";
import styles from "./css/MyTrips.module.css";

function MyTrips() {
  const [trips, setTrips] = useState<any[]>([]);

  useEffect(() => {
    api.get("/bookings/user/me").then((res) => {
      setTrips(res.data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>🧳 My Upcoming Trips</h2>

        {trips.length === 0 && <p>No bookings found</p>}

        {trips.map((trip) => (
          <div key={trip._id} className={styles.tripCard}>
            <img src={trip.package.imageUrl} alt="" />
            <div>
              <h3>{trip.package.title}</h3>
              <p>{trip.package.location}</p>
              <p>Travel Date: {new Date(trip.travelDate).toDateString()}</p>
              <p>Status: {trip.status}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyTrips;
