'use strict';

/**
 * Portfolio Data from old portfolio
 */

// Data imported from old_portfolio/data/portfolio.json
app.service('PortfolioDataService', ['$rootScope', function($rootScope) {
    var service = this;
    
    // Personal information
    service.personalInfo = {
        name: 'Abhinav Ingle',
        tagline: 'Full Stack developer',
        location: 'Nagpur, India',
        headerTaglines: [
            'Hello 👋',
            'I\'m Abhinav Ingle',
            'Full Stack developer',
            'based in Nagpur, India.'
        ],
        aboutPara: 'Hi there! 👋 I\'m a Full Stack Developer who spends half my time building robust APIs and the other half debugging them—sometimes questioning my life choices but always pushing through with caffeine and sheer determination.<br> With over 2 years of experience, I\'ve crafted everything from backend systems that refuse to crash (most of the time) to front-end designs that might just make you say, \'Wow, this actually looks good!\'<br> I\'m fluent in the universal language of semicolons, parentheses, and the occasional panic-induced Google search. Whether it\'s solving complex problems, leading teams, or figuring out why my code works when it shouldn\'t—I\'m always ready for the next challenge.<br> When I\'m not coding, you can find me pretending to be productive while actually browsing memes about coding. Let\'s build something amazing—and maybe break it a little, just for fun! 😎',
        resumeTagline: 'Full-Stack Developer',
        resumeDescription: 'Well-qualified Full Stack Developer with expertise in developing robust backend APIs using Java and Node.js and creating dynamic front-end web applications with React.'
    };
    
    // Social media links
    service.socialLinks = [
        { title: 'Github', link: 'https://github.com/abhinavingle8080', icon: 'fab fa-github' },
        { title: 'LinkedIn', link: 'https://www.linkedin.com/in/abhinav-ingle-47a07a290/', icon: 'fab fa-linkedin' },
        { title: 'Twitter', link: 'https://x.com/Abhinav_ingle_', icon: 'fab fa-twitter' },
        { title: 'Email', link: 'mailto:abhinavingle8080@gmail.com', icon: 'fas fa-envelope' },
        { title: 'Skype', link: 'https://join.skype.com/invite/xiju4bD6vLEp', icon: 'fab fa-skype' }
    ];
    
    // Work experience
    service.workExperience = [
        {
            position: 'Full Stack Dev',
            company: 'IlomaTechnology Pvt.Ltd',
            period: 'Sept 2023 - Present',
            description: 'Developed backend APIs using Node.js and front-end web applications with the React framework. Mentored new interns, helping them onboard and improve their technical skills. Managed application workflows and guided team members through complex tasks.',
            technologies: ['Node.js', 'React', 'Express', 'MySQL'],
            achievements: []
        },
        {
            position: 'Freelance Developer',
            company: 'Self-Employed',
            period: '2021 - 2023',
            description: 'Built custom solutions for small businesses in Buldhana, including a HairXpertise app (Queue management system) for Salons and a student management system for the local school. Streamlined operations, reducing wait times, and improving administrative efficiency. Tailored software to meet specific needs, leading to enhanced customer satisfaction.',
            technologies: ['Java', 'Spring Boot', 'React', 'Node.js'],
            achievements: []
        }
    ];
    
    // Education data
    service.education = {
        degree: 'Bachelor\'s Degree in Computer Science',
        institution: 'Sant Gadge Baba, Amaravati University',
        period: '2018-2021',
        description: 'Foundation knowledge in Computer Science, Advanced mathematics and physics, focusing on software development, algorithms, and data structures.'
    };
    
    // Skills
    service.skills = {
        languages: ['English', 'Hindi', 'Marathi', 'Japanese'],
        frameworks: ['Spring Boot', 'Spring-Security', 'Spring-Data-JPA', 'React JS', 'MUI', 'Node JS', 'Express', 'Sequelize'],
        others: ['Junit Testing', 'MySQL', 'Oracle', 'PostgreSQL', 'Version Control', 'Hibernate', 'Apache Tomcat', 'Linux/Ubuntu: Server management', 'App Deployment']
    };
    
    // Projects 
    service.projects = [
        {
            title: 'Color Pencil',
            category: 'Full Stack',
            image: 'app/images/projects/colorpencil.jpg',
            description: 'Node APIs + Admin + Parent & Student Panel',
            longDescription: 'Comprehensive education platform with APIs, admin panel, and interfaces for parents and students.',
            technologies: ['Node.js', 'Express', 'React', 'MySQL'],
            demoLink: 'http://chetanverma.com/',
            featured: true
        },
        {
            title: 'Fitness maa',
            category: 'Mobile',
            image: 'app/images/projects/fitness-maa.jpg',
            description: 'Android + iOS Development',
            longDescription: 'Fitness application developed for both Android and iOS platforms.',
            technologies: ['Java', 'Swift', 'React Native'],
            demoLink: 'https://play.google.com/store/apps/details?id=com.ilomatech.fitnessmaaadmin&hl=en_US',
            featured: true
        },
        {
            title: 'Ease Your Shoot',
            category: 'Web',
            image: 'app/images/projects/eys-loader.jpg',
            description: 'React + Node + Express + MySQL',
            longDescription: 'Comprehensive platform for photographers to manage their clients and shoots.',
            technologies: ['React', 'Node.js', 'Express', 'MySQL'],
            demoLink: 'https://easeyourshoot.com/',
            featured: true
        },
        {
            title: 'Generic API',
            category: 'Backend',
            image: 'app/images/projects/iloma.jpg',
            description: 'Node + Express + MySQL',
            longDescription: 'Reusable API framework for rapid application development.',
            technologies: ['Node.js', 'Express', 'MySQL'],
            demoLink: '#',
            featured: false
        },
        {
            title: 'Salt',
            category: 'Web',
            image: 'app/images/projects/salt.jpg',
            description: 'React + Node + Express + MySQL',
            longDescription: 'Full-stack web application for the Salt platform.',
            technologies: ['React', 'Node.js', 'Express', 'MySQL'],
            demoLink: '#',
            featured: false
        },
        {
            title: 'iLrestro App',
            category: 'Web',
            image: 'app/images/projects/iloma.jpg',
            description: 'React + Node + Express + MySQL',
            longDescription: 'Restaurant management application with order processing and inventory tracking.',
            technologies: ['React', 'Node.js', 'Express', 'MySQL'],
            demoLink: '#',
            featured: false
        },
        {
            title: 'BhimSup App',
            category: 'Web',
            image: 'app/images/projects/bhimsup.jpg',
            description: 'React + Node + Express + MySQL',
            longDescription: 'Support application for BHIM UPI users with customer service integration.',
            technologies: ['React', 'Node.js', 'Express', 'MySQL'],
            demoLink: '#',
            featured: false
        },
        {
            title: 'Buty Public School',
            category: 'Web',
            image: 'app/images/projects/buty.jpg',
            description: 'React + Node + Express + MySQL',
            longDescription: 'School management system for Buty Public School with student and teacher portals.',
            technologies: ['React', 'Node.js', 'Express', 'MySQL'],
            demoLink: '#',
            featured: false
        }
    ];
}]); 