import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import { usePortfolioContext } from '../context/PortfolioContext';

const Contact: React.FC = () => {
  const { aboutMe } = usePortfolioContext();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50
    });
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate the form
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    
    // Clear any previous errors
    setError('');
    
    // In a real app, you would send the form data to a server here
    // For now, we'll just simulate success
    console.log('Form submitted:', formData);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // After 5 seconds, reset the submitted state
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title" data-aos="fade-up">Contact Me</h1>
              <div className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
                Let's work together
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="contact-info">
                <h2 className="section-title">Get In Touch</h2>
                <p>I'm always interested in hearing about new projects, opportunities, and collaborations. Feel free to reach out!</p>
                
                <div className="contact-info-list">
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-details">
                      <h3>Location</h3>
                      <p>{aboutMe.location}</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="info-details">
                      <h3>Email</h3>
                      <p><a href={`mailto:${aboutMe.email}`}>{aboutMe.email}</a></p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="info-details">
                      <h3>Phone</h3>
                      <p>{aboutMe.phone}</p>
                    </div>
                  </div>
                </div>
                
                <div className="social-links mt-4">
                  <a href="https://github.com" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7" data-aos="fade-left">
              <div className="contact-form">
                <h2 className="section-title">Send Message</h2>
                
                {submitted ? (
                  <div className="alert alert-success">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="name">Your Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <label htmlFor="email">Your Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="form-group mb-3">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="form-group mb-4">
                      <label htmlFor="message">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">
                      Send Message <i className="fas fa-paper-plane ml-1"></i>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 