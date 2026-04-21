// src/pages/Landing/sections/HomeSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

import Home_bg from '../../assets/img/Home_bg_Aurovie.webp';

const HomeSection = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contact");
    window.scrollTo(0, 0); 
  };

  return (
    <section className={styles.hero}>
      
      {/* Optimized Video Background */}
      <div className={styles.videoBackground}>
        <img 
          src={Home_bg} 
          className={styles.videoElement} 
          alt="Background" 
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          Revolutionizing Healthcare Through Precision Medicine
        </h1>
        <p className={styles.subtitle}>
          Discovering and Developing Innovative Solutions for Cancer, Diabetes, and Neurodegenerative Diseases.
        </p>
        
        <div>
          <button
            onClick={handleRedirect}
            className={styles.ctaButton}
          >
            Contact Us
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default HomeSection;