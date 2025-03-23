import React, { useEffect } from 'react';
import AOS from 'aos';
import { usePortfolioContext } from '../context/PortfolioContext';

const About: React.FC = () => {
  const { aboutMe, calculateAge, experiences, education } = usePortfolioContext();
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50
    });
  }, []);
  
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title" data-aos="fade-up">About Me</h1>
              <div className="page-subtitle" data-aos="fade-up" data-aos-delay="100">Get to know me better</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-info py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="about-image">
                <img src="/assets/images/profile.jpg" alt="Profile" className="img-fluid rounded shadow" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="section-title">Personal Info</h2>
              <p className="bio">{aboutMe.bio}</p>
              
              <div className="personal-info-list">
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">{aboutMe.location}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">
                    <a href={`mailto:${aboutMe.email}`}>{aboutMe.email}</a>
                  </span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone:</span>
                  <span className="info-value">{aboutMe.phone}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Age:</span>
                  <span className="info-value">{calculateAge()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="experience-timeline py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">Work Experience</h2>
          
          <div className="timeline">
            {experiences.map((experience, index) => (
              <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{experience.position}</h3>
                  <div className="timeline-info">
                    <span className="company">{experience.company}</span>
                    <span className="period">{experience.period}</span>
                  </div>
                  <p className="timeline-desc">{experience.description}</p>
                  <div className="tags">
                    {experience.technologies.map((tech, techIndex) => (
                      <span className="tag" key={techIndex}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="education-timeline py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">Education</h2>
          
          <div className="timeline">
            {education.map((edu, index) => (
              <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{edu.degree}</h3>
                  <div className="timeline-info">
                    <span className="institution">{edu.institution}</span>
                    <span className="period">{edu.period}</span>
                  </div>
                  <p className="timeline-desc">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 