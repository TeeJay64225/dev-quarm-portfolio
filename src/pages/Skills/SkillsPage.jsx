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
    { name: 'React.js', progress: 95 },
    { name: 'JavaScript (ES6+)', progress: 92 },
    { name: 'HTML5', progress: 98 },
    { name: 'CSS3', progress: 95 },
    { name: 'Flutter', progress: 88 },
    { name: 'Tailwind CSS', progress: 90 }
  ];

  const backendSkills = [
    { name: 'Node.js', progress: 90 },
    { name: 'Express', progress: 88 },
    { name: 'Spring Boot (Java)', progress: 85 },
    { name: 'PHP', progress: 80 },
    { name: 'C#', progress: 75 },
    { name: 'GraphQL', progress: 82 }
  ];

  const databaseSkills = [
    { name: 'MySQL', progress: 90 },
    { name: 'PostgreSQL', progress: 88 },
    { name: 'MongoDB', progress: 85 }
  ];

  const devopsSkills = [
    { name: 'Docker', progress: 85 },
    { name: 'AWS', progress: 82 },
    { name: 'Kubernetes', progress: 78 },
    { name: 'CI/CD', progress: 85 },
    { name: 'Git', progress: 95 }
  ];

  const frontendBadges = ['UI/UX Design', 'Responsive Design', 'Single Page Applications', 'Component Architecture', 'Mobile Development'];
  const backendBadges = ['REST APIs', 'API Design', 'Microservices', 'Authentication', 'Server Architecture'];
  const databaseBadges = ['Database Design', 'Query Optimization', 'Data Modeling', 'ACID Properties'];
  const devopsBadges = ['GitHub Actions', 'Container Orchestration', 'Cloud Infrastructure', 'Automated Testing'];

  const integrationSkills = [
    { name: 'Paystack Integration', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
        <line x1="1" y1="10" x2="23" y2="10"></line>
      </svg>
    )},
    { name: 'Stripe Integration', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
        <path d="m2 7 10 6 10-6"></path>
      </svg>
    )},
    { name: 'PDF Generation', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )},
    { name: 'AI-Powered Features', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .98 1 1.72 0 .74-.4 1.38-1 1.73V15a2 2 0 0 1-2 2h-4v1.27c.6.35 1 .98 1 1.73a2 2 0 1 1-4 0c0-.75.4-1.38 1-1.73V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.98-1-1.72 0-.74.4-1.38 1-1.73V9a2 2 0 0 1 2-2h4V5.73c-.6-.35-1-.98-1-1.73a2 2 0 0 1 2-2z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    )}
  ];

  const tools = [
    { name: 'Git', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    )},
    { name: 'VS Code', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 3 21 8 8 21 3 16 16 3"></polyline>
      </svg>
    )},
    { name: 'Docker', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      </svg>
    )},
    { name: 'GitHub Actions', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 1v6m0 6v6"></path>
        <path d="m15.07 4.93 4.24 4.24"></path>
        <path d="M4.93 15.07 9.17 19.31"></path>
        <path d="m1 12 6 0m6 0 6 0"></path>
        <path d="m4.93 8.93 4.24-4.24"></path>
        <path d="m15.07 19.07 4.24-4.24"></path>
      </svg>
    )},
    { name: 'AWS', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
        <line x1="4" y1="22" x2="4" y2="15"></line>
      </svg>
    )},
    { name: 'Figma', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
        <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
        <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
        <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
        <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
      </svg>
    )}
  ];

  const achievements = [
    { text: 'Full-Stack Developer', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    )},
    { text: 'Mobile App Developer', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    )},
    { text: 'API Integration Specialist', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    )},
    { text: 'Cloud Infrastructure', icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
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

  const IntegrationItem = ({ integration }) => (
    <div className="integration-item">
      <div className="integration-icon">
        {integration.icon}
      </div>
      <div className="integration-name">{integration.name}</div>
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
        Passionate full-stack developer with expertise in building scalable web and mobile applications. 
        I specialize in modern frontend frameworks, robust backend systems, and seamless third-party integrations 
        to deliver complete digital solutions.
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
          <p className="category-description">
            Skilled in building responsive, user-friendly, and visually engaging interfaces using modern frontend tools and frameworks.
          </p>
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
          <p className="category-description">
            Proficient in developing secure, scalable, and high-performance server-side applications and APIs.
          </p>
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
            Databases & Data Management
          </h3>
          <p className="category-description">
            Experience with relational and non-relational databases, ensuring optimal data storage and retrieval.
          </p>
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
          <p className="category-description">
            Experienced in continuous integration, deployment pipelines, and cloud infrastructure management.
          </p>
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

        {/* Integrations & Special Features */}
        <div className="skill-category fade-in">
          <h3 className="category-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v6"></path>
              <path d="M12 16v6"></path>
              <path d="M4.93 4.93l4.24 4.24"></path>
              <path d="m14.83 14.83 4.24 4.24"></path>
              <path d="M2 12h6"></path>
              <path d="M16 12h6"></path>
              <path d="m4.93 19.07 4.24-4.24"></path>
              <path d="m14.83 9.17 4.24-4.24"></path>
            </svg>
            Integrations & Advanced Features
          </h3>
          <p className="category-description">
            Specialized in third-party service integration and implementing advanced features like AI-powered functionality.
          </p>
          <div className="integrations-grid">
            {integrationSkills.map((integration, index) => (
              <IntegrationItem key={index} integration={integration} />
            ))}
          </div>
        </div>

        {/* Tools Category */}
        <div className="skill-category fade-in">
          <h3 className="category-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
            Development Tools & Utilities
          </h3>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <ToolItem key={index} tool={tool} />
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <div className="skill-category fade-in">
          <h3 className="category-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            Expertise Areas
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