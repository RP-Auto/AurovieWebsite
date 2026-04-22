// src/pages/Landing/sections/HomeSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

// Ensure the path is correct based on your project structure
import Home_bg from '../../assets/img/Home_bg_Aurovie.webp';

const HomeSection = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Added smooth scrolling
  };

  return (
    <section className={styles.hero}>
      
      {/* Optimized Image Background */}
      <div className={styles.imageBackground}>
        <img 
          src={Home_bg} 
          className={styles.bgImage} 
          alt="Abstract representation of precision medicine" 
          loading="eager" // Prioritize loading for above-the-fold hero images
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Revolutionizing Healthcare Through Precision Medicine
        </h1>
        <p className={styles.subtitle}>
          Discovering and developing innovative solutions for Cancer, Diabetes, and Neurodegenerative Diseases.
        </p>
        
        <div>
          <button
            onClick={handleRedirect}
            className={styles.ctaButton}
            aria-label="Navigate to contact page"
          >
            Contact Us
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default HomeSection;