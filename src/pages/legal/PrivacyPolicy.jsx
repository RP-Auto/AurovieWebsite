import React from 'react';
import styles from './Legal.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className={styles.badge}>
          <span>🛡️</span> DATA PROTECTION
        </div>
        <h1 className={styles.title}>
          Privacy <span className={styles.privacyHighlight}>Policy</span>
        </h1>
        <p className={styles.subtitle}>
          Effective Date: January 1, 2026 | Last Updated: October 15, 2026
        </p>
      </header>

      <main className={styles.card}>
        <div className={styles.content}>
          
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>1. Information Collection & Telemetry</h2>
            </div>
            <p className={styles.text}>
              AuroVie Life Sciences ("Data Controller") is committed to safeguarding sensitive biological data and Personally Identifiable Information (PII). We collect information through the following vectors:
            </p>
            <ul className={styles.list}>
              <li><strong>Account Credentials:</strong> Institutional email addresses, practitioner IDs, and cryptographic authentication tokens.</li>
              <li><strong>Biological & Health Data:</strong> Genomics, proteomics, and metabolomics datasets uploaded for targeted therapy analysis and biomarker identification.</li>
              <li><strong>Device Telemetry:</strong> Anonymized interaction metrics and diagnostic data collected via our biosensors and wearable medical devices.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>2. Cryptographic Security & Data Sovereignty</h2>
            </div>
            <p className={styles.text}>
              We deploy military-grade security architectures to prevent premature disclosure or unauthorized access to sensitive patient data. All biomedical assets are encrypted in transit utilizing TLS 1.3 and at rest via AES-256 block-level encryption.
            </p>
            <p className={styles.text} style={{ marginTop: '1rem' }}>
              We strictly adhere to <strong>HIPAA (Health Insurance Portability and Accountability Act)</strong> and <strong>GDPR (General Data Protection Regulation)</strong> frameworks to ensure data sovereignty and patient confidentiality.
            </p>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>3. AI Model Training & Anonymization</h2>
            </div>
            <p className={styles.text}>
              To advance early detection models for cancer, diabetes, and neurodegenerative diseases, AuroVie utilizes large-scale datasets. Before any data is introduced to our Machine Learning pipelines, all Personally Identifiable Information (PII) is permanently decoupled and anonymized, ensuring that individual patients cannot be reverse-identified from our research models.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;