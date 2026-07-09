import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../src/Components/layout/MainLayout';

// Dynamically import pages for code-splitting
const LandingPage = lazy(() => import('./pages/Landing/LandingPage'));
const ProductsPage = lazy(() => import('./pages/products/ProductsPage'));
const ContactPage = lazy(() => import('./pages/contact/ContactPage'));
const BlogPage = lazy(() => import('./pages/Blog/BlogPage'));
const AboutPage = lazy(() => import('./pages/about/AboutPage'));
const CareersPage = lazy(() => import('./pages/careers/CareersPage'));
const TermsOfService = lazy(() => import('./pages/legal/TermsOfService'));
const PrivacyPolicy = lazy(() => import('./pages/legal/PrivacyPolicy'));

// A simple loading spinner fallback
const Loader = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;