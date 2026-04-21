// src/pages/Products/ProductsPage.jsx
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Products.module.css";

// Import your existing media assets
import BiosensorImg from "../../assets/img/Biosensor_Development.webp";
import ClinicalImg from "../../assets/img/Clinical_Decision_Support.webp";
import MedicalDeviceVideo from "../../assets/img/Medical_Device_Development.webp";
import NanoVideo from "../../assets/img/Nanotechnology_Integration.webp";

const productsData = [
  {
    category: "Software Platform",
    title: "AI Clinical Decision Support",
    description: "An AI-powered platform designed to assist healthcare providers in making evidence-based decisions. It provides real-time data analytics and predictive modelling to optimize treatment plans and monitor disease progression.",
    mediaType: "image",
    mediaSrc: ClinicalImg,
    gridClass: styles.span2, // Makes this card wide (takes 2 columns on desktop)
    delay: 0,
  },
  {
    category: "Hardware",
    title: "Advanced Biosensors",
    description: "Miniaturized, portable biosensors utilizing hardware-software integration for the accurate and sensitive detection of biomarkers in point-of-care applications.",
    mediaType: "image",
    mediaSrc: BiosensorImg,
    gridClass: styles.span1, // Standard square card
    delay: 100,
  },
  {
    category: "Hardware",
    title: "Innovative Medical Devices",
    description: "Wearable and implantable devices designed for continuous patient monitoring, seamlessly integrating standard medical sensors for real-time data collection.",
    mediaType: "image",
    mediaSrc: MedicalDeviceVideo,
    gridClass: styles.span1, // Standard square card
    delay: 200,
  },
  {
    category: "Therapeutics",
    title: "Targeted Nanomaterials",
    description: "Cutting-edge nanomaterials and nanostructures engineered specifically for precision drug delivery, high-resolution imaging, and advanced diagnostics.",
    mediaType: "image",
    mediaSrc: NanoVideo,
    gridClass: styles.span2, // Makes this card wide (takes 2 columns on desktop)
    delay: 300,
  }
];

const ProductsPage = () => {
  // Always scroll to top when loading a new route page
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        {/* Hero Header */}
        <div className={styles.hero} data-aos="fade-up">
          <h1 className={styles.title}>Innovative Solutions for Modern Healthcare</h1>
          <p className={styles.subtitle}>
            From point-of-care biosensors to AI-driven clinical decision platforms, discover the tools we are building to revolutionize precision medicine.
          </p>
        </div>

        {/* Bento Grid */}
        <div className={styles.bentoGrid}>
          {productsData.map((product, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${product.gridClass}`}
              data-aos="fade-up"
              data-aos-delay={product.delay}
            >
              
              {/* Media Background */}
              <div className={styles.cardMediaWrapper}>
                {product.mediaType === 'video' ? (
                  <video className={styles.cardMedia} autoPlay loop muted playsInline>
                    <source src={product.mediaSrc} type="video/mp4" />
                  </video>
                ) : (
                  <img className={styles.cardMedia} src={product.mediaSrc} alt={product.title} loading="lazy" />
                )}
                <div className={styles.cardOverlay}></div>
              </div>

              {/* Content Overlay */}
              <div className={styles.cardContent}>
                <div>
                  <div className={styles.cardCategory}>{product.category}</div>
                  <h2 className={styles.cardTitle}>{product.title}</h2>
                  <p className={styles.cardDescription}>{product.description}</p>
                </div>
                
                <div className={styles.learnMore}>
                  Explore Product
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;