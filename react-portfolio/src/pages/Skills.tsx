import React, { useEffect } from 'react';
import AOS from 'aos';
import { usePortfolioContext } from '../context/PortfolioContext';

const Skills: React.FC = () => {
  const { skills } = usePortfolioContext();
  
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
    <div className="skills-page">
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title" data-aos="fade-up">Skills & Expertise</h1>
              <div className="page-subtitle" data-aos="fade-up" data-aos-delay="100">What I bring to the table</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="technical-skills py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">Technical Skills</h2>
          
          <div className="skills-category mb-5" data-aos="fade-up">
            <h3 className="category-title">Languages & Technologies</h3>
            <div className="tech-grid">
              {skills.technologies.map((tech, index) => (
                <div className="tech-item" key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
                  <div className="tech-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <div className="tech-name">{tech}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category mb-5" data-aos="fade-up">
            <h3 className="category-title">Other Technical Skills</h3>
            <div className="tech-grid">
              {skills.others.map((skill, index) => (
                <div className="tech-item" key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
                  <div className="tech-icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <div className="tech-name">{skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="soft-skills py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">Languages</h2>
          
          <div className="row">
            {skills.languages.map((language, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="language-card">
                  <div className="language-icon">
                    <i className="fas fa-language"></i>
                  </div>
                  <h3 className="language-name">{language}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="development-process py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5" data-aos="fade-up">My Development Process</h2>
          
          <div className="row">
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="100">
              <div className="process-step">
                <div className="step-number">01</div>
                <h3 className="step-title">Planning & Analysis</h3>
                <p className="step-desc">Understanding requirements, planning architecture, and analyzing the best approach.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="process-step">
                <div className="step-number">02</div>
                <h3 className="step-title">Design & Development</h3>
                <p className="step-desc">Creating efficient, maintainable code with a focus on performance and user experience.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="300">
              <div className="process-step">
                <div className="step-number">03</div>
                <h3 className="step-title">Testing & Deployment</h3>
                <p className="step-desc">Rigorous testing, quality assurance, and seamless deployment to production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills; 