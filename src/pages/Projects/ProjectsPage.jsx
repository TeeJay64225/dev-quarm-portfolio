// ProjectsPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './../../App.css'; // Import the CSS file

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Full Stack', 'Mobile', 'UI/UX'];

  const projects = [
    {
      id: 1,
      title: "Portfolio Website (Dev_Quarm)",
      description: "My personal portfolio built with React, showcasing my skills, projects, and experience with a modern, responsive design.",
      tags: ["React", "HTML5", "CSS3", "UI/UX"],
      image: "/images/portfolio.jpg",
      category: "Frontend",
      featured: true,
      liveUrl: "https://devquarm.netlify.app/",
      codeUrl: "https://github.com/TeeJay64225/portfolio"
    },
    {
      id: 2,
      title: "QuarmShop E-commerce",
      description: "A fully functional e-commerce platform with product listings, cart, authentication, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: "/images/quarmshop.jpg",
      category: "Full Stack",
      featured: true,
      liveUrl: "https://quarmshop.netlify.app/",
      codeUrl: "https://github.com/TeeJay64225/quarmshop"
    },
    {
      id: 3,
      title: "TaskFlow App",
      description: "A productivity and task management app allowing users to organize projects, set deadlines, and track progress.",
      tags: ["React Native", "Firebase", "UI/UX"],
      image: "/images/taskflow.jpg",
      category: "Mobile",
      featured: false,
      liveUrl: "#",
      codeUrl: "https://github.com/TeeJay64225/taskflow"
    },
    {
      id: 4,
      title: "HealthTrack",
      description: "A fitness and wellness tracking platform with workout logging, nutrition tracking, and progress analytics.",
      tags: ["Flutter", "GraphQL", "AWS"],
      image: "/images/healthtrack.jpg",
      category: "Mobile",
      featured: false,
      liveUrl: "#",
      codeUrl: "https://github.com/TeeJay64225/healthtrack"
    },
    {
      id: 5,
      title: "EduConnect",
      description: "An online learning platform with interactive courses, progress tracking, and community discussion forums.",
      tags: ["Angular", "Django", "Docker"],
      image: "/images/educonnect.jpg",
      category: "Full Stack",
      featured: false,
      liveUrl: "#",
      codeUrl: "https://github.com/TeeJay64225/educonnect"
    },
    {
      id: 6,
      title: "UI/UX Case Studies",
      description: "A collection of my UI/UX designs and prototypes created in Figma, focused on usability and modern aesthetics.",
      tags: ["Figma", "UI/UX", "Prototyping"],
      image: "/images/uiux.jpg",
      category: "UI/UX",
      featured: false,
      liveUrl: "https://www.behance.net/dev_quarm",
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
                  <a href={project.liveUrl} className="live-demo-btn" target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  {project.codeUrl && (
                    <a href={project.codeUrl} className="live-demo-btn" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Code
                    </a>
                  )}
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
