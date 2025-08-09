// SkillsPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './../../App.css'; // Import the CSS file

const SkillsPage = () => {
  const [animateSkills, setAnimateSkills] = useState(false);
  const skillsRef = useRef();

  useEffect(() => {
    // Animate skill progress bars
    const timer = setTimeout(() => {
      setAnimateSkills(true);
    }, 500);

    // Intersection Observer for fade-in animations
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);
    
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    return () => {
      clearTimeout(timer);
      appearOnScroll.disconnect();
    };
  }, []);

  const frontendSkills = [
    { name: 'React', progress: 95 },
    { name: 'TypeScript', progress: 90 },
    { name: 'Next.js', progress: 85 },
    { name: 'CSS/SASS', progress: 90 }
  ];

  const backendSkills = [
    { name: 'Node.js', progress: 90 },
    { name: 'Express', progress: 85 },
    { name: 'GraphQL', progress: 80 },
    { name: 'Python', progress: 75 }
  ];

  const databaseSkills = [
    { name: 'MongoDB', progress: 90 },
    { name: 'PostgreSQL', progress: 85 },
    { name: 'Redis', progress: 80 },
    { name: 'Firebase', progress: 85 }
  ];

  const devopsSkills = [
    { name: 'Docker', progress: 85 },
    { name: 'AWS', progress: 80 },
    { name: 'CI/CD', progress: 75 },
    { name: 'Vercel/Netlify', progress: 90 }
  ];

  const frontendBadges = ['Redux', 'Tailwind CSS', 'Styled Components', 'Jest', 'React Testing Library'];
  const backendBadges = ['REST APIs', 'Microservices', 'Serverless', 'Socket.io', 'Authentication'];
  const databaseBadges = ['Mongoose', 'Prisma', 'Data Modeling', 'Caching'];
  const devopsBadges = ['GitHub Actions', 'Kubernetes', 'Terraform', 'Monitoring'];

  const tools = [
    { name: 'Git', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    )},
    { name: 'VS Code', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14"></line>
        <line x1="4" y1="10" x2="4" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12" y2="3"></line>
        <line x1="20" y1="21" x2="20" y2="16"></line>
        <line x1="20" y1="12" x2="20" y2="3"></line>
        <line x1="1" y1="14" x2="7" y2="14"></line>
        <line x1="9" y1="8" x2="15" y2="8"></line>
        <line x1="17" y1="16" x2="23" y2="16"></line>
      </svg>
    )},
    { name: 'Webpack', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
        <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
        <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    )},
    { name: 'Postman', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )},
    { name: 'Analytics', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    )}
  ];

  const achievements = [
    { text: 'AWS Certified Developer', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )},
    { text: 'MongoDB Certified Developer', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )},
    { text: 'Google Cloud Certified', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )},
    { text: 'Hackathon Winner 2023', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
      </svg>
    )}
  ];

  const SkillItem = ({ skill }) => (
    <div className="skill-item">
      <div className="skill-name">{skill.name}</div>
      <div className="skill-bar">
        <div 
          className={`skill-progress ${animateSkills ? 'animate' : ''}`}
          style={{ '--progress': `${skill.progress}%` }}
        ></div>
      </div>
    </div>
  );

  const SkillBadge = ({ text }) => (
    <span className="skill-badge">{text}</span>
  );

  const ToolItem = ({ tool }) => (
    <div className="tool-item">
      <div className="tool-icon">
        {tool.icon}
      </div>
      <div className="tool-name">{tool.name}</div>
    </div>
  );

  const Achievement = ({ achievement }) => (
    <div className="achievement">
      <div className="achievement-icon">
        {achievement.icon}
      </div>
      <div>{achievement.text}</div>
    </div>
  );

  return (
    <section id="skills" className="skills-section" ref={skillsRef}>
      {/* Background shapes */}
      <div className="skill-shape shape-1"></div>
      <div className="skill-shape shape-2"></div>

      <h2 className="section-title fade-in">Skills & Expertise</h2>
      <p className="skills-intro fade-in">
        With over 5 years of experience in full-stack development, I've cultivated a diverse skillset that enables me to build complete, scalable applications from the ground up. My expertise spans front-end technologies, back-end systems, database management, and DevOps practices.
      </p>

      <div className="skills-container">
        {/* Frontend Skills */}
        <div className="skill-category fade-in">
          <h3 className="category-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            Frontend Development
          </h3>
          <div className="skill-list">
            {frontendSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
          <div className="skill-badges">
            {frontendBadges.map((badge, index) => (
              <SkillBadge key={index} text={badge} />
            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skill-category fade-in">
          <h3 className="category-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 10h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"></path>
            </svg>
            Backend Development
          </h3>
          <div className="skill-list">
            {backendSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
          <div className="skill-badges">
            {backendBadges.map((badge, index) => (
              <SkillBadge key={index} text={badge} />
            ))}
          </div>
        </div>

        {/* Database Skills */}
        <div className="skill-category fade-in">
          <h3 className="category-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
            Database & Data Management
          </h3>
          <div className="skill-list">
            {databaseSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
          <div className="skill-badges">
            {databaseBadges.map((badge, index) => (
              <SkillBadge key={index} text={badge} />
            ))}
          </div>
        </div>

        {/* DevOps Skills */}
        <div className="skill-category fade-in">
          <h3 className="category-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
              <line x1="6" y1="6" x2="6.01" y2="6"></line>
              <line x1="6" y1="18" x2="6.01" y2="18"></line>
            </svg>
            DevOps & Deployment
          </h3>
          <div className="skill-list">
            {devopsSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </div>
          <div className="skill-badges">
            {devopsBadges.map((badge, index) => (
              <SkillBadge key={index} text={badge} />
            ))}
          </div>
        </div>

        {/* Tools Category */}
        <div className="skill-category fade-in">
          <h3 className="category-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
            Tools & Utilities
          </h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <ToolItem key={index} tool={tool} />
            ))}
            <div className="tool-item">
              <div className="tool-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <div className="tool-name">Figma</div>
            </div>
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="skill-category fade-in">
          <h3 className="category-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            Certifications & Achievements
          </h3>
          <div className="achievements">
            {achievements.map((achievement, index) => (
              <Achievement key={index} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;