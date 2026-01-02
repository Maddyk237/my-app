import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./css/TripBooking.module.css";
import Navbar from "../../components/Navbar/navbar";
import api from "../../services/api";

function TripBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, image, title, subtitle, description, price } =
    location.state || {};

  const [travelDate, setTravelDate] = useState("");
  const [persons, setPersons] = useState(1);
  const [travellers, setTravellers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Generate traveller inputs dynamically
  useEffect(() => {
    const updatedTravellers = Array.from({ length: persons }, (_, i) => ({
      name: "",
      age: "",
      phone: "",
    }));
    setTravellers(updatedTravellers);
  }, [persons]);

  const handleTravellerChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const updated = [...travellers];
    updated[index][field] = value;
    setTravellers(updated);
  };

  const handleBooking = async () => {
    if (!travelDate) {
      alert("Please select travel date");
      return;
    }

    for (const t of travellers) {
      if (!t.name || !t.age || !t.phone) {
        alert("Please fill all traveller details");
        return;
      }
    }

    try {
      setLoading(true);

      const res = await api.post("/bookings", {
        packageId: id,
        travelDate,
        travellers,
      });
      const bookingId = res.data.booking._id;

      alert("🎉 Booking successful!");
      navigate(`/booking-success/${bookingId}`);
    } catch (error: any) {
      alert(error.response?.data?.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  if (!id) return <p>No trip details found</p>;

  return (
    <>
      <Navbar />

      <div className={styles.detailsContainer}>
        <h2>{title}</h2>
        <h4>{subtitle}</h4>

        <img src={image} alt={title} className={styles.bannerImage} />

        <p>{description}</p>
        <p className={styles.price}>₹{price} per person</p>

        {/* BOOKING FORM */}
        <div className={styles.bookingForm}>
          <label>Travel Date</label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
          />

          <label>No. of Travellers</label>
          <input
            type="number"
            min={1}
            value={persons}
            onChange={(e) => setPersons(Number(e.target.value))}
          />

          <h3>Traveller Details</h3>

          {travellers.map((traveller, index) => (
            <div key={index} className={styles.travellerCard}>
              <h4>Traveller {index + 1}</h4>

              <input
                placeholder="Full Name"
                value={traveller.name}
                onChange={(e) =>
                  handleTravellerChange(index, "name", e.target.value)
                }
              />

              <input
                type="number"
                placeholder="Age"
                value={traveller.age}
                onChange={(e) =>
                  handleTravellerChange(index, "age", e.target.value)
                }
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={traveller.phone}
                onChange={(e) =>
                  handleTravellerChange(index, "phone", e.target.value)
                }
              />
            </div>
          ))}

          <button
            onClick={handleBooking}
            disabled={loading}
            className={styles.bookBtn}
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </div>
      </div>
    </>
  );
}

export default TripBooking;
