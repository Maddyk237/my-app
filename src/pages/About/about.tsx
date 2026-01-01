import React from "react";
import Navbar from "../../components/Navbar/navbar";
import styles from "./about.module.css";

function About() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={styles.bgImg}>
        <div className={styles.innerDiv}>
          <span className={styles.header}>ABOUT US</span>
          <p className={styles.aboutInfo}>
            At Dream Holidays, your perfect trip begins with the right
            conversation! We’d love to hear from you! Whether you’re planning
            your next getaway, need assistance with bookings, or have questions
            about our travel services, our team is here to help. Reach out to us
            anytime via phone or email, and we’ll make sure your journey is
            smooth and stress-free. You can also visit our office for
            personalized travel guidance 🌍✨ <br />
          </p>
          <span className={styles.contactInfo}>
            📞 Phone: +91 98765 43210 | 📧 Email: support@dreamholidays.com | 📍
            Address: 2nd Floor, Sunshine Plaza, Pune, Maharashtra
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
