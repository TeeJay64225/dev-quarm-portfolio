import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import './../../App.css'; // Import the CSS file

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (formData.name && formData.email && formData.message) {
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <>
      {/* Floating Particles */}
      <div className="particles">
        <div className="particle" style={{width: '10px', height: '10px', left: '10%', top: '20%', animationDuration: '20s'}}></div>
        <div className="particle" style={{width: '15px', height: '15px', left: '20%', top: '80%', animationDuration: '25s'}}></div>
        <div className="particle" style={{width: '8px', height: '8px', left: '50%', top: '30%', animationDuration: '15s'}}></div>
        <div className="particle" style={{width: '12px', height: '12px', left: '70%', top: '90%', animationDuration: '18s'}}></div>
        <div className="particle" style={{width: '6px', height: '6px', left: '80%', top: '40%', animationDuration: '22s'}}></div>
        <div className="particle" style={{width: '9px', height: '9px', left: '30%', top: '60%', animationDuration: '19s'}}></div>
      </div>

      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you. 
            Fill out the form below or reach out through any of my contact channels.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <div className="form-background"></div>
            
            {showSuccess && (
              <div className="form-message success">
                Your message has been sent successfully! I'll get back to you as soon as possible.
              </div>
            )}
            
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form-control" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-control" 
                  placeholder="john@example.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="form-control" 
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  className="form-control" 
                  placeholder="Tell me about your project, ideas, or questions..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Send Message
              </button>
            </div>
          </div>
          
          <div className="contact-info">
            <div>
              <h2 className="info-title">Contact Information</h2>
              <p className="info-text">
                Feel free to reach out through any of these channels. I'm available for freelance projects, 
                full-time positions, or just a friendly chat about technology.
              </p>
              
              <div className="info-group">
                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={16} />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={16} />
                  </div>
                  <span>contact@devquarm.com</span>
                </div>
                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={16} />
                  </div>
                  <span>San Francisco, California</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="info-title" style={{fontSize: '1.2rem'}}>Connect With Me</h3>
              <div className="social-links">
                <div className="social-icon">
                  <Linkedin size={16} />
                </div>
                <div className="social-icon">
                  <Github size={16} />
                </div>
                <div className="social-icon">
                  <Instagram size={16} />
                </div>
                <div className="social-icon">
                  <Twitter size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2025 Dev Quarm. All rights reserved.</p>
      </footer>
    </>
  );
};

export default ContactPage;