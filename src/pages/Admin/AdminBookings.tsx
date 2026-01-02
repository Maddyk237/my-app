import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Navbar from "../../components/Navbar/navbar";
import styles from "./css/AdminBookings.module.css";

function AdminBookings() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await api.get("/bookings/admin/all");
      setBookings(res.data);
    } catch (error) {
      alert("Access denied or error fetching bookings");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>📋 All Trip Bookings</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Package</th>
              <th>Location</th>
              <th>Travel Date</th>
              <th>Travellers</th>
              <th>Status</th>
              <th>Booked On</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td>{b.user?.name}</td>
                <td>{b.user?.email}</td>
                <td>{b.package?.title}</td>
                <td>{b.package?.location}</td>
                <td>{new Date(b.travelDate).toLocaleDateString()}</td>
                <td>{b.travellers.length}</td>
                <td>{b.status}</td>
                <td>{new Date(b.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminBookings;
