import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import styles from "./css/editPackage.module.css";
import Navbar from "../../components/Navbar/navbar";

const EditPackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    location: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchPackage = async () => {
      const res = await api.get(`/packages/${id}`);
      setForm(res.data);
    };

    fetchPackage();
  }, [id]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await api.put(`/packages/${id}`, form);
    alert("Package updated successfully ✅");
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>Update Tour Package</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Location</label>
              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Price (₹)</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Image URL</label>
              <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.updateBtn}>
                Update
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className={styles.cancelBtn}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPackage;
