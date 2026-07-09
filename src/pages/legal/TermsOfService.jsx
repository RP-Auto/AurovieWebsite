import React from 'react';
import styles from './Legal.module.css';

const TermsOfService = () => {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className={styles.badge}>
          <span>⚖️</span> LEGAL AGREEMENT
        </div>
        <h1 className={styles.title}>
          Terms of <span className={styles.titleHighlight}>Service</span>
        </h1>
        <p className={styles.subtitle}>
          Please read these terms carefully before utilizing our precision medicine infrastructure.
        </p>
      </header>

      <main className={styles.card}>
        <div className={styles.content}>
          
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>1. Master Service Agreement</h2>
            </div>
            <p className={styles.text}>
              By authenticating into the AuroVie Life Sciences platform ("Service Provider", "Platform"), you ("User", "Healthcare Provider", "Institution") enter into a binding agreement. You are granted a non-exclusive, non-transferable, revocable license to utilize our AI-driven models and biosensor data analytics for healthcare research and clinical decision support.
            </p>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>2. Service Level Agreement (SLA) & Uptime</h2>
            </div>
            <p className={styles.text}>
              We pledge to maintain a <strong>99.8% platform availability</strong> for our clinical decision support tools. However, planned maintenance windows (notified 48 hours in advance) and force majeure events are excluded from downtime calculations.
            </p>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>3. Limitation of Liability & Medical Disclaimer</h2>
            </div>
            <div className={styles.disclaimerBox}>
              <p className={styles.disclaimerText}>
                <strong>CRITICAL DISCLAIMER:</strong> AuroVie Life Sciences provides advanced AI/ML predictive modeling designed to assist healthcare providers. Our services do not constitute professional medical advice or definitive diagnoses. Treatment outcomes remain the sole responsibility of the attending physician.
              </p>
            </div>
            <p className={styles.text} style={{ marginTop: '1rem' }}>
              Under no circumstances shall AuroVie Life Sciences, its directors, or its affiliates be liable for indirect, incidental, or consequential damages resulting from reliance on our AI predictions, biomarker identification, or platform usage.
            </p>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>4. User Responsibilities</h2>
            </div>
            <ul className={styles.list}>
              <li><strong>Data Accuracy:</strong> Users must provide accurate and lawful genomic and clinical data when utilizing our precision medicine tools.</li>
              <li><strong>Compliance:</strong> Healthcare providers must maintain the confidentiality of patient data in strict accordance with HIPAA, GDPR, and local healthcare laws.</li>
              <li><strong>Security:</strong> Users shall not attempt to breach or reverse-engineer the AI architectures, nanotech models, or hardware-software integrations provided by AuroVie.</li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
};

export default TermsOfService;