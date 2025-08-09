//ProjectsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../../App.css'; // Import the CSS file

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Full Stack', 'Mobile', 'UI/UX'];

  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales forecasting using AI.",
      tags: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/400x200",
      category: "Full Stack",
      featured: true,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "WanderWise Travel App",
      description: "A mobile application for travelers to discover hidden gems, create personalized itineraries, and connect with local guides.",
      tags: ["React Native", "Firebase", "Google Maps API"],
      image: "https://via.placeholder.com/400x200",
      category: "Mobile",
      featured: false,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "FinTrack Budget App",
      description: "A personal finance application that helps users track expenses, set budget goals, and visualize spending patterns with interactive charts.",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/400x200",
      category: "Full Stack",
      featured: false,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "AI Chat Platform",
      description: "An intelligent conversation platform that leverages natural language processing to provide personalized assistance and content generation.",
      tags: ["Next.js", "OpenAI API", "WebSockets"],
      image: "https://via.placeholder.com/400x200",
      category: "Full Stack",
      featured: true,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "HealthTrack App",
      description: "A cross-platform health and fitness application that tracks workouts, nutrition, and provides personalized recommendations.",
      tags: ["Flutter", "GraphQL", "AWS"],
      image: "https://via.placeholder.com/400x200",
      category: "Mobile",
      featured: false,
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "EduConnect Platform",
      description: "An online learning platform with interactive courses, progress tracking, and community forums for students and educators.",
      tags: ["Angular", "Django", "Docker"],
      image: "https://via.placeholder.com/400x200",
      category: "Full Stack",
      featured: false,
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <>
      {/* Background Shapes */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my work as a full-stack developer. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Project Filters */}
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              {project.featured && (
                <div className="featured-badge">Featured</div>
              )}
              
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-footer">
                  <a href={project.liveUrl} className="live-demo-btn">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a href={project.codeUrl} className="live-demo-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;