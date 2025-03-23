import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { usePortfolioContext } from '../context/PortfolioContext';

interface FilterButtons {
  all: boolean;
  java: boolean;
  node: boolean;
  react: boolean;
}

const Projects: React.FC = () => {
  const { projects } = usePortfolioContext();
  const [filters, setFilters] = useState<FilterButtons>({
    all: true,
    java: false,
    node: false,
    react: false
  });
  
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50
    });
  }, []);
  
  useEffect(() => {
    if (filters.all) {
      setFilteredProjects(projects);
    } else {
      const newFilteredProjects = projects.filter(project => {
        const techString = project.technologies.join(' ').toLowerCase();
        if (filters.java && techString.includes('java')) return true;
        if (filters.node && techString.includes('node')) return true;
        if (filters.react && techString.includes('react')) return true;
        return false;
      });
      setFilteredProjects(newFilteredProjects);
    }
  }, [filters, projects]);
  
  const handleFilterClick = (filter: keyof FilterButtons) => {
    if (filter === 'all') {
      setFilters({
        all: true,
        java: false,
        node: false,
        react: false
      });
    } else {
      setFilters({
        ...filters,
        all: false,
        [filter]: !filters[filter]
      });
      
      // If all filters are deactivated, activate "all" filter
      const newFilters = { ...filters, [filter]: !filters[filter], all: false };
      if (!newFilters.java && !newFilters.node && !newFilters.react) {
        newFilters.all = true;
      }
      setFilters(newFilters);
    }
  };
  
  return (
    <div className="projects-page">
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title" data-aos="fade-up">My Projects</h1>
              <div className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
                Showcasing my best work
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="projects-content py-5">
        <div className="container">
          <div className="project-filters text-center mb-5" data-aos="fade-up">
            <button
              className={`filter-btn ${filters.all ? 'active' : ''}`}
              onClick={() => handleFilterClick('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filters.java ? 'active' : ''}`}
              onClick={() => handleFilterClick('java')}
            >
              Java
            </button>
            <button
              className={`filter-btn ${filters.node ? 'active' : ''}`}
              onClick={() => handleFilterClick('node')}
            >
              Node.js
            </button>
            <button
              className={`filter-btn ${filters.react ? 'active' : ''}`}
              onClick={() => handleFilterClick('react')}
            >
              React
            </button>
          </div>
          
          <div className="row">
            {filteredProjects.map((project, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={project.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.imageSrc} alt={project.title} />
                  </div>
                  <span className="project-category">{project.shortDescription}</span>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-techs">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span className="project-tech" key={techIndex}>{tech}</span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="project-tech">+{project.technologies.length - 4}</span>
                      )}
                    </div>
                    <div className="project-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                        {project.features.length > 3 && (
                          <li>And {project.features.length - 3} more...</li>
                        )}
                      </ul>
                    </div>
                    <div className="project-links">
                      <a href={project.liveLink} className="project-link view-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-eye"></i> View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects; 