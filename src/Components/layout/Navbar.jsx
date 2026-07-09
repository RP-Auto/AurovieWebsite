// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "./Navbar.module.css";

import AuroVie_Logo from "../../assets/img/AuroVie_website_logo.webp";
import AurovieNavbar from "../../assets/img/Aurovie_Navbar_bg.gif";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const closeMenu = () => {
    setMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  // Close mobile menu automatically when route changes
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // Handle Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isSticky ? styles.headerSticky : styles.headerNormal}`}>
      <div
        className={`${styles.navbar} ${isSticky ? styles.navbarSticky : styles.navbarNormal}`}
        // Pass the background image dynamically to the CSS Custom Property
        style={{ '--nav-bg': `url(${AurovieNavbar})` }}
      >
        {/* Logo */}
        <div className={styles.logoWrapper}>
          <RouterLink to="/" onClick={() => window.scrollTo(0, 0)}>
            <img className={styles.logoImage} src={AuroVie_Logo} alt="AuroVie Logo" />
          </RouterLink>
        </div>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <RouterLink to="https://dockx.aurovielifesciences.in" className={styles.navLink} target="_blank" rel="noopener noreferrer">
            DockX
          </RouterLink>

          <RouterLink to="/products" className={styles.navLink}>
            Products
          </RouterLink>
          
          {/* Desktop Dropdown */}
          <div className={styles.dropdownWrapper}>
            <button className={styles.dropdownBtn}>
              Company
              <svg className={styles.dropdownIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className={styles.hoverBridge}></div>

            <div className={styles.dropdownMenu}>
              <RouterLink to="/about" className={styles.dropdownItem}>About Us</RouterLink>
              <RouterLink to="/careers" className={styles.dropdownItem}>Careers</RouterLink>
              <RouterLink to="/contact" className={styles.dropdownItem}>Contact</RouterLink>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className={styles.mobileToggleBtn}>
          <button onClick={toggleMenu} aria-label="Toggle Menu" style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
            {menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <RouterLink to="/products" className={styles.mobileLink}>
          Products
        </RouterLink>
        <RouterLink to="/blog" className={styles.mobileLink}>
          Blog
        </RouterLink>

        {/* Mobile Accordion Dropdown */}
        <div className={styles.mobileAccordionWrapper}>
          <button 
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className={styles.mobileAccordionBtn}
          >
            <span>Company</span>
            <svg 
              className={`${styles.mobileAccordionIcon} ${mobileDropdownOpen ? styles.mobileAccordionIconOpen : ""}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div className={`${styles.mobileAccordionContent} ${mobileDropdownOpen ? styles.mobileAccordionContentOpen : ""}`}>
            <RouterLink to="/about" className={styles.mobileSublink}>About Us</RouterLink>
            <RouterLink to="/careers" className={styles.mobileSublink}>Careers</RouterLink>
            <RouterLink to="/contact" className={styles.mobileSublink}>Contact</RouterLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;