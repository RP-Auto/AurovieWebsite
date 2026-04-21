// src/pages/contact/ContactPage.jsx
import React, { useEffect } from 'react';
import styles from './Contact.module.css';

const ContactPage = () => {
  // Ensure the page scrolls to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageWrapper}>
      
      {/* High-Level Rotating Globe Background */}
      <div className={styles.globeBackground}></div>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        
        <header className={styles.header}>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>
            Have questions about our precision medicine solutions or business partnerships? Our team is here to help.
          </p>
        </header>

        <div className={styles.grid}>
          
          {/* Left Side: Contact Info */}
          <div className={styles.infoSection}>
            
            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className={styles.infoTitle}>Location</h3>
                <p className={styles.infoText}>
                  584/B, PENTHOUSE, 17TH A, MAIN,<br />
                  6TH 'G' CRS, 6TH BLK, Koramangala,<br />
                  Bangalore South, Bangalore- 560034, Karnataka
                </p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className={styles.infoTitle}>Email</h3>
                <p className={styles.infoText}>office@aurovielifesciences.in</p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconWrapper}>
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="28" height="28">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className={styles.infoTitle}>Contact</h3>
                <p className={styles.infoText}>+91 85534 01198</p>
              </div>
            </div>

          </div>

          {/* Right Side: Glassmorphism Form */}
          <form className={styles.glassForm}>
            
            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="nameInput">Name</label>
              <input type="text" className={styles.input} id="nameInput" placeholder="Enter your full name" />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="emailInput">Email</label>
              <input type="email" className={styles.input} id="emailInput" placeholder="office@domain.in" />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="phoneInput">Phone Number</label>
              <input type="tel" className={styles.input} id="phoneInput" placeholder="Enter your phone number" />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="messageInput">Message</label>
              <textarea className={styles.textarea} id="messageInput" placeholder="How can we help you?"></textarea>
            </div>

            <button type="button" className={styles.submitBtn}>
              Send Message
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;