// src/pages/Careers/CareersPage.jsx
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Careers.module.css";

const CareersPage = () => {
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
          <h1 className={styles.title}>Build the Future of Precision Medicine.</h1>
          <p className={styles.subtitle}>
            At AuroVie Life Science, we are merging artificial intelligence with deep biology to solve humanity's most complex diseases. We are looking for visionaries to join the fight.
          </p>
        </div>

        {/* Culture/Values Grid */}
        <div className={styles.cultureSection}>
          <h2 className={styles.sectionTitle} data-aos="fade-up">Why AuroVie?</h2>
          <div className={styles.grid}>
            
            <div className={styles.glassCard} data-aos="fade-up" data-aos-delay="0">
              <div className={styles.iconWrapper}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Bleeding-Edge Tech</h3>
              <p className={styles.cardText}>
                Work with state-of-the-art AI, machine learning, and nanotechnology platforms that are actively redefining life sciences.
              </p>
            </div>

            <div className={styles.glassCard} data-aos="fade-up" data-aos-delay="100">
              <div className={styles.iconWrapper}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Brilliant Minds</h3>
              <p className={styles.cardText}>
                Collaborate with a diverse, elite team of computational biologists, software engineers, and medical researchers.
              </p>
            </div>

            <div className={styles.glassCard} data-aos="fade-up" data-aos-delay="200">
              <div className={styles.iconWrapper}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Global Impact</h3>
              <p className={styles.cardText}>
                Your work here isn't just about building software; it's about directly improving patient outcomes and saving lives worldwide.
              </p>
            </div>

          </div>
        </div>

        {/* Talent Network Section (The "No Openings" pivot) */}
        <div className={styles.talentSection} data-aos="fade-up">
          
          <div className={styles.talentInfo}>
            <h2 className={styles.talentHeading}>Join our Talent Network.</h2>
            <p className={styles.talentText}>
              Our core engineering and research teams are currently fully staffed. However, we are constantly pushing the boundaries of what is possible, and we are always looking to connect with exceptional talent.
            </p>
            <p className={styles.talentText}>
              Drop your details into our Talent Network. When a role opens that matches your expertise in AI, biotech, or hardware engineering, you will be the first to know.
            </p>
          </div>

          <form className={styles.glassForm}>
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="name">Full Name</label>
              <input type="text" id="name" className={styles.input} placeholder="Enter your full name" required />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="email">Email Address</label>
              <input type="email" id="email" className={styles.input} placeholder="office@domain.in" required />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="linkedin">LinkedIn Profile URL</label>
              <input type="url" id="linkedin" className={styles.input} placeholder="https://linkedin.com/in/..." required />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="expertise">Area of Expertise</label>
              <input type="text" id="expertise" className={styles.input} placeholder="e.g. Data Science, Nanotech, Frontend Dev" required />
            </div>

            <button type="button" className={styles.submitBtn}>
              Submit Profile
            </button>
          </form>

        </div>

      </div>
    </div>
  );
};

export default CareersPage;