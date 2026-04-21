import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomeSection from '../sections/HomeSection';
import AboutSection from '../sections/AboutSection';
import WhyAiSection from '../sections/WhyAiSection'; // <-- Import the new section
import PortfolioSection from '../sections/PortfolioSection';
import ServicesSection from '../sections/ServicesSection';

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <HomeSection />
      <AboutSection />
      <WhyAiSection /> 
      <PortfolioSection />
      <ServicesSection />
    </div>
  );
}

export default LandingPage;