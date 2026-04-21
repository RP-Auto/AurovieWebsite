// src/pages/Landing/sections/WhyAiSection.jsx
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./WhyAi.module.css";

const aiBenefitsData = [
  {
    num: "01",
    title: "Cost Savings",
    highlight: "Saves $780M - $1.3B",
    content: [
      "AI-ML integration can reduce development time by 30-50%.",
      "Significantly lowers overall Research and Development (R&D) Costs."
    ]
  },
  {
    num: "02",
    title: "Revenue Potential",
    highlight: "Increases Revenue 10-20%",
    content: [
      "Faster Product Launch and enhanced market adoption.",
      "Precision Medicine leads to higher drug efficacy and better patient outcomes.",
      "Higher efficacy can capture greater market share, potentially adding $200-$400 million annually."
    ]
  },
  {
    num: "03",
    title: "Risk Mitigation",
    highlight: "Saves $100M+ per drug",
    content: [
      "Predictive Accuracy: AI models enhance safety prediction, minimizing costly late-stage failures in Phase II and III trials.",
      "Ethical Compliance: Reduces reliance on animal testing, aligning with ethical standards and speeding up regulatory approvals."
    ]
  },
  {
    num: "04",
    title: "Health Outcomes",
    highlight: "Broader Societal Impact",
    content: [
      "Patient Impact: More effective treatments improve health outcomes, enhancing reputation and trust.",
      "Societal Benefits: Contributes to reduced healthcare costs and profoundly improved public health."
    ]
  }
];

const WhyAiSection = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true }); 
  }, []);

  return (
    <section id="why-ai" className={styles.section}>
      
      {/* Animated Breathing Background Glows */}
      <div className={`${styles.bgGlow} ${styles.glowPink}`}></div>
      <div className={`${styles.bgGlow} ${styles.glowBlue}`}></div>

      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header} data-aos="fade-up">
          <h2 className={styles.title}>
            WHY AI-ML in Drug Discovery?
          </h2>
          <p className={styles.description}>
            Systems biology is a complex biological systems computational and mathematical analysis and modelling. It is a biology-based interdisciplinary field of study that focuses on complex interactions within biological systems and uses a holistic approach to biological research.
          </p>
        </div>

        {/* Premium Grid Layout */}
        <div className={styles.grid}>
          {aiBenefitsData.map((item, index) => (
            <div 
              key={index} 
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>{item.num}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              
              <div className={styles.highlightBadge}>
                {item.highlight}
              </div>

              <ul className={styles.cardList}>
                {item.content.map((text, idx) => (
                  <li key={idx} className={styles.cardListItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default WhyAiSection;