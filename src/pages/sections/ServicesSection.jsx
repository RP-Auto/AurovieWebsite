// src/pages/Landing/sections/ServicesSection.jsx
import React from "react";
import styles from "./ServicesSection.module.css"; // Ensure you have the CSS module below

// Import Media
import Precision_Medicine from "../../assets/img/Precision_Medicine.webp";
import Early_Detection_of_diseases from "../../assets/img/Early_Detection_of_diseases.webp";
import Biomarker_Identification from "../../assets/img/Biomarker_Identification.webp";
import Metabolic_Pathway_Targeting from "../../assets/img/Metabolic_Pathway_Targeting.webp";

// ==========================================
// 1. SCROLL STACK COMPONENTS (Native Sticky)
// ==========================================
export const ScrollStackItem = ({ children }) => {
  return <>{children}</>;
};

const ScrollStack = ({ children }) => {
  const cards = React.Children.toArray(children);

  return (
    <div className="relative w-full pb-[10vh]">
      {cards.map((card, index) => {
        const isLastCard = index === cards.length - 1;
        
        return (
          <div
            key={index}
            className="sticky w-full max-w-6xl mx-auto px-5 lg:px-0"
            style={{
              /* THE PILING MATH: Locks each card slightly lower than the last */
              top: `calc(15vh + ${index * 40}px)`,
              zIndex: index + 10,
              /* Drops the massive margin on the last card so the footer arrives smoothly */
              marginBottom: isLastCard ? "0" : "1vh", 
            }}
          >
            {/* The wrapper adds the shadow and rounded corners to separate the stack */}
            <div className="w-full shadow-[0_-15px_30px_rgba(0,0,0,0.15)] rounded-[2rem] overflow-hidden bg-white border border-slate-100">
              {card}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ==========================================
// 2. SERVICE CARD (50/50 Split Layout)
// ==========================================
const ServiceCard = ({ title, items, mediaType, mediaSrc }) => {
  return (
    <div className={styles.card}>
      
      {/* Content Half (Left on Desktop, Top on Mobile) */}
      <div className={styles.cardContent}>
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

      {/* Media Half (Right on Desktop, Bottom on Mobile) */}
      <div className={styles.cardMedia}>
        {mediaType === 'video' ? (
          <video 
            className={styles.cardMediaElement} 
            autoPlay loop muted playsInline
          >
            <source src={mediaSrc} type="video/mp4" />
          </video>
        ) : (
          <img 
            className={styles.cardMediaElement} 
            src={mediaSrc} 
            alt={title} 
            loading="lazy" 
          />
        )}
      </div>
      
    </div>
  );
};

// ==========================================
// 3. DATA ARRAY
// ==========================================
const servicesData = [
  {
    title: "Precision Medicine",
    mediaType: "image",
    mediaSrc: Precision_Medicine,
    items: [
      "Develop comprehensive patient profiling using genomics, proteomics, metabolomics, and clinical data.",
      "Utilize AI to identify patient subpopulations with distinct metabolic characteristics for targeted therapies.",
      "Create individualized treatment plans considering patient-specific factors and disease progression."
    ]
  },
  {
    title: "Early Detection",
    mediaType: "image",
    mediaSrc: Early_Detection_of_diseases,
    items: [
      "Discover novel biomarkers through AI-driven analysis of large-scale biological datasets.",
      "Develop non-invasive diagnostic tools and screening methods for early cancer, diabetes, and neurodegenerative disease detection.",
      "Implement early intervention strategies to improve patient outcomes."
    ]
  },
  {
    title: "Biomarker Identification",
    mediaType: "image",
    mediaSrc: Biomarker_Identification,
    items: [
      "Leverage advanced omics technologies, such as genomics, proteomics, and metabolomics, to identify and validate metabolic biomarkers.",
      "Develop biomarker panels for early detection, prognosis, and treatment response assessment.",
      "Utilize biomarkers for patient stratification and drug development."
    ]
  },
  {
    title: "Metabolic Pathway Targeting",
    mediaType: "image",
    mediaSrc: Metabolic_Pathway_Targeting,
    items: [
      "Explore metabolic vulnerabilities in cancer, diabetes, and neurodegenerative disease cells for therapeutic exploitation.",
      "Develop metabolic inhibitors, modulators, and activators with therapeutic potential.",
      "Investigate combination therapies targeting multiple metabolic pathways."
    ]
  }
];

// ==========================================
// 4. MAIN EXPORT COMPONENT
// ==========================================
const ServicesSection = () => {
  return (
    <section className={styles.section} id="doctors">

      {/* Header Area */}
      <div className={styles.header}>
        <h2 className={styles.title}>Our Services</h2>
        <p className={styles.description}>
          We use advanced AI and machine learning to create personalized treatment plans based on your unique genetic makeup, ensuring the most effective therapies with fewer side effects. Our AI technology helps detect diseases early, often before symptoms show, allowing for quicker treatments that save lives. We specialize in identifying new biomarkers that help us understand diseases and develop targeted therapies. Our AI-driven drug discovery platform speeds up the process of finding new medications, reducing time and costs. By combining AI with deep biomedical expertise, we’re revolutionizing healthcare to improve patient outcomes.
        </p>
      </div>

      {/* Native Scroll Stack Wrapper */}
      <ScrollStack>
        {servicesData.map((service, index) => (
          <ScrollStackItem key={index}>
            <ServiceCard
              title={service.title}
              mediaType={service.mediaType}
              mediaSrc={service.mediaSrc}
              items={service.items}
            />
          </ScrollStackItem>
        ))}
      </ScrollStack>

    </section>
  );
};

export default ServicesSection;