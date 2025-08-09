import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isMenuOpen, toggleMenu, toggleTheme }) => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  const navigationItems = [
    { path: '/', label: 'Home', icon: 'home' },
    { path: '/about', label: 'About', icon: 'person' },
    { path: '/projects', label: 'Projects', icon: 'work' },
    { path: '/skills', label: 'Skills', icon: 'star' },
    { path: '/experience', label: 'Experience', icon: 'timeline' },
    { path: '/contact', label: 'Contact', icon: 'mail' }
  ];

  // Add handleNavClick to navigate and close menu
  const handleNavClick = (path) => {
    // Use react-router navigation if available
    if (typeof window !== "undefined" && window.history) {
      window.history.pushState({}, '', path);
      // Optionally trigger a navigation event if needed
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    toggleMenu();
  };

  return (
    <>
      <style jsx>{`
        /* Import Material Icons */
        @import url('https://fonts.googleapis.com/css2?family=Material+Icons');
        
        /* Desktop Header Styles */
        .desktop-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 1.5rem;
          background: rgba(26, 32, 44, 0.8);
          backdrop-filter: blur(8px);
        }

        .desktop-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--primary-light, #9F7AEA);
        }

        .highlight {
          color: var(--primary-light, #9F7AEA);
        }

        .desktop-menu {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .desktop-menu li a {
          text-decoration: none;
          color: var(--light, #F7FAFC);
          font-weight: 500;
          transition: color 0.3s ease;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
        }

        .desktop-menu li a:hover {
          color: var(--primary-light, #9F7AEA);
        }

        .desktop-menu li a.active {
          color: var(--primary-light, #9F7AEA);
          font-weight: 600;
        }

        .desktop-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .hire-btn {
          background-color: var(--primary, #6B46C1);
          color: white;
          padding: 0.5rem 1.2rem;
          border-radius: 0.25rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .hire-btn:hover {
          background-color: var(--primary-dark, #553C9A);
          transform: translateY(-2px);
        }

        .theme-toggle {
          background: transparent;
          border: none;
          color: var(--light, #F7FAFC);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        /* Mobile Bottom Navigation */
        .mobile-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
        }

        .mobile-nav-container {
          background-color: var(--secondary, #2D3748);
          border-top: 2px solid var(--primary, #6B46C1);
          border-radius: 1.5rem 1.5rem 0 0;
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
          padding: 0.5rem 1rem 1.5rem;
        }

        .mobile-nav-grid {
          display: flex;
          justify-content: space-around;
          align-items: center;
          position: relative;
          padding: 0 1rem;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0.25rem;
          color: var(--gray, #A0AEC0);
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 0.5rem;
          flex: 1;
          max-width: 4rem;
        }

        .nav-item:hover {
          color: var(--primary-light, #9F7AEA);
          transform: translateY(-2px);
        }

        .nav-item.active {
          color: var(--primary, #6B46C1);
        }

        .nav-item.active .nav-text {
          font-weight: bold;
        }

        .nav-item.active .active-dot {
          background-color: var(--primary, #6B46C1);
        }

        .nav-icon {
          font-size: 1.5rem;
        }

        .nav-text {
          font-size: 0.75rem;
          white-space: nowrap;
        }

        .active-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          margin-top: 2px;
        }

        .center-button {
          position: absolute;
          top: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, var(--primary, #6B46C1), var(--primary-dark, #553C9A));
          color: white;
          border: none;
          border-radius: 50%;
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(107, 70, 193, 0.4);
          transition: all 0.3s ease;
          cursor: pointer;
          z-index: 10;
        }

        .center-button:hover {
          background: linear-gradient(135deg, var(--primary-light, #9F7AEA), var(--primary, #6B46C1));
          transform: translateX(-50%) translateY(-2px);
          box-shadow: 0 6px 25px rgba(107, 70, 193, 0.5);
        }

        .center-icon {
          font-size: 1.75rem;
        }

        /* Mobile Menu Overlay */
        .mobile-overlay {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(26, 32, 44, 0.95);
          backdrop-filter: blur(8px);
          z-index: 200;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }

        .mobile-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          gap: 2rem;
        }

        .mobile-menu-item {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--light, #F7FAFC);
          text-decoration: none;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }

        .mobile-menu-item:hover,
        .mobile-menu-item.active {
          color: var(--primary-light, #9F7AEA);
          background-color: rgba(159, 122, 234, 0.1);
        }

        .mobile-menu-actions {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .desktop-header {
            display: none;
          }
          
          .mobile-nav {
            display: block;
          }
          
          .mobile-overlay {
            display: block;
          }
        }

        /* Variables */
        :root {
          --primary: #6B46C1;
          --primary-dark: #553C9A;
          --primary-light: #9F7AEA;
          --secondary: #2D3748;
          --dark: #1A202C;
          --light: #F7FAFC;
          --gray: #A0AEC0;
        }
      `}</style>

      {/* Desktop Header */}
      <div className="desktop-header">
        <nav className="desktop-nav">
          <div className="logo">
            Dev<span className="highlight">Quarm</span>
          </div>
          
          <ul className="desktop-menu">
            {navigationItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={isActive(item.path) ? 'active' : ''}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="desktop-actions">
            <a href="#contact" className="hire-btn">Hire Me</a>
            <button className="theme-toggle" onClick={toggleTheme}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="mobile-nav">
        <div className="mobile-nav-container">
          <div className="mobile-nav-grid">
            {/* All four main nav items */}
            {navigationItems.slice(0, 4).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
              >
                <span className="material-icons nav-icon">{item.icon}</span>
                <span className="nav-text">{item.label}</span>
                {isActive(item.path) && <span className="active-dot"></span>}
              </Link>
            ))}

            {/* Center Menu Button */}
            <button className="center-button" onClick={toggleMenu}>
              <span className="material-icons center-icon">menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu">
          <div className="logo" style={{marginBottom: '2rem', fontSize: '2rem'}}>
            Dev<span className="highlight">Quarm</span>
          </div>
          
          {navigationItems.slice(4).map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`mobile-menu-item ${isActive(item.path) ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.path);
              }}
            >
              <span className="material-icons" style={{marginRight: '0.5rem'}}>{item.icon}</span>
              {item.label}
            </a>
          ))}
          
          <div className="mobile-menu-actions">
            <a href="#contact" className="hire-btn">Hire Me</a>
            <button className="theme-toggle" onClick={toggleTheme}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </button>
          </div>
          
          <button 
            onClick={toggleMenu}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'transparent',
              border: 'none',
              color: 'var(--light)',
              fontSize: '1.5rem',
              cursor: 'pointer'
            }}
          >
            <span className="material-icons">close</span>
          </button>
        </div>
      </div>


    </>
  );
};

export default Header;