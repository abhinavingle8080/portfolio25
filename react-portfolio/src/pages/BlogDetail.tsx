import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import { usePortfolioContext } from '../context/PortfolioContext';

// You might want to add a markdown parser like 'react-markdown'
// npm install react-markdown

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { blogPosts } = usePortfolioContext();
  
  // Find the blog post with the matching ID
  const blogPost = blogPosts.find(post => post.id === Number(id));
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 50
    });
    
    // If blog post doesn't exist, redirect to blog page
    if (!blogPost) {
      navigate('/blog');
    }
    
    // Scroll to top of the page
    window.scrollTo(0, 0);
  }, [blogPost, navigate]);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  if (!blogPost) {
    return <div className="loading">Loading...</div>;
  }
  
  return (
    <div className="blog-detail-page">
      <section className="page-header blog-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <Link to="/blog" className="back-link" data-aos="fade-up">
                <i className="fas fa-arrow-left"></i> Back to Blog
              </Link>
              <h1 className="page-title" data-aos="fade-up">{blogPost.title}</h1>
              {blogPost.tagline && (
                <div className="page-subtitle" data-aos="fade-up" data-aos-delay="100">
                  {blogPost.tagline}
                </div>
              )}
              <div className="blog-meta" data-aos="fade-up" data-aos-delay="200">
                <span className="blog-date">
                  <i className="far fa-calendar-alt"></i> {formatDate(blogPost.date)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="blog-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="blog-image mb-4" data-aos="fade-up">
                <img src={blogPost.image} alt={blogPost.title} className="img-fluid rounded" />
              </div>
              
              <div className="blog-text" data-aos="fade-up">
                {/* Ideally, use a markdown parser here */}
                <div className="markdown-content">
                  {/* For now, we'll just render the content as is, but in production,
                      you should use a markdown parser like react-markdown */}
                  <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                    {blogPost.content}
                  </pre>
                </div>
              </div>
              
              <div className="blog-nav mt-5 pt-4" data-aos="fade-up">
                <div className="row">
                  <div className="col-6">
                    {blogPost.id > 1 && (
                      <Link to={`/blog/${blogPost.id - 1}`} className="blog-nav-link prev">
                        <i className="fas fa-arrow-left"></i> Previous Post
                      </Link>
                    )}
                  </div>
                  <div className="col-6 text-right">
                    {blogPost.id < blogPosts.length && (
                      <Link to={`/blog/${blogPost.id + 1}`} className="blog-nav-link next">
                        Next Post <i className="fas fa-arrow-right"></i>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail; 