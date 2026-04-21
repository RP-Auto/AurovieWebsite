import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../src/Components/layout/MainLayout';
// src/App.jsx (Snippet addition)
import ProductsPage from './pages/products/ProductsPage';
import ContactPage from './pages/contact/ContactPage';
import LandingPage from './pages/Landing/LandingPage';
import BlogPage from './pages/Blog/BlogPage';
import AboutPage from './pages/about/AboutPage';
import CareersPage from './pages/careers/CareersPage';

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
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;