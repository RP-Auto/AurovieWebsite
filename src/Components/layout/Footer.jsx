// src/components/layout/Footer.jsx
import React, { useState } from "react";
import { useLocation, useNavigate, Link as RouterLink } from "react-router-dom";
import styles from "./Footer.module.css";
import AuroVie_Logo from "../../assets/img/AuroVie_website_logo.webp";

const footerLinks = {
  aurovie: [
    { name: "About Us", target: "about" },
    { name: "Our Approach", target: "about" },
    { name: "Core Values", target: "about" },
  ],
  portfolio: [
    { name: "Disease Synergy", target: "portfolio" },
    { name: "Biosensor Development", target: "portfolio" },
    { name: "Nanotechnology", target: "portfolio" },
    { name: "Clinical Decision Support", target: "portfolio" },
    { name: "Device Development", target: "portfolio" },
  ],
  services: [
    { name: "Precision Medicine", target: "services" },
    { name: "Early Detection", target: "services" },
    { name: "Biomarker Identification", target: "services" },
    { name: "Metabolic Targeting", target: "services" },
  ],
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API Call
    setTimeout(() => {
      console.log("Subscribed with email:", email);
      setEmail(""); 
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 800);
  };

  const handleNavigation = (targetId) => {
    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate(`/#${targetId}`);
    }
  };

  // Reusable List Component
  const FooterList = ({ title, links }) => (
    <div className={styles.linkColumn}>
      <h3 className={styles.columnTitle}>{title}</h3>
      <nav className={styles.nav} aria-label={`${title} links`}>
        {links.map((link, idx) => (
          <button
            key={idx}
            onClick={() => handleNavigation(link.target)}
            className={styles.navButton}
            aria-label={`Maps to ${link.name}`}
          >
            {link.name}
          </button>
        ))}
      </nav>
    </div>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top: Links Grid */}
        <div className={styles.linksGrid}>
          <FooterList title="AuroVie" links={footerLinks.aurovie} />
          <FooterList title="Portfolio" links={footerLinks.portfolio} />
          <FooterList title="Services" links={footerLinks.services} />
        </div>

        {/* Middle: Brand & Newsletter */}
        <div className={styles.middleSection}>
          
          <div className={styles.brandWrapper}>
            <RouterLink to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img 
                src={AuroVie_Logo} 
                alt="AuroVie Life Sciences Logo" 
                className={styles.logoImage} 
                loading="lazy" 
              />
            </RouterLink>
            <p className={styles.brandTagline}>Innovating the future of life sciences.</p>
          </div>

          <div className={styles.newsletterWrapper}>
            <h4 className={styles.newsletterTitle}>Stay Updated</h4>
            <form onSubmit={handleSubscribe} className={styles.formGroup}>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                disabled={isSubmitting}
                aria-label="Email Address for Newsletter"
              />
              <button 
                type="submit" 
                className={`${styles.submitBtn} ${isSuccess ? styles.successBtn : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : isSuccess ? "Subscribed! ✓" : "Subscribe"}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom: Copyright & Legal */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} AuroVie Life Sciences. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <RouterLink to="/privacy" className={styles.legalLink}>Privacy Policy</RouterLink>
            <RouterLink to="/terms" className={styles.legalLink}>Terms of Service</RouterLink>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;