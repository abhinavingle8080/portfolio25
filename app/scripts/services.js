'use strict';

/**
 * Services for the Portfolio Application
 */

// Theme Service - Handles theme switching
app.service('ThemeService', ['$rootScope', function($rootScope) {
    var service = this;
    
    // Available themes
    service.themes = [
        {
            name: 'Default',
            primaryColor: '#2c3e50',
            secondaryColor: '#e74c3c',
            accentColor: '#3498db',
            darkColor: '#1a252f',
            lightColor: '#ecf0f1',
            textColor: '#333'
        },
        {
            name: 'Dark',
            primaryColor: '#121212',
            secondaryColor: '#bb86fc',
            accentColor: '#03dac6',
            darkColor: '#000000',
            lightColor: '#ffffff',
            textColor: '#e0e0e0'
        },
        {
            name: 'Light',
            primaryColor: '#f5f5f5',
            secondaryColor: '#ff4081',
            accentColor: '#2196f3',
            darkColor: '#e0e0e0',
            lightColor: '#ffffff',
            textColor: '#212121'
        },
        {
            name: 'Nature',
            primaryColor: '#2e7d32',
            secondaryColor: '#ff9800',
            accentColor: '#4caf50',
            darkColor: '#1b5e20',
            lightColor: '#f1f8e9',
            textColor: '#212121'
        }
    ];
    
    // Current theme index
    service.currentThemeIndex = 0;
    
    // Apply theme to CSS variables
    service.applyTheme = function(theme) {
        var root = document.documentElement;
        
        root.style.setProperty('--primary-color', theme.primaryColor);
        root.style.setProperty('--secondary-color', theme.secondaryColor);
        root.style.setProperty('--accent-color', theme.accentColor);
        root.style.setProperty('--dark-color', theme.darkColor);
        root.style.setProperty('--light-color', theme.lightColor);
        root.style.setProperty('--text-color', theme.textColor);
        
        // Store theme preference in localStorage
        localStorage.setItem('portfolioTheme', JSON.stringify(theme));
        
        // Broadcast theme change event
        $rootScope.$broadcast('themeChanged', theme);
    };
    
    // Switch to the next theme
    service.nextTheme = function() {
        service.currentThemeIndex = (service.currentThemeIndex + 1) % service.themes.length;
        service.applyTheme(service.themes[service.currentThemeIndex]);
    };
    
    // Initialize theme
    service.initTheme = function() {
        // Check if there's a stored theme preference
        var storedTheme = localStorage.getItem('portfolioTheme');
        
        if (storedTheme) {
            try {
                var theme = JSON.parse(storedTheme);
                // Find the theme index
                var index = service.themes.findIndex(function(t) {
                    return t.name === theme.name;
                });
                
                if (index !== -1) {
                    service.currentThemeIndex = index;
                    service.applyTheme(service.themes[index]);
                } else {
                    // If theme doesn't exist anymore, use default
                    service.applyTheme(service.themes[0]);
                }
            } catch (e) {
                // If there's an error parsing, use default theme
                service.applyTheme(service.themes[0]);
            }
        } else {
            // No stored preference, use default theme
            service.applyTheme(service.themes[0]);
        }
    };
}]);

// Experience Service - Handles work and project data
app.service('ExperienceService', function() {
    var service = this;
    
    // Work experience data
    service.getWorkExperience = function() {
        return [
            {
                position: 'Senior Software Developer',
                company: 'Tech Company Name',
                period: '2021 - Present',
                description: 'Leading the development of enterprise-level applications using Java, Spring Boot, and React. Mentoring junior developers and participating in architecture design.',
                technologies: ['Java', 'Spring Boot', 'React', 'AWS', 'MongoDB'],
                achievements: [
                    'Improved application performance by 40% through code optimization and refactoring',
                    'Led a team of 5 developers to deliver a major project ahead of schedule',
                    'Implemented CI/CD pipeline reducing deployment time by 60%'
                ]
            },
            {
                position: 'Full Stack Developer',
                company: 'Another Company Name',
                period: '2018 - 2021',
                description: 'Developed and maintained web applications using Node.js and React. Collaborated with UX/UI designers to implement responsive and intuitive interfaces.',
                technologies: ['Node.js', 'Express', 'React', 'PostgreSQL', 'Docker'],
                achievements: [
                    'Built RESTful APIs that served 500k+ daily requests',
                    'Developed a real-time dashboard that improved client decision making',
                    'Reduced database query times by 30% through optimization'
                ]
            },
            {
                position: 'Junior Developer',
                company: 'First Company Name',
                period: '2016 - 2018',
                description: 'Started as a Java developer working on backend services. Gradually expanded skills to include frontend development with JavaScript and React.',
                technologies: ['Java', 'JavaScript', 'React', 'MySQL'],
                achievements: [
                    'Contributed to a major refactoring project that improved code maintainability',
                    'Developed a custom reporting tool that saved 10+ hours of manual work weekly',
                    'Recognized as "Rookie of the Year" for exceptional performance'
                ]
            }
        ];
    };
    
    // Education data
    service.getEducation = function() {
        return [
            {
                degree: 'Master of Science in Computer Science',
                institution: 'University Name',
                period: '2014 - 2016',
                description: 'Specialized in Software Engineering with focus on distributed systems and cloud computing.',
                achievements: [
                    'Graduated with distinction (GPA: 3.8/4.0)',
                    'Published a research paper on distributed systems',
                    'Received the Outstanding Graduate Student Award'
                ]
            },
            {
                degree: 'Bachelor of Science in Computer Science',
                institution: 'University Name',
                period: '2010 - 2014',
                description: 'Fundamentals of computer science, algorithms, data structures, and software development.',
                achievements: [
                    'Dean\'s List for all semesters',
                    'Participated in ACM programming competitions',
                    'Led the university\'s computer science club'
                ]
            }
        ];
    };
    
    // Projects data
    service.getProjects = function() {
        return [
            {
                title: 'E-Commerce Platform',
                category: 'Java',
                image: 'app/images/project1.jpg',
                description: 'A full-featured e-commerce platform built with Java Spring Boot backend and React frontend.',
                longDescription: 'This scalable e-commerce solution includes features like product catalog, shopping cart, payment processing, order management, and an admin dashboard. The system is built with a microservices architecture for better scalability and maintenance.',
                technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'AWS'],
                demoLink: '#',
                codeLink: '#',
                featured: true
            },
            {
                title: 'Task Management System',
                category: 'Node.js',
                image: 'app/images/project2.jpg',
                description: 'A collaborative task management system with real-time updates using Socket.io.',
                longDescription: 'This task management system allows teams to collaborate on projects in real-time. Features include task creation, assignment, due dates, comments, file attachments, and real-time notifications. The application uses Socket.io for real-time updates and MongoDB for data storage.',
                technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'React'],
                demoLink: '#',
                codeLink: '#',
                featured: true
            },
            {
                title: 'Social Media Dashboard',
                category: 'React',
                image: 'app/images/project3.jpg',
                description: 'A responsive dashboard for social media analytics with interactive charts and data visualization.',
                longDescription: 'This dashboard aggregates data from multiple social media platforms and presents it in an intuitive interface with interactive charts and graphs. Users can analyze trends, engagement metrics, and audience demographics to optimize their social media strategy.',
                technologies: ['React', 'Redux', 'D3.js', 'Firebase'],
                demoLink: '#',
                codeLink: '#',
                featured: true
            },
            {
                title: 'Mobile Banking App',
                category: 'Mobile',
                image: 'app/images/project4.jpg',
                description: 'A secure mobile banking application with biometric authentication and transaction tracking.',
                longDescription: 'This mobile banking app allows users to check balances, transfer funds, pay bills, and track expenses. Security features include biometric authentication, encryption, and fraud detection algorithms. The app is built with Java for Android and connects to a Spring Boot backend.',
                technologies: ['Java', 'Android', 'Spring Boot', 'PostgreSQL'],
                demoLink: '#',
                codeLink: '#',
                featured: false
            },
            {
                title: 'Content Management System',
                category: 'Node.js',
                image: 'app/images/project5.jpg',
                description: 'A flexible and extensible CMS with a user-friendly admin interface and customizable templates.',
                longDescription: 'This CMS allows non-technical users to create, edit, and manage website content without coding knowledge. It features a drag-and-drop editor, media management, user roles, and customizable templates. The system is built with Node.js and Express on the backend and uses MongoDB for content storage.',
                technologies: ['Node.js', 'Express', 'MongoDB', 'Handlebars'],
                demoLink: '#',
                codeLink: '#',
                featured: false
            },
            {
                title: 'Weather Forecast App',
                category: 'React',
                image: 'app/images/project6.jpg',
                description: 'A weather forecast application with location-based data and interactive maps.',
                longDescription: 'This weather app provides current conditions and forecasts for any location. Features include hourly and 7-day forecasts, precipitation radar, wind maps, and severe weather alerts. The app uses geolocation for automatic location detection and connects to multiple weather data APIs for accuracy.',
                technologies: ['React', 'Node.js', 'OpenWeatherMap API', 'Google Maps API'],
                demoLink: '#',
                codeLink: '#',
                featured: false
            }
        ];
    };
    
    // Get featured projects only
    service.getFeaturedProjects = function() {
        return service.getProjects().filter(function(project) {
            return project.featured;
        });
    };
    
    // Skills data
    service.getSkills = function() {
        return [
            {
                name: 'Backend Development',
                skills: [
                    { name: 'Java', level: 95, icon: 'fab fa-java' },
                    { name: 'Spring Boot', level: 90, icon: 'fas fa-leaf' },
                    { name: 'Node.js', level: 90, icon: 'fab fa-node-js' },
                    { name: 'Express', level: 85, icon: 'fab fa-node' },
                    { name: 'Python', level: 75, icon: 'fab fa-python' },
                    { name: 'PHP', level: 65, icon: 'fab fa-php' }
                ]
            },
            {
                name: 'Frontend Development',
                skills: [
                    { name: 'React', level: 90, icon: 'fab fa-react' },
                    { name: 'JavaScript', level: 95, icon: 'fab fa-js' },
                    { name: 'HTML5', level: 90, icon: 'fab fa-html5' },
                    { name: 'CSS3', level: 85, icon: 'fab fa-css3-alt' },
                    { name: 'Angular', level: 70, icon: 'fab fa-angular' },
                    { name: 'Vue.js', level: 65, icon: 'fab fa-vuejs' }
                ]
            },
            {
                name: 'Database & DevOps',
                skills: [
                    { name: 'MySQL', level: 85, icon: 'fas fa-database' },
                    { name: 'MongoDB', level: 80, icon: 'fas fa-leaf' },
                    { name: 'PostgreSQL', level: 75, icon: 'fas fa-database' },
                    { name: 'Docker', level: 80, icon: 'fab fa-docker' },
                    { name: 'Kubernetes', level: 70, icon: 'fas fa-dharmachakra' },
                    { name: 'AWS', level: 75, icon: 'fab fa-aws' }
                ]
            }
        ];
    };
});

// Utility Service - Provides common utility functions
app.service('UtilityService', ['$window', function($window) {
    var service = this;
    
    // Scroll to element by ID
    service.scrollToElement = function(elementId) {
        var element = document.getElementById(elementId);
        if (element) {
            $window.scrollTo({
                top: element.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    };
    
    // Generate random ID
    service.generateId = function(prefix) {
        prefix = prefix || 'id';
        return prefix + '_' + Math.random().toString(36).substr(2, 9);
    };
    
    // Format date
    service.formatDate = function(date, format) {
        if (!date) return '';
        
        var d = new Date(date);
        
        if (format === 'short') {
            return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
        } else if (format === 'long') {
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
        } else {
            return d.toLocaleDateString();
        }
    };
    
    // Truncate text with ellipsis
    service.truncateText = function(text, length) {
        if (!text) return '';
        
        length = length || 100;
        
        if (text.length <= length) {
            return text;
        }
        
        return text.substring(0, length) + '...';
    };
    
    // Debounce function to limit how often a function can be called
    service.debounce = function(func, wait) {
        var timeout;
        
        return function() {
            var context = this,
                args = arguments;
                
            var later = function() {
                timeout = null;
                func.apply(context, args);
            };
            
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };
}]);

// Portfolio Service - Uses data from PortfolioDataService for easy access in controllers
app.service('portfolioService', ['PortfolioDataService', function(PortfolioDataService) {
    var service = this;
    
    // Projects data
    service.projects = PortfolioDataService.projects;
    
    // Other portfolio data can be added here
    service.personalInfo = PortfolioDataService.personalInfo;
}]);

// Contact Service - Handles contact form submissions
app.service('ContactService', ['$http', function($http) {
    var service = this;
    
    // Send contact form data to server
    service.sendContactForm = function(formData) {
        return $http.post('/api/contact', formData);
    };
}]); 