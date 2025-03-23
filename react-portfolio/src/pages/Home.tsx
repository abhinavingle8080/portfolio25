import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import * as THREE from 'three';
import AOS from 'aos';
import { usePortfolioContext } from '../context/PortfolioContext';

// Component for terminal-text animation
const TerminalText: React.FC<{ text: string; prompt: string; startDelay?: number }> = ({ 
  text, 
  prompt, 
  startDelay = 0 
}) => {
  const el = useRef(null);
  
  useEffect(() => {
    const options = {
      strings: [`${prompt} ${text}`],
      typeSpeed: 30,
      startDelay: startDelay,
      showCursor: true,
      cursorChar: '|',
    };
    
    const typed = new Typed(el.current, options);
    
    return () => {
      typed.destroy();
    };
  }, [text, prompt, startDelay]);
  
  return <div className="terminal-line"><span ref={el}></span></div>;
};

const Home: React.FC = () => {
  const { yourName } = usePortfolioContext();
  const typedElement = useRef(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  
  // Initialize typed.js
  useEffect(() => {
    const options = {
      strings: ['Java Developer.', 'Node.js Expert.', 'React Specialist.', 'Software Engineer.'],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      startDelay: 500,
      loop: true,
    };
    
    const typed = new Typed(typedElement.current, options);
    
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50
    });
    
    return () => {
      typed.destroy();
    };
  }, []);
  
  // Initialize 3D background
  useEffect(() => {
    if (!heroBgRef.current) return;
    
    const container = heroBgRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    // Create binary digits (0s and 1s)
    const particleCount = 200;
    const group = new THREE.Group();
    const velocities: { x: number; y: number; z: number }[] = [];
    const particleSize = 0.8;
    
    // Create canvas textures for 0 and 1
    const createTextTexture = (text: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const context = canvas.getContext('2d');
      if (context) {
        context.font = 'Bold 40px Courier New';
        context.fillStyle = '#3498db';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, 32, 32);
      }
      
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };
    
    const texture0 = createTextTexture('0');
    const texture1 = createTextTexture('1');
    
    const material0 = new THREE.SpriteMaterial({ 
      map: texture0,
      transparent: true,
      opacity: 0.8
    });
    
    const material1 = new THREE.SpriteMaterial({ 
      map: texture1,
      transparent: true,
      opacity: 0.8
    });
    
    // Create the sprites (0s and 1s)
    for (let i = 0; i < particleCount; i++) {
      // Randomly choose between 0 and 1
      const material = Math.random() > 0.5 ? material0 : material1;
      const sprite = new THREE.Sprite(material);
      
      // Random position
      sprite.position.x = (Math.random() - 0.5) * 50;
      sprite.position.y = (Math.random() - 0.5) * 50;
      sprite.position.z = (Math.random() - 0.5) * 50;
      
      // Random size (with variation)
      const size = particleSize * (0.8 + Math.random() * 0.5);
      sprite.scale.set(size, size, 1);
      
      // Add to group
      group.add(sprite);
      
      // Store velocity for animation
      velocities.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
      });
    }
    
    // Add group to scene
    scene.add(group);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update binary digits positions
      for (let i = 0; i < particleCount; i++) {
        const sprite = group.children[i];
        
        sprite.position.x += velocities[i].x;
        sprite.position.y += velocities[i].y;
        sprite.position.z += velocities[i].z;
        
        // If digit is too far from center, reset its direction
        if (Math.abs(sprite.position.x) > 25) velocities[i].x = -velocities[i].x;
        if (Math.abs(sprite.position.y) > 25) velocities[i].y = -velocities[i].y;
        if (Math.abs(sprite.position.z) > 25) velocities[i].z = -velocities[i].z;
        
        // Slowly rotate each digit
        sprite.rotation.z += 0.01;
      }
      
      // Rotate the entire group
      group.rotation.x += 0.0005;
      group.rotation.y += 0.0005;
      
      renderer.render(scene, camera);
    };
    
    // Handle window resize
    const onWindowResize = () => {
      const width = container.offsetWidth;
      const height = container.offsetHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', onWindowResize, false);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      container.removeChild(renderer.domElement);
      // Clean up THREE.js resources
      scene.remove(group);
      group.children.forEach((child: any) => {
        if (child instanceof THREE.Sprite) {
          child.material.dispose();
          if (child.material.map) child.material.map.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);
  
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div id="hero-bg" className="hero-background" ref={heroBgRef}></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 hero-content">
              <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">
                Hello, I'm <span className="dev-name">{yourName}</span>
              </h1>
              <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
                I'm a <span id="typed-text" className="hero-typed" ref={typedElement}></span>
              </h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="600">
                Creating elegant solutions to complex problems with clean, efficient code.
              </p>
              <div className="hero-cta" data-aos="fade-up" data-aos-delay="800">
                <Link to="/projects" className="btn btn-primary">View Projects</Link>
                <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="featured-skills py-5">
        <div className="container">
          <div className="row text-center" data-aos="fade-up">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="featured-skill-item">
                <div className="icon-container">
                  <i className="fab fa-java"></i>
                </div>
                <h3>Java Development</h3>
                <p>Enterprise applications, microservices, and robust backend systems built with Java and Spring Boot.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="featured-skill-item">
                <div className="icon-container">
                  <i className="fab fa-node-js"></i>
                </div>
                <h3>Node.js Development</h3>
                <p>Scalable, high-performance web applications and APIs using Node.js, Express, and modern JavaScript.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="featured-skill-item">
                <div className="icon-container">
                  <i className="fab fa-react"></i>
                </div>
                <h3>React Development</h3>
                <p>Interactive, responsive user interfaces with React, Redux, and modern frontend technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Preview */}
      <section className="about-preview py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div className="terminal-container">
                <div className="terminal-header">
                  <div className="terminal-buttons">
                    <span className="terminal-button red"></span>
                    <span className="terminal-button yellow"></span>
                    <span className="terminal-button green"></span>
                  </div>
                  <div className="terminal-title">developer_profile.sh</div>
                </div>
                <div className="terminal-body">
                  <TerminalText 
                    text="Hello, I'm a passionate software developer with expertise in Java, Node.js, and React." 
                    prompt="$"
                  />
                  <TerminalText 
                    text="I build enterprise applications, web services, and interactive UIs." 
                    prompt="$" 
                    startDelay={2000}
                  />
                  <TerminalText 
                    text="Let's create something amazing together!" 
                    prompt="$" 
                    startDelay={4000}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="section-title text-left">About Me</h2>
              <p className="lead">A passionate software developer specializing in Java, Node.js, and React with experience building enterprise-level applications.</p>
              <p>With a strong foundation in computer science and years of practical experience, I've developed a knack for creating clean, efficient solutions to complex problems. My approach combines technical expertise with a deep understanding of user needs.</p>
              <div className="mt-4">
                <Link to="/about" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects py-5">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Featured Projects</h2>
          <div className="row">
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="project-card">
                <div className="project-image">
                  <img src="/assets/images/project1.jpg" alt="E-Commerce Platform" />
                </div>
                <span className="project-category">Java</span>
                <div className="project-content">
                  <h3 className="project-title">E-Commerce Platform</h3>
                  <p className="project-description">A full-featured e-commerce platform built with Java Spring Boot backend and React frontend.</p>
                  <div className="project-techs">
                    <span className="project-tech">Java</span>
                    <span className="project-tech">Spring Boot</span>
                    <span className="project-tech">React</span>
                    <span className="project-tech">MySQL</span>
                  </div>
                  <div className="project-links">
                    <a href="https://example.com/project1" className="project-link view-link"><i className="fas fa-eye"></i> View</a>
                    <a href="https://github.com/example/project1" className="project-link code-link"><i className="fas fa-code"></i> Code</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="project-card">
                <div className="project-image">
                  <img src="/assets/images/project2.jpg" alt="Task Management System" />
                </div>
                <span className="project-category">Node.js</span>
                <div className="project-content">
                  <h3 className="project-title">Task Management System</h3>
                  <p className="project-description">A collaborative task management system with real-time updates using Socket.io.</p>
                  <div className="project-techs">
                    <span className="project-tech">Node.js</span>
                    <span className="project-tech">Express</span>
                    <span className="project-tech">MongoDB</span>
                    <span className="project-tech">Socket.io</span>
                  </div>
                  <div className="project-links">
                    <a href="https://example.com/project2" className="project-link view-link"><i className="fas fa-eye"></i> View</a>
                    <a href="https://github.com/example/project2" className="project-link code-link"><i className="fas fa-code"></i> Code</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay="600">
              <div className="project-card">
                <div className="project-image">
                  <img src="/assets/images/project3.jpg" alt="Social Media Dashboard" />
                </div>
                <span className="project-category">React</span>
                <div className="project-content">
                  <h3 className="project-title">Social Media Dashboard</h3>
                  <p className="project-description">An analytics dashboard for social media management with React and D3.js charts.</p>
                  <div className="project-techs">
                    <span className="project-tech">React</span>
                    <span className="project-tech">D3.js</span>
                    <span className="project-tech">Firebase</span>
                    <span className="project-tech">Material-UI</span>
                  </div>
                  <div className="project-links">
                    <a href="https://example.com/project3" className="project-link view-link"><i className="fas fa-eye"></i> View</a>
                    <a href="https://github.com/example/project3" className="project-link code-link"><i className="fas fa-code"></i> Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="800">
            <Link to="/projects" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 