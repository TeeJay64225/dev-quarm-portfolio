// AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './../../App.css';
import profileImage from '../../assets/images/dev_quarm.jpeg';

const AboutPage = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
        </svg>
      ),
      items: ["HTML5 & CSS3", "React.js & Next.js", "TypeScript & JavaScript (ES6+)", "Tailwind CSS & SCSS", "UI/UX Design", "Flutter (Mobile UI)"]
    },
    {
      title: "Backend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      items: ["Node.js & Express", "Spring Boot (Java)", "PHP", "MongoDB & MySQL", "REST APIs & GraphQL", "Authentication & Security"]
    },
    {
      title: "Tools & Deployment",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      items: ["Git & GitHub", "Docker", "Vercel & Netlify", "AWS Basics", "CI/CD Pipelines", "Testing (Jest, Cypress)"]
    },
    {
      title: "Core Strengths",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
      items: ["Problem Solving", "User-Centered Thinking", "Performance Optimization", "Collaboration & Communication", "Agile Workflows"]
    }
  ];

  const abouttimelineItems = [
    {
      date: "2022",
      title: "The Beginning",
      description: "Started my coding journey with HTML, CSS, and JavaScript, building small interactive websites and learning UI/UX fundamentals.",
      side: "left"
    },
    {
      date: "2023",
      title: "Going Full-Stack",
      description: "Learned Node.js, Express, and databases, allowing me to create complete web applications from scratch.",
      side: "right"
    },
    {
      date: "2024",
      title: "Mobile & Advanced Web",
      description: "Added Flutter for cross-platform mobile apps, integrated payment systems, and worked on complex dashboards.",
      side: "left"
    },
    {
      date: "2025",
      title: "Freelance & Growth",
      description: "Began freelancing, delivering projects with role-based authentication, AI integrations, and high-performance architectures.",
      side: "right"
    },
    {
      date: "Present",
      title: "Crafting Experiences",
      description: "Focused on creating functional, scalable, and beautiful digital solutions for clients worldwide.",
      side: "left"
    }
  ];

  return (
    <>
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="about-header">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            I’m <span className="highlight">Dev_Quarm</span>, a passionate full-stack developer blending clean code, modern design, and user-focused solutions.
          </p>
        </div>

        {/* Bio */}
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src={profileImage} alt="Dev Quarm Profile" />
              <div className="image-border"></div>
            </div>
          </div>
          <div className="about-bio">
            <h2 className="bio-title">Who is Dev Quarm?</h2>
            <p>
              I’m a <span className="highlight">full-stack developer</span> with experience building applications across web and mobile platforms.
            </p>
            <p>
              My expertise spans **frontend (React, Flutter)** and **backend (Node.js, Spring Boot, PHP)** with a focus on performance, scalability, and accessibility.
            </p>
            <p>
              I believe development is more than code — it’s about crafting digital experiences that delight and empower users.
            </p>
                        <p className="bio-text">
              What sets me apart is my <span className="highlight">holistic approach to development</span>. I believe great applications are built at the intersection of clean code, beautiful design, and thoughtful user experience. I don't just build features — I create solutions that solve real problems for users while maintaining high standards of performance and accessibility.
            </p>
            <p className="bio-text">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring junior developers. I'm also an avid hiker and amateur photographer who finds inspiration in nature and urban landscapes alike.
            </p>
            <div className="stats-container">
              <div className="stat-item"><div className="stat-number">2+</div><div className="stat-label">Years Experience</div></div>
              <div className="stat-item"><div className="stat-number">50+</div><div className="stat-label">Projects</div></div>
              <div className="stat-item"><div className="stat-number">10+</div><div className="stat-label">Clients</div></div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h2 className="section-title">My Expertise</h2>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="skill-title">{skill.title}</h3>
                </div>
                <ul className="skill-list">
                  {skill.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Journey */}
        <div className="journey-section">
          <h2 className="section-title">My Journey</h2>
          <div className="abouttimeline">
            {abouttimelineItems.map((item, index) => (
              <div key={index} className={`abouttimeline-item ${item.side}`}>
                <div className="abouttimeline-content">
                  <div className="abouttimeline-date">{item.date}</div>
                  <h3 className="abouttimeline-title">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="cta-section">
          <h2>Let’s Build Something Amazing</h2>
          <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
