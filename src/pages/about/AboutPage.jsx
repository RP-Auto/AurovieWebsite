// src/pages/About/AboutPage.jsx
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./About.module.css";

const AboutPage = () => {
  // Always scroll to top when navigating to this new page
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className={styles.pageWrapper}>
      
      {/* Background Glowing Orbs */}
      <div className={`${styles.bgGlow} ${styles.glowPink}`}></div>
      <div className={`${styles.bgGlow} ${styles.glowBlue}`}></div>

      <div className={styles.container}>
        
        {/* Hero Section */}
        <div className={styles.hero} data-aos="fade-up">
          <h1 className={styles.title}>Decoding Biology. Engineering Health.</h1>
          <p className={styles.subtitle}>
            AuroVie Life Science is at the frontier of precision medicine, dedicated to unlocking the complexities of cancer, diabetes, and neurodegenerative diseases.
          </p>
        </div>

        {/* Mission Split Section */}
        <div className={styles.missionSection}>
          <div className={styles.missionImageWrapper} data-aos="fade-right">
            {/* Tech/Lab Placeholder Image - Swap with your own asset if needed */}
            <img 
              src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1000" 
              alt="Advanced Laboratory Technology" 
              className={styles.missionImage} 
              loading="lazy"
            />
          </div>
          
          <div className={styles.missionContent} data-aos="fade-left" data-aos-delay="100">
            <h2 className={styles.heading}>Our Mission</h2>
            <p className={styles.paragraph}>
              We aim to become a global leader in precision medicine by discovering, developing, and commercializing innovative therapeutic solutions, medical devices, and diagnostic tools. 
            </p>
            <p className={styles.paragraph}>
              Our focus is strictly locked on targeting metabolic pathways implicated in some of humanity's most challenging conditions: cancer, diabetes, and neurodegenerative diseases. By integrating traditional medicine principles with cutting-edge biosensors, we are redefining what is possible in patient care.
            </p>
          </div>
        </div>

        {/* Core Pillars Section */}
        <div className={styles.pillarsHeader} data-aos="fade-up">
          <h2 className={styles.heading}>Our Approach & Values</h2>
        </div>

        <div className={styles.grid}>
          {/* Pillar 1 */}
          <div className={styles.glassCard} data-aos="fade-up" data-aos-delay="0">
            <div className={styles.iconWrapper}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Advanced Technology</h3>
            <p className={styles.cardText}>
              We leverage advanced biotechnology, artificial intelligence (AI), machine learning (ML), and hardware-software integration to process unprecedented amounts of biological data.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className={styles.glassCard} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.iconWrapper}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Nanotechnology</h3>
            <p className={styles.cardText}>
              By combining AI with deep nanotechnology integration, we unlock the complexities of cellular diseases. This enables early detection, accurate diagnosis, and personalized treatment regimens.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className={styles.glassCard} data-aos="fade-up" data-aos-delay="200">
            <div className={styles.iconWrapper}>
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>Patient Outcomes</h3>
            <p className={styles.cardText}>
              AuroVie's core value is simple: improve patient outcomes, radically reduce healthcare costs, and fundamentally enhance the quality of life for individuals affected by severe illnesses.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;