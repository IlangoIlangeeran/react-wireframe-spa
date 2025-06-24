import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";
import "./App.css";

const sections = [
  {
    id: "section1",
    title: "Innovative Solutions",
    description:
      "We deliver cutting-edge technology solutions tailored to your needs.",
    icon: <FaRocket size={40} color="#e53935" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "section2",
    title: "Creative Ideas",
    description:
      "Our team brainstorms creative ideas to keep you ahead of the curve.",
    icon: <FaLightbulb size={40} color="#ff1744" />,
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "section3",
    title: "Customer Focus",
    description:
      "We prioritize customer satisfaction and build lasting partnerships.",
    icon: <FaUsers size={40} color="#b71c1c" />,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.25, duration: 0.7, type: "spring", stiffness: 60 },
  }),
};

function Section({ id, title, description, icon, image, index }) {
  const isReverse = index % 2 === 1;
  return (
    <motion.section
      id={id}
      className={`section card section-flex${isReverse ? ' reverse' : ''}`}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={sectionVariants}
    >
      {!isReverse && (
        <div className="section-image-wrap">
          <img src={image} alt={`${title} visual`} className="section-image" loading="lazy" />
        </div>
      )}
      <div className="section-content">
        <div className="icon animated-icon" aria-hidden="true">{icon}</div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button
          className="primary-btn"
          onClick={() => alert(`Read more about ${title}`)}
          aria-label={`Read more about ${title}`}
        >
          Read more
        </button>
      </div>
      {isReverse && (
        <div className="section-image-wrap">
          <img src={image} alt={`${title} visual`} className="section-image" loading="lazy" />
        </div>
      )}
    </motion.section>
  );
}

function App() {
  return (
    <div className="App">
      {/* Sticky Navigation */}
      <nav className="main-nav" role="navigation">
        <div className="logo">ReactWire</div>
        <div className="nav-links">
          <a href="#intro">Intro</a>
          <a href="#section1">Solutions</a>
          <a href="#section2">Ideas</a>
          <a href="#section3">Focus</a>
        </div>
      </nav>

      {/* Hero Section */}
     <header className="hero">
  <div className="hero-bg" aria-hidden="true" />
  <motion.div
    className="glass-card hero-content"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1>
      Welcome to <span className="brand">ReactWire</span>
    </h1>
    <p className="hero-subtitle">
      Modern React SPA with smooth animations and professional design.
    </p>
    <a href="#intro" className="primary-btn cta-btn" role="button">Get Started</a>
  </motion.div>
</header>



      {/* Intro Section */}
      <motion.section
        id="intro"
        className="intro section card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"
          alt="Modern workspace"
          className="intro-image"
          loading="lazy"
        />
        <h2>About This Project</h2>
        <p>
          This interactive SPA built with React showcases smooth animations,
          modern design, accessibility, and a clean user experience.
        </p>
      </motion.section>

      {/* Content Sections */}
      <div className="sections-wrapper">
        {sections.map((sec, i) => (
          <Section key={sec.id} index={i} {...sec} />
        ))}
      </div>

      {/* Footer */}
      <footer className="footer" role="contentinfo">
        <div>© {new Date().getFullYear()} ReactWire. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
