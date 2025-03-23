import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { usePortfolioContext } from '../context/PortfolioContext';

const Blog: React.FC = () => {
  const { blogPosts } = usePortfolioContext();
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50
    });
  }, []);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="blog-page">
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-title" data-aos="fade-up">Blog</h1>
              <div className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
                Insights, tutorials, and thoughts
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="blog-content py-5">
        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={post.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <article className="blog-card">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} className="img-fluid" />
                    <div className="blog-date">{formatDate(post.date)}</div>
                  </div>
                  <div className="blog-content">
                    <h3 className="blog-title">{post.title}</h3>
                    {post.tagline && <div className="blog-tagline">{post.tagline}</div>}
                    <p className="blog-preview">{post.preview}</p>
                    <Link to={`/blog/${post.id}`} className="read-more">
                      Read More <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 