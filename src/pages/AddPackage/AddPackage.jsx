import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Navbar from "../../components/Navbar/navbar";
import styles from "./css/addPackage.module.css";

function AddPackage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/packages", form, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      alert("Package added successfully");
      navigate("/services");
    } catch (error) {
      alert("Failed to add package");
    }
  };

  return (
    <>
      <Navbar />

      <div className={styles.page}>
        <form className={styles.formCard} onSubmit={handleSubmit}>
          <h2>Add Tour Package</h2>

          <input
            name="title"
            placeholder="Package Title"
            onChange={handleChange}
            required
          />

          <input
            name="location"
            placeholder="Location / Subtitle"
            onChange={handleChange}
            required
          />

          <input
            name="price"
            type="number"
            placeholder="Price (₹)"
            onChange={handleChange}
            required
          />

          <input
            name="imageUrl"
            placeholder="Image URL"
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Package Description"
            rows="4"
            onChange={handleChange}
            required
          />

          <button type="submit">Add Package</button>
        </form>
      </div>
    </>
  );
}

export default AddPackage;
