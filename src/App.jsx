//App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';

// Import pages
import HomePage from './pages/Home/Home';
import AboutPage from './pages/About/AboutPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import SkillsPage from './pages/Skills/SkillsPage';
import ExperiencePage from './pages/Experience/ExperiencePage';
import ContactPage from './pages/Contact/Contact';

// Main App component
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  useEffect(() => {
    // Close mobile menu when window is resized
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          toggleTheme={toggleTheme} 
        />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;