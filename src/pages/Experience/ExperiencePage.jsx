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
              <span className="timeline-date">2023 - Present</span>
              <h3 className="timeline-title">Senior Full-Stack Developer</h3>
              <h4 className="timeline-company">TechNova Solutions</h4>
              <p className="timeline-desc">Leading development of enterprise-level web applications with a focus on scalability and performance optimization. Mentoring junior developers and implementing best practices across the team.</p>
              <div className="timeline-tech">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">GraphQL</span>
                <span className="tech-badge">AWS</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-date">2021 - 2023</span>
              <h3 className="timeline-title">Full-Stack Developer</h3>
              <h4 className="timeline-company">Digital Harmony Inc.</h4>
              <p className="timeline-desc">Developed and maintained multiple client projects using the MERN stack. Implemented CI/CD pipelines and contributed to the company's internal component library.</p>
              <div className="timeline-tech">
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Express</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Docker</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-date">2020 - 2021</span>
              <h3 className="timeline-title">Frontend Developer</h3>
              <h4 className="timeline-company">Webflow Creatives</h4>
              <p className="timeline-desc">Designed and built responsive user interfaces for e-commerce and corporate websites. Collaborated with UX designers to implement pixel-perfect designs and animations.</p>
              <div className="timeline-tech">
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">SCSS</span>
                <span className="tech-badge">Figma</span>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-date">2019 - 2020</span>
              <h3 className="timeline-title">Junior Web Developer</h3>
              <h4 className="timeline-company">CodeCraft Studio</h4>
              <p className="timeline-desc">Started my professional journey building websites and small web applications. Gained experience in various technologies while working on client projects under senior guidance.</p>
              <div className="timeline-tech">
                <span className="tech-badge">HTML/CSS</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">PHP</span>
                <span className="tech-badge">MySQL</span>
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
            <div className="education-date">2016 - 2019</div>
            <h3 className="education-degree">Bachelor of Science in Computer Science</h3>
            <h4 className="education-school">University of Technology</h4>
            <p className="education-desc">Specialized in Web Development and Software Engineering. Graduated with honors and participated in multiple hackathons, winning the university's annual coding competition in 2018.</p>
          </div>
          <div className="education-card">
            <div className="education-date">2022</div>
            <h3 className="education-degree">Advanced React & GraphQL Certification</h3>
            <h4 className="education-school">Frontend Masters</h4>
            <p className="education-desc">Completed intensive training on building scalable applications with React, GraphQL, and modern state management techniques.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;