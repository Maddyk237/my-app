import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/navbar";
import api from "../../services/api";
import styles from "./css/BookingSuccess.module.css";

function BookingSuccess() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    api.get(`/bookings/${bookingId}`).then((res) => {
      setBooking(res.data);
    });
  }, [bookingId]);

  if (!booking) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>🎉 Booking Confirmed</h2>

        <div className={styles.card}>
          <h3>{booking.package.title}</h3>
          <p>{booking.package.location}</p>

          <p>
            <strong>Travel Date:</strong>{" "}
            {new Date(booking.travelDate).toDateString()}
          </p>
          <p>
            <strong>Status:</strong> {booking.status}
          </p>

          <h4>Travellers</h4>
          {booking.travellers.map((t: any, i: number) => (
            <div key={i} className={styles.traveller}>
              <p>
                {t.name} | Age: {t.age} | {t.phone}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BookingSuccess;
