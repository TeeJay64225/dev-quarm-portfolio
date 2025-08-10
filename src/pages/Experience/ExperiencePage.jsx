import React from 'react';
import { Link } from 'react-router-dom';
import './../../App.css'; // Import the CSS file

const ExperiencePage = () => {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Experience</h2>
          <p className="section-subtitle">A timeline of my professional journey, showcasing my growth as a full-stack developer</p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-date">Ongoing</span>
              <h3 className="timeline-title">Freelance Web Developer</h3>
              <h4 className="timeline-company">Self-Employed</h4>
              <p className="timeline-desc">Delivered custom websites and applications for small businesses, including the Buildmax Company site. Working end-to-end from concept to deployment, integrating payment systems, CMS solutions, and responsive UI designs.</p>
              <div className="timeline-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">PHP</span>
                <span className="tech-badge">MySQL</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-date">2025 (6 Months)</span>
              <h3 className="timeline-title">Software Developer Intern</h3>
              <h4 className="timeline-company">Qliq Integration</h4>
              <p className="timeline-desc">Contributing to backend development using Node.js and Spring Boot, building RESTful APIs, and integrating AI-powered features. Participating in code reviews and agile sprints, ensuring high-quality deliverables.</p>
              <div className="timeline-tech">
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Spring Boot</span>
                <span className="tech-badge">RESTful APIs</span>
                <span className="tech-badge">Java</span>
                <span className="tech-badge">AI Integration</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-date">2024 (6 Months)</span>
              <h3 className="timeline-title">Software Developer Intern</h3>
              <h4 className="timeline-company">Duapa Werkspace</h4>
              <p className="timeline-desc">Developed and maintained web applications, collaborated with cross-functional teams, and implemented payment integrations using Paystack and Stripe. Improved UI/UX for client projects, ensuring responsive and accessible designs.</p>
              <div className="timeline-tech">
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Paystack</span>
                <span className="tech-badge">Stripe</span>
                <span className="tech-badge">UI/UX</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-date">2022 - 2026</span>
              <h3 className="timeline-title">Academic Projects</h3>
              <h4 className="timeline-company">Takoradi Technical University</h4>
              <p className="timeline-desc">Designed and developed multiple academic projects, including a Java-based online banking system, appointment booking app, and a university course management platform. Focused on secure backend logic, user-friendly interfaces, and database optimization.</p>
              <div className="timeline-tech">
                <span className="tech-badge">Java</span>
                <span className="tech-badge">Spring Boot</span>
                <span className="tech-badge">MySQL</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">Database Design</span>
              </div>
            </div>
          </div>
        </div>

        <div className="experience-skills-container">
          <h3 className="experience-skills-title">Technical Skills</h3>
          <div className="experience-skills-grid">
            <div className="experience-skill-card">
              <div className="experience-skill-header">
                <div className="experience-skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h4 className="experience-skill-name">Frontend</h4>
              </div>
              <ul className="experience-skill-list">
                <li>React, Next.js, Vue.js</li>
                <li>JavaScript, TypeScript</li>
                <li>HTML5, CSS3, SCSS</li>
                <li>Tailwind CSS, Material UI</li>
                <li>Redux, Context API</li>
              </ul>
            </div>

            <div className="experience-skill-card">
              <div className="experience-skill-header">
                <div className="experience-skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <h4 className="experience-skill-name">Backend</h4>
              </div>
              <ul className="experience-skill-list">
                <li>Node.js, Express</li>
                <li>MongoDB, PostgreSQL</li>
                <li>GraphQL, REST APIs</li>
                <li>Firebase, Supabase</li>
                <li>Authentication & Authorization</li>
              </ul>
            </div>

            <div className="experience-skill-card">
              <div className="experience-skill-header">
                <div className="experience-skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 16 12 12 8 16"></polyline>
                    <line x1="12" y1="12" x2="12" y2="21"></line>
                    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                    <polyline points="16 16 12 12 8 16"></polyline>
                  </svg>
                </div>
                <h4 className="experience-skill-name">DevOps & Tools</h4>
              </div>
              <ul className="experience-skill-list">
                <li>Git, GitHub Actions</li>
                <li>Docker, Kubernetes</li>
                <li>AWS, Firebase, Vercel</li>
                <li>CI/CD Pipelines</li>
                <li>Testing (Jest, Cypress)</li>
              </ul>
            </div>

            <div className="experience-skill-card">
              <div className="experience-skill-header">
                <div className="experience-skill-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                </div>
                <h4 className="experience-skill-name">Design & Others</h4>
              </div>
              <ul className="experience-skill-list">
                <li>UI/UX Fundamentals</li>
                <li>Figma, Adobe XD</li>
                <li>Responsive Design</li>
                <li>Performance Optimization</li>
                <li>Accessibility (WCAG)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="education-container">
          <h3 className="skills-title">Education</h3>   
          <div className="education-card">
            <div className="education-date">2022 - 2026</div>
            <h3 className="education-degree">Bachelor of Science in Computer Science</h3>
            <h4 className="education-school">Takoradi Technical University (TTU)</h4>
            <p className="education-desc">Specialized in Web Development and Software Engineering. Graduated with honors and participated in multiple internship Programs, Participating in multiple projects and the university's semester coding projects 2022 - 2026.</p>
          </div>
          <div className="education-card">
            <div className="education-date">2026</div>
            <h3 className="education-degree">Software Developer Certification</h3>
            <h4 className="education-school">Frontend Masters</h4>
            <h4 className="education-school">Backend Masters</h4>
            <p className="education-desc">Completed intensive training on building scalable applications with React, REST APIs, and modern state management techniques.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;