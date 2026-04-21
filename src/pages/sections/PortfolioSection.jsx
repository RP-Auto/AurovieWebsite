// src/pages/Landing/sections/PortfolioSection.jsx
import React, { useRef, useEffect, useState } from "react";
import styles from "./Portfolio.module.css";

// Import Media
import SynergyVideo from "../../assets/img/Cancer,Diabetes_and_Neurodegenerative_Disease_Synergy.webp";
import BiosensorImg from "../../assets/img/Biosensor_Development.webp";
import NanoVideo from "../../assets/img/Nanotechnology_Integration.webp";
import ClinicalImg from "../../assets/img/Clinical_Decision_Support.webp";
import MedicalDeviceVideo from "../../assets/img/Medical_Device_Development.webp";

// 1. Base Data
const basePortfolioData = [
  {
    category: "Synergy",
    title: "Cancer, Diabetes, and Neurodegenerative Synergy",
    mediaType: "image",
    mediaSrc: SynergyVideo,
    items: [
      "Understand the interconnections between these diseases.",
      "Develop therapeutic strategies addressing multiple diseases.",
      "Identify shared metabolic vulnerabilities for drug development."
    ]
  },
  {
    category: "Hardware & Software",
    title: "Biosensor Development",
    mediaType: "image",
    mediaSrc: BiosensorImg,
    items: [
      "Develop advanced biosensors for accurate and sensitive detection.",
      "Utilize hardware-software integration for data analysis.",
      "Create miniaturized and portable biosensors for point-of-care."
    ]
  },
  {
    category: "Nanomaterials",
    title: "Nanotechnology Integration",
    mediaType: "image",
    mediaSrc: NanoVideo,
    items: [
      "Develop nanomaterials and nanostructures for drug delivery.",
      "Explore nanotechnology applications in treating diseases."
    ]
  },
  {
    category: "AI & Analytics",
    title: "Clinical Decision Support",
    mediaType: "image",
    mediaSrc: ClinicalImg,
    items: [
      "Build AI-powered platforms to assist healthcare providers.",
      "Provide real-time data analytics and predictive modelling.",
      "Develop tools for patient risk stratification."
    ]
  },
  {
    category: "Hardware",
    title: "Medical Device Development",
    mediaType: "image",
    mediaSrc: MedicalDeviceVideo,
    items: [
      "Design and develop innovative medical devices for diagnosis.",
      "Focus on wearable and implantable devices for monitoring.",
      "Integrate biosensors into medical devices for data collection."
    ]
  }
];

// TRIPLE the data array to create the infinite loop buffer
const portfolioData = [...basePortfolioData, ...basePortfolioData, ...basePortfolioData];

// 2. The Internal Card Component
const PortfolioCard = ({ category, title, items, mediaType, mediaSrc }) => {
  return (
    <div className={styles.card}>
      {mediaType === 'video' ? (
        <video className={styles.cardMedia} autoPlay loop muted playsInline>
          <source src={mediaSrc} type="video/mp4" />
        </video>
      ) : (
        <img className={styles.cardMedia} src={mediaSrc} alt={title} loading="lazy" />
      )}
      <div className={styles.cardOverlay}></div>
      <div className={styles.cardContent}>
        <span className={styles.cardCategory}>{category}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
        <ul className={styles.cardList}>
          {items.map((item, index) => (
            <li key={index} className={styles.cardListItem}>
              <span className={styles.cardBullet}>•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// 3. Main Section Component
const PortfolioSection = () => {
  const carouselRef = useRef(null);
  const [isSnapping, setIsSnapping] = useState(true);

  // Start the carousel in the middle set of cards to allow scrolling left immediately
  useEffect(() => {
    if (carouselRef.current) {
      setTimeout(() => {
        const carousel = carouselRef.current;
        const singleSetWidth = carousel.scrollWidth / 3;
        carousel.scrollLeft = singleSetWidth; 
      }, 100); // Small timeout allows CSS to paint before jumping
    }
  }, []);

  // INFINITE LOOP LOGIC
  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Calculate the width of exactly ONE set of cards
    const singleSetWidth = carousel.scrollWidth / 3;

    // If user scrolls past the 2nd set into the 3rd set
    if (carousel.scrollLeft >= singleSetWidth * 2 - 10) {
      setIsSnapping(false); // Turn off CSS snap to prevent glitching
      carousel.scrollLeft -= singleSetWidth; // Teleport backwards 1 full set
      setTimeout(() => setIsSnapping(true), 50); // Turn snap back on
    } 
    // If user scrolls backward past the 2nd set into the 1st set
    else if (carousel.scrollLeft <= 10) {
      setIsSnapping(false);
      carousel.scrollLeft += singleSetWidth; // Teleport forwards 1 full set
      setTimeout(() => setIsSnapping(true), 50);
    }
  };

  // Button Navigation
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        
        {/* Header and Controls */}
        <div className={styles.headerWrapper}>
          <h2 className={styles.title}>Our Portfolio</h2>
          <div className={styles.navButtons}>
            <button onClick={scrollLeft} className={styles.navButton} aria-label="Previous">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
              </svg>
            </button>
            <button onClick={scrollRight} className={styles.navButton} aria-label="Next">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div 
          className={`${styles.carousel} ${isSnapping ? styles.snapActive : styles.snapDisabled}`} 
          ref={carouselRef}
          onScroll={handleScroll}
        >
          {portfolioData.map((data, index) => (
            // Unique key combining index and title to satisfy React's array rendering requirement
            <PortfolioCard key={`${index}-${data.title}`} {...data} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;