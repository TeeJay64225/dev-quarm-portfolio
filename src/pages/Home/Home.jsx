//Home.jsx
import React, { useState, useEffect } from 'react';
import profileImage from '../../assets/images/dev_quarm.jpeg';

// Particle component
const Particle = ({ style }) => (
  <div className="particle" style={style}></div>
);

const HomePage = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 10 + 5;
      newParticles.push({
        id: i,
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 10 + 15}s`
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <>
      {/* Background Shapes */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="particles">
        {particles.map(particle => (
          <Particle key={particle.id} style={particle} />
        ))}
      </div>

      <header>
        <div className="hero">
          <div className="hero-content">
            <div className="hero-name">Hello, I'm</div>
            <h1 className="hero-title typewriter">Dev Quarm</h1>
            <p className="hero-subtitle">
                Hi, I’m Dev Quarm — a passionate and results-driven full-stack developer who loves turning ideas into functional, user-friendly, and visually appealing digital solutions. With experience across frontend, backend, and database development, I build applications that don’t just work — they work beautifully and efficiently.
            </p>
            <div className="hero-buttons">
              <a href="projects" className="btn btn-primary">View My Work</a>
              <a href="contact" className="btn btn-outline">Contact Me</a>
            </div>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/theophilus-quarm/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
                <a href="https://github.com/TeeJay64225" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
                <a href="https://www.instagram.com/dev_quarm/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a>
                <div className="social-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-img">
              <img src={profileImage} alt="Dev Quarm Profile" />
            </div>
          </div>
        </div>

            <div className="tech-stack">
            {/* Frontend */}
            <div className="tech-item">
                <div className="tech-icon">
                {/* HTML5 */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 2l1.5 17L12 22l7.5-3L21 2H3z"></path>
                    <path d="M7.5 8h9L12 12.5 7.5 8z"></path>
                    <path d="M8 14.5l4 1.85 4-1.85"></path>
                </svg>
                </div>
                <div className="tech-name">HTML5</div>
            </div>

            <div className="tech-item">
                <div className="tech-icon">
                {/* CSS3 */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 2l1.5 17L12 22l7.5-3L21 2H3z"></path>
                    <path d="M7 8h10M8 13.5h8M10 17l2 1 2-1"></path>
                </svg>
                </div>
                <div className="tech-name">CSS3</div>
            </div>

            <div className="tech-item">
                <div className="tech-icon">
                {/* React.js */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <ellipse cx="12" cy="12" rx="6" ry="10"></ellipse>
                    <path d="M2 12c2-3 6-6 10-6s8 3 10 6c-2 3-6 6-10 6S4 15 2 12z"></path>
                </svg>
                </div>
                <div className="tech-name">React.js</div>
            </div>

            <div className="tech-item">
                <div className="tech-icon">
                {/* Flutter */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6L13 13l-3-3 6-6H4v16h16V6z"></path>
                </svg>
                </div>
                <div className="tech-name">Flutter</div>
            </div>

            <div className="tech-item">
                <div className="tech-icon">
                {/* UI/UX */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="12" rx="2"></rect>
                    <path d="M8 20h8M12 16v4"></path>
                </svg>
                </div>
                <div className="tech-name">UI / UX</div>
            </div>

            {/* Backend */}
            <div className="tech-item">
                <div className="tech-icon">
                {/* Node.js */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                </div>
                <div className="tech-name">Node.js / Express</div>
            </div>

            <div className="tech-item">
                <div className="tech-icon">
                {/* Spring Boot */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12l2 2 4-4"></path>
                </svg>
                </div>
                <div className="tech-name">Spring Boot (Java)</div>
            </div>

            <div className="tech-item">
                <div className="tech-icon">
                {/* PHP */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                    <path d="M7 9h2v6H7zm8 0h2v6h-2z"></path>
                </svg>
                </div>
                <div className="tech-name">PHP</div>
            </div>

            <div className="tech-item">
                <div className="tech-icon">
                {/* C# */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 3a9 9 0 1 0 0 18 9 9 0 1 0 0-18z"></path>
                    <path d="M10 9h4m-2-2v4"></path>
                </svg>
                </div>
                <div className="tech-name">C#</div>
            </div>

            {/* Databases */}
            <div className="tech-item">
                <div className="tech-icon">
                {/* MySQL */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path>
                </svg>
                </div>
                <div className="tech-name">MySQL</div>
            </div>

            <div className="tech-item">
                <div className="tech-icon">
                {/* MongoDB */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                </svg>
                </div>
                <div className="tech-name">MongoDB</div>
            </div>

            <div className="tech-item">
                <div className="tech-icon">
                {/* PostgreSQL */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 10h8v4H8z"></path>
                </svg>
                </div>
                <div className="tech-name">PostgreSQL</div>
            </div>

            {/* Other Tools */}
            <div className="tech-item">
                <div className="tech-icon">
                {/* Git */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M16 3l5 5-5 5M8 3l-5 5 5 5"></path>
                </svg>
                </div>
                <div className="tech-name">Git / GitHub</div>
            </div>

            <div className="tech-item">
                <div className="tech-icon">
                {/* REST APIs */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 9h16v6H4z"></path>
                    <path d="M9 3v3m6-3v3"></path>
                </svg>
                </div>
                <div className="tech-name">REST APIs</div>
            </div>

            </div>

      </header>

      {/* Projects Section */}
        <section id="projects" className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
            
            {/* Project Card 1 */}
            <div className="project-card">
            <div className="project-image">
                <img src="https://via.placeholder.com/400x200" alt="Customer Segmentation Platform" />
            </div>
            <div className="project-content">
                <div className="project-tags">
                <span className="project-tag">Python</span>
                <span className="project-tag">Flask</span>
                <span className="project-tag">React</span>
                <span className="project-tag">MongoDB</span>
                </div>
                <h3 className="project-title">Customer Segmentation Platform</h3>
                <p className="project-description">
                AI-driven segmentation tool with campaign launching and Paystack payment integration. 
                Features role-based authentication, dynamic charts, and payment processing.
                </p>
                <div className="project-footer">
                <a href="#" className="live-demo-btn" target="_blank" rel="noopener noreferrer" aria-label="Live demo - Customer Segmentation Platform">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                <a href="#" className="live-demo-btn" target="_blank" rel="noopener noreferrer" aria-label="Code - Customer Segmentation Platform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                </a>
                </div>
            </div>
            </div>

            {/* Project Card 2 */}
            <div className="project-card">
            <div className="project-image">
                <img src="https://via.placeholder.com/400x200" alt="AJ Mall E-Commerce Web App" />
            </div>
            <div className="project-content">
                <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Node.js</span>
                <span className="project-tag">MongoDB/MySQL</span>
                </div>
                <h3 className="project-title">AJ Mall E-Commerce Web App</h3>
                <p className="project-description">
                Online store for Airport Junction Mall with product listings, cart, and checkout. 
                Designed for smooth user experience and scalability.
                </p>
                <div className="project-footer">
                <a href="#" className="live-demo-btn" target="_blank" rel="noopener noreferrer" aria-label="Live demo - AJ Mall E-Commerce Web App">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                <a href="#" className="live-demo-btn" target="_blank" rel="noopener noreferrer" aria-label="Code - AJ Mall E-Commerce Web App">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                </a>
                </div>
            </div>
            </div>

            {/* Project Card 3 */}
            <div className="project-card">
            <div className="project-image">
                <img src="https://via.placeholder.com/400x200" alt="Buildmax Company Website" />
            </div>
            <div className="project-content">
                <div className="project-tags">
                <span className="project-tag">HTML5</span>
                <span className="project-tag">CSS3</span>
                <span className="project-tag">JavaScript</span>
                <span className="project-tag">PHP</span>
                </div>
                <h3 className="project-title">Buildmax Company Website</h3>
                <p className="project-description">
                Responsive business website for selling building materials. 
                Includes product catalog and modern UI/UX design.
                </p>
                <div className="project-footer">
                <a href="#" className="live-demo-btn" target="_blank" rel="noopener noreferrer" aria-label="Live demo - Buildmax Company Website">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                <a href="#" className="live-demo-btn" target="_blank" rel="noopener noreferrer" aria-label="Code - Buildmax Company Website">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                </a>
                </div>
            </div>
            </div>

            {/* Project Card 4 */}
            <div className="project-card">
            <div className="project-image">
                <img src="https://via.placeholder.com/400x200" alt="Farm Finance Management System" />
            </div>
            <div className="project-content">
                <div className="project-tags">
                <span className="project-tag">PHP</span>
                <span className="project-tag">MySQL</span>
                <span className="project-tag">FPDF</span>
                </div>
                <h3 className="project-title">Farm Finance Management System</h3>
                <p className="project-description">
                Web system for invoices, receipts, payroll, and reports. 
                Includes admin dashboard, CRUD features, and PDF generation.
                </p>
                <div className="project-footer">
                <a href="#" className="live-demo-btn" target="_blank" rel="noopener noreferrer" aria-label="Live demo - Farm Finance Management System">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                <a href="#" className="live-demo-btn" target="_blank" rel="noopener noreferrer" aria-label="Code - Farm Finance Management System">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                </a>
                </div>
            </div>
            </div>

            {/* Project Card 5 */}
            <div className="project-card">
            <div className="project-image">
                <img src="https://via.placeholder.com/400x200" alt="Java Online Banking System" />
            </div>
            <div className="project-content">
                <div className="project-tags">
                <span className="project-tag">Java</span>
                <span className="project-tag">MySQL</span>
                </div>
                <h3 className="project-title">Java Online Banking System</h3>
                <p className="project-description">
                Core banking simulation with account creation, deposits, withdrawals, and transfers.
                </p>
                <div className="project-footer">
                <a href="#" className="live-demo-btn" target="_blank" rel="noopener noreferrer" aria-label="Live demo - Java Online Banking System">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                <a href="#" className="live-demo-btn" target="_blank" rel="noopener noreferrer" aria-label="Code - Java Online Banking System">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                </a>
                </div>
            </div>
            </div>

            {/* Project Card 6 */}
            <div className="project-card">
            <div className="project-image">
                <img src="https://via.placeholder.com/400x200" alt="Appointment Booking System" />
            </div>
            <div className="project-content">
                <div className="project-tags">
                <span className="project-tag">Flutter</span>
                <span className="project-tag">Spring Boot</span>
                <span className="project-tag">MySQL</span>
                </div>
                <h3 className="project-title">Appointment Booking System</h3>
                <p className="project-description">
                Scheduling app for barbers, dressmakers, and other service providers. 
                Features calendar booking and user management.
                </p>
                <div className="project-footer">
                <a href="#" className="live-demo-btn" target="_blank" rel="noopener noreferrer" aria-label="Live demo - Appointment Booking System">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
                <a href="#" className="live-demo-btn" target="_blank" rel="noopener noreferrer" aria-label="Code - Appointment Booking System">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                </a>
                </div>
            </div>
            </div>

        </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="projects-section">
        <h2 className="section-title">My Skills</h2>
        <div className="projects-grid">
            
            {/* Frontend Skills */}
            <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">Frontend Development</h3>
                <p className="project-description">
                Skilled in building responsive, user-friendly, and visually engaging interfaces using modern frontend tools and frameworks.
                </p>
                <div className="project-tags">
                <span className="project-tag">HTML5</span>
                <span className="project-tag">CSS3</span>
                <span className="project-tag">JavaScript (ES6+)</span>
                <span className="project-tag">React.js</span>
                <span className="project-tag">Flutter</span>
                <span className="project-tag">UI/UX Design</span>
                <span className="project-tag">Tailwind CSS</span>
                </div>
            </div>
            </div>
            
            {/* Backend Skills */}
            <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">Backend Development</h3>
                <p className="project-description">
                Proficient in developing secure, scalable, and high-performance server-side applications and APIs.
                </p>
                <div className="project-tags">
                <span className="project-tag">Node.js</span>
                <span className="project-tag">Express</span>
                <span className="project-tag">Spring Boot (Java)</span>
                <span className="project-tag">PHP</span>
                <span className="project-tag">C#</span>
                <span className="project-tag">GraphQL</span>
                <span className="project-tag">REST APIs</span>
                </div>
            </div>
            </div>
            
            {/* Database & Integrations */}
            <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">Databases & Integrations</h3>
                <p className="project-description">
                Experience with relational and non-relational databases, third-party service integration, and advanced features.
                </p>
                <div className="project-tags">
                <span className="project-tag">MySQL</span>
                <span className="project-tag">PostgreSQL</span>
                <span className="project-tag">MongoDB</span>
                <span className="project-tag">Paystack</span>
                <span className="project-tag">Stripe</span>
                <span className="project-tag">PDF Generation</span>
                <span className="project-tag">AI-Powered Features</span>
                </div>
            </div>
            </div>

                {/* DevOps Skills */}
                <div className="project-card">
                    <div className="project-content">
                    <h3 className="project-title">DevOps & Deployment</h3>
                    <p className="project-description">
                        Experienced in continuous integration, deployment pipelines, and cloud infrastructure.
                    </p>
                    <div className="project-tags">
                        <span className="project-tag">Docker</span>
                        <span className="project-tag">AWS</span>
                        <span className="project-tag">CI/CD</span>
                        <span className="project-tag">Kubernetes</span>
                        <span className="project-tag">Git</span>
                        <span className="project-tag">GitHub Actions</span>
                    </div>
                    </div>
                </div>
        </div>
        </section>


        {/* Experience Section */}
        <section id="experience" className="projects-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="projects-grid">

            {/* Experience 1 */}
            <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">Software Developer Intern</h3>
                <div className="project-tags">
                <span className="project-tag">Duapa Werkspace</span>
                <span className="project-tag">2024 (6 Months)</span>
                </div>
                <p className="project-description">
                Developed and maintained web applications, collaborated with cross-functional teams, 
                and implemented payment integrations using Paystack and Stripe. 
                Improved UI/UX for client projects, ensuring responsive and accessible designs.
                </p>
            </div>
            </div>

            {/* Experience 2 */}
            <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">Software Developer Intern</h3>
                <div className="project-tags">
                <span className="project-tag">Qliq Integration</span>
                <span className="project-tag">2025 (6 Months)</span>
                </div>
                <p className="project-description">
                Contributed to backend development using Node.js and Spring Boot, 
                built RESTful APIs, and integrated AI-powered features. 
                Participated in code reviews and agile sprints, ensuring high-quality deliverables.
                </p>
            </div>
            </div>

            {/* Experience 3 */}
            <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">Academic Intution</h3>
                <div className="project-tags">
                <span className="project-tag">Takoradi Technical University</span>
                <span className="project-tag">2022 - 2026</span>
                </div>
                <p className="project-description">
                Designed and developed multiple academic projects, including a Java-based online 
                banking system, appointment booking app, and a university course management platform. 
                Focused on secure backend logic, user-friendly interfaces, and database optimization.
                </p>
            </div>
            </div>

            {/* Experience 4 */}
            <div className="project-card">
            <div className="project-content">
                <h3 className="project-title">Freelance Web Developer</h3>
                <div className="project-tags">
                <span className="project-tag">Self-Employed</span>
                <span className="project-tag">Ongoing</span>
                </div>
                <p className="project-description">
                Delivered custom websites and applications for small businesses, including the 
                Buildmax Company site. Worked end-to-end from concept to deployment, integrating 
                payment systems, CMS solutions, and responsive UI designs.
                </p>
            </div>
            </div>

        </div>
        </section>

    {/* Contact Section */}
    <section id="contact" className="projects-section">
    <h2 className="section-title">Get In Touch</h2>
    <div className="projects-grid">
        <div className="project-card" style={{gridColumn: 'span 2'}}>
        <div className="project-content">
            <p className="project-description">
            I'm always interested in new opportunities, collaborations, or just a friendly chat about web development. Feel free to reach out!
            </p>
            <div className="contact-info" style={{marginTop: '2rem'}}>
            <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:kwesilit@gmail.com" className="contact-link">kwesilit@gmail.com</a>
            </div>
            <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+233240064225" className="contact-link">+233 24 00 64 225</a>
            </div>
            <div className="contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Accra, Ghana</span>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    </>
  );
};

export default HomePage;