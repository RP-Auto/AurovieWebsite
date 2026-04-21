// src/pages/Landing/sections/AboutSection.jsx
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./AboutSection.module.css";
import AboutusVideo from "../../assets/img/Home_bg_Aurovie2.webp";

const AboutSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className={styles.section}>
      
      {/* Left side - Content */}
      <div className={styles.contentWrapper}>
        <h2 className={styles.sectionTitle}>
          About Us
        </h2>
        
        <div className={styles.highlightCard} data-aos="fade-right">
          <span className={styles.cardHeading}>AuroVie Life Science</span>
          <p className={styles.cardText}>
            Aimed to become a leader in precision medicine by discovering, developing, and commercializing innovative therapeutic solutions, medical devices, and diagnostic tools that target metabolic pathways implicated in cancer, diabetes, and neurodegenerative diseases.
          </p>
        </div>

        <div className={styles.highlightCard} data-aos="fade-left">
          <span className={styles.cardHeading}>Our Approach</span>
          <p className={styles.cardText}>
            The company leveraged advanced biotechnology, artificial intelligence (AI), machine learning (ML), and hardware-software integration, combined with nanotechnology, to unlock the complexities of these diseases. This enabled early detection, accurate diagnosis, and personalized treatment regimens.
          </p>
        </div>

        <div className={styles.highlightCard} data-aos="fade-up">
          <span className={styles.cardHeading}>Core Values</span>
          <p className={styles.cardText}>
            AuroVie Life Science sought to improve patient outcomes, reduce healthcare costs, and enhance the quality of life for individuals affected by cancer, diabetes, and neurodegenerative diseases.
          </p>
        </div>
      </div>

      {/* Right side - Video */}
      <div className={styles.mediaWrapper} data-aos="fade-up">
        <img 
          src={AboutusVideo} 
          className={styles.videoElement} 
          alt="Background" 
        />
      </div>
      
    </section>
  );
};

export default AboutSection;