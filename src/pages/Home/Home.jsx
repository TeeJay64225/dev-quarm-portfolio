//Home.jsx
import React, { useState, useEffect } from 'react';

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
              I build exceptional digital experiences that combine beautiful front-end interfaces with powerful back-end solutions.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
            <div className="social-links">
              <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-img">
              <img src="https://via.placeholder.com/300x300" alt="Developer Profile" />
            </div>
          </div>
        </div>

        <div className="tech-stack">
          <div className="tech-item">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div className="tech-name">React</div>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div className="tech-name">Node.js</div>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div className="tech-name">MongoDB</div>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
              </svg>
            </div>
            <div className="tech-name">GraphQL</div>
          </div>
          <div className="tech-item">
            <div className="tech-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>
            </div>
            <div className="tech-name">TypeScript</div>
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
              <img src="https://via.placeholder.com/400x200" alt="E-commerce Dashboard" />
            </div>
            <div className="project-content">
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Redux</span>
                <span className="project-tag">Node.js</span>
              </div>
              <h3 className="project-title">E-commerce Dashboard</h3>
              <p className="project-description">
                A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and order processing capabilities. Integrated with payment gateways.
              </p>
              <div className="project-footer">
                <a href="#" className="live-demo-btn">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a href="#" className="live-demo-btn">
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
              <img src="https://via.placeholder.com/400x200" alt="Task Management App" />
            </div>
            <div className="project-content">
              <div className="project-tags">
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">MERN Stack</span>
                <span className="project-tag">MongoDB</span>
              </div>
              <h3 className="project-title">Task Management App</h3>
              <p className="project-description">
                Collaborative task management platform with real-time updates, team workspaces, and advanced filtering capabilities. Features drag-and-drop UI and activity tracking.
              </p>
              <div className="project-footer">
                <a href="#" className="live-demo-btn">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a href="#" className="live-demo-btn">
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
              <img src="https://via.placeholder.com/400x200" alt="Health & Fitness App" />
            </div>
            <div className="project-content">
              <div className="project-tags">
                <span className="project-tag">React Native</span>
                <span className="project-tag">Firebase</span>
                <span className="project-tag">GraphQL</span>
              </div>
              <h3 className="project-title">Health & Fitness App</h3>
              <p className="project-description">
                Mobile application for fitness tracking with personalized workout plans, nutrition tracking, and progress visualization. Integrates with wearable devices.
              </p>
              <div className="project-footer">
                <a href="#" className="live-demo-btn">
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <a href="#" className="live-demo-btn">
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
                Expert in creating responsive, accessible, and visually appealing user interfaces using modern frontend technologies.
              </p>
              <div className="project-tags">
                <span className="project-tag">React</span>
                <span className="project-tag">Vue.js</span>
                <span className="project-tag">Angular</span>
                <span className="project-tag">TypeScript</span>
                <span className="project-tag">SASS/SCSS</span>
                <span className="project-tag">Tailwind CSS</span>
              </div>
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Backend Development</h3>
              <p className="project-description">
                Proficient in building scalable, secure, and performant backend systems and RESTful APIs.
              </p>
              <div className="project-tags">
                <span className="project-tag">Node.js</span>
                <span className="project-tag">Express</span>
                <span className="project-tag">Python</span>
                <span className="project-tag">Django</span>
                <span className="project-tag">GraphQL</span>
                <span className="project-tag">MongoDB</span>
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
              <h3 className="project-title">Senior Full Stack Developer</h3>
              <div className="project-tags">
                <span className="project-tag">TechFusion Inc.</span>
                <span className="project-tag">2021 - Present</span>
              </div>
              <p className="project-description">
                Lead development of enterprise SaaS applications, managing a team of 5 developers. Implemented microservices architecture that increased system reliability by 40% and reduced deployment times by 60%.
              </p>
            </div>
          </div>
          
          {/* Experience 2 */}
          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Frontend Developer</h3>
              <div className="project-tags">
                <span className="project-tag">InnovateSoft</span>
                <span className="project-tag">2018 - 2021</span>
              </div>
              <p className="project-description">
                Designed and implemented responsive web applications for clients across various industries. Collaborated with UX designers to create seamless user experiences and implement accessibility standards.
              </p>
            </div>
          </div>
          
          {/* Experience 3 */}
          <div className="project-card">
            <div className="project-content">
              <h3 className="project-title">Web Developer Intern</h3>
              <div className="project-tags">
                <span className="project-tag">StartupHub</span>
                <span className="project-tag">2017 - 2018</span>
              </div>
              <p className="project-description">
                Assisted in developing web applications using HTML, CSS, and JavaScript. Participated in code reviews and gained experience with version control systems and agile development methodologies.
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
                  <span>dev.quarm@example.com</span>
                </div>
                <div className="contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="contact-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>San Francisco, CA</span>
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