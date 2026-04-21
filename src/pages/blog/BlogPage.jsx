// src/pages/Blog/BlogPage.jsx
import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./Blog.module.css";

const blogPosts = [
  {
    id: 1,
    category: "Generative AI",
    date: "Oct 24, 2024",
    readTime: "6 min read",
    title: "Beyond AlphaFold: The Next Era of Generative Protein Design",
    excerpt: "How diffusion models and generative AI are moving beyond predicting existing protein structures to hallucinating entirely new, functional proteins for targeted therapeutics.",
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=800",
    delay: 0,
  },
  {
    id: 2,
    category: "Systems Biology",
    date: "Oct 18, 2024",
    readTime: "8 min read",
    title: "Multi-Omics Integration: Decoding the Tumor Microenvironment",
    excerpt: "Leveraging machine learning to unify genomics, proteomics, and metabolomics data, providing unprecedented insights into cancer resistance mechanisms.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
    delay: 100,
  },
  {
    id: 3,
    category: "Quantum Computing",
    date: "Oct 12, 2024",
    readTime: "10 min read",
    title: "Quantum Algorithms for Small Molecule Drug Discovery",
    excerpt: "Exploring how quantum simulation is poised to solve complex molecular binding affinity calculations that currently cripple classical supercomputers.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    delay: 200,
  },
  {
    id: 4,
    category: "Hardware",
    title: "Next-Gen Wearables: Continuous Metabolic Monitoring",
    date: "Sep 28, 2024",
    readTime: "5 min read",
    excerpt: "The shift from simple heart-rate tracking to real-time interstitial fluid analysis. How nanotechnology is enabling non-invasive glucose and lactate biosensors.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    delay: 0,
  },
  {
    id: 5,
    category: "Data Privacy",
    title: "Federated Learning in Multi-Hospital Clinical Trials",
    date: "Sep 22, 2024",
    readTime: "7 min read",
    excerpt: "Overcoming strict HIPAA and GDPR constraints by training AI models across distributed hospital networks without ever moving the underlying patient data.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
    delay: 100,
  }
];

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        {/* Hero Section */}
        <div className={styles.hero} data-aos="fade-up">
          <h1 className={styles.title}>The Future of Healthcare, Decoded.</h1>
          <p className={styles.subtitle}>
            Explore our latest research, industry insights, and technical deep-dives into how AI, machine learning, and precision medicine are reshaping life sciences.
          </p>
        </div>

        {/* Blog Grid */}
        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <RouterLink 
              to={`/blog/${post.id}`} 
              key={post.id} 
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={post.delay}
            >
              {/* Image */}
              <div className={styles.imageWrapper}>
                <img src={post.image} alt={post.title} className={styles.image} loading="lazy" />
              </div>

              {/* Content */}
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <span className={styles.date}>{post.date} • {post.readTime}</span>
                </div>
                
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
                
                <div className={styles.readMore}>
                  Read Article
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </RouterLink>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogPage;