//AboutPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './../../App.css'; // Import the CSS file

// About page component
const AboutPage = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
          <line x1="12" y1="22" x2="12" y2="15.5"></line>
          <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
        </svg>
      ),
      items: ["React & Next.js", "TypeScript", "CSS/SCSS & Tailwind", "Redux & Context API", "Responsive Design"]
    },
    {
      title: "Backend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      items: ["Node.js & Express", "MongoDB & PostgreSQL", "GraphQL & REST APIs", "Authentication & Security", "Serverless Functions"]
    },
    {
      title: "DevOps & Tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      ),
      items: ["Git & GitHub Actions", "Docker & Kubernetes", "AWS & Vercel", "CI/CD Pipelines", "Testing (Jest, Cypress)"]
    },
    {
      title: "Soft Skills",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      ),
      items: ["Problem Solving", "Technical Communication", "Team Collaboration", "Product Thinking", "Agile Methodologies"]
    }
  ];

  const abouttimelineItems = [
    {
      date: "2018",
      title: "Started Coding Journey",
      description: "Graduated with a Computer Science degree and began my first role as a junior frontend developer at a tech startup.",
      side: "left"
    },
    {
      date: "2019",
      title: "Full-Stack Transition",
      description: "Expanded my skills to include backend development with Node.js and began building complete web applications.",
      side: "right"
    },
    {
      date: "2020",
      title: "Senior Developer Role",
      description: "Promoted to Senior Developer, leading projects and mentoring junior team members while specializing in React ecosystems.",
      side: "left"
    },
    {
      date: "2022",
      title: "Freelance & Consulting",
      description: "Started my own freelance practice, working with clients across industries to deliver custom web solutions.",
      side: "right"
    },
    {
      date: "Present",
      title: "Building Digital Experiences",
      description: "Currently focused on creating accessible, performant, and beautiful digital experiences for clients worldwide.",
      side: "left"
    }
  ];

  return (
    <>
      {/* Background Shapes */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container">
        {/* About Header */}
        <div className="about-header">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">
            Get to know me better - my journey, skills, and what drives me as a full-stack developer dedicated to creating exceptional digital experiences.
          </p>
        </div>

        {/* About Content */}
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src="https://via.placeholder.com/400x400/6B46C1/FFFFFF?text=About+Dev" alt="Dev Quarm Working" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              <div className="image-border"></div>
            </div>
          </div>
          <div className="about-bio">
            <h2 className="bio-title">Who is Dev Quarm?</h2>
            <p className="bio-text">
              I'm a <span className="highlight">passionate full-stack developer</span> with over 5 years of experience building modern web applications. My journey began with a fascination for how digital products shape our daily lives, which led me to pursue a degree in Computer Science and eventually specialize in web development.
            </p>
            <p className="bio-text">
              What sets me apart is my <span className="highlight">holistic approach to development</span>. I believe great applications are built at the intersection of clean code, beautiful design, and thoughtful user experience. I don't just build features — I create solutions that solve real problems for users while maintaining high standards of performance and accessibility.
            </p>
            <p className="bio-text">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or mentoring junior developers. I'm also an avid hiker and amateur photographer who finds inspiration in nature and urban landscapes alike.
            </p>

            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <h2 className="section-title">My Expertise</h2>
          <p className="section-subtitle">
            I've honed my skills across the full development stack, focusing on creating scalable, maintainable, and user-friendly applications.
          </p>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <h3 className="skill-title">{skill.title}</h3>
                </div>
                <ul className="skill-list">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Section */}
        <div className="journey-section">
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            The path that led me to where I am today as a full-stack developer.
          </p>

          <div className="abouttimeline">
            {abouttimelineItems.map((item, index) => (
              <div key={index} className={`abouttimeline-item ${item.side}`}>
                <div className="abouttimeline-content">
                  <div className="abouttimeline-date">{item.date}</div>
                  <h3 className="abouttimeline-title">{item.title}</h3>
                  <p className="abouttimeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2 className="cta-title">Interested in working together?</h2>
          <Link to="/contact" className="btn btn-primary">Let's Connect</Link>
        </div>
      </div>
    </>
  );
};

export default AboutPage;