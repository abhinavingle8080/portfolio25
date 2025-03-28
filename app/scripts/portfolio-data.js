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
            id: 1,
            title: 'Color Pencil',
            category: 'Full Stack',
            type: 'Web Application',
            industry: 'Education',
            image: 'app/images/projects/colorpencil.svg',
            description: 'Node APIs + Admin + Parent & Student Panel',
            info: "Color Pencil is a comprehensive education platform designed for seamless interaction between students, parents, and administrators. It includes a robust Node.js-based API, an intuitive admin panel for activity management, and dedicated portals for parents and students. Key features include real-time progress tracking, secure payment processing, and a user-friendly interface built with React. The platform ensures scalability, performance optimization, and a smooth user experience through well-structured backend logic and responsive UI components.",
            longDescription: 'Comprehensive education platform with APIs, admin panel, and interfaces for parents and students.',
            technologies: ['Node.js', 'Express', 'React', 'MySQL'],
            demoLink: 'https://colorpencildev.ilserver.cloud/',
            codeLink: '',
            featured: true,
            completedDate: '2024',
            screenshots: [
                'app/images/projects/colorpencil/color-1.png',
                'app/images/projects/colorpencil/color-2.png',
                'app/images/projects/colorpencil/color-3.png'
            ],
            approach: 'The project was developed using an agile methodology with a focus on user experience and scalability. We implemented an optimized approach to handle the data and the admin panel was developed using the MUI library.',
            challenges: [
                {
                    title: 'Real-time Progress Tracking',
                    description: 'Implementing real-time progress tracking for students across multiple devices.',
                    solution: 'Utilized WebSocket connections and Redis for real-time data synchronization.'
                },
                {
                    title: 'Payment Integration',
                    description: 'Integrating multiple payment gateways while ensuring transaction security.',
                    solution: 'Implemented a payment abstraction layer with support for multiple providers and robust error handling.'
                },
                {
                    title: 'Large User Base',
                    description: 'Handling a large user base with efficient database management.',
                    solution: 'Optimized the database schema using Database Indexing and Query Optimization.'
                }
            ],
            role: 'Full Stack Developer',
            contributions: [
                'Architected and implemented the core backend API structure',
                'Developed the admin dashboard with real-time analytics',
                'Implemented secure authentication and authorization system',
                'Created responsive UI components for the student interface'
            ]
        },
        {
            "id": 2,
            "title": "Fitness maa",
            "category": "Mobile",
            "type": "Mobile Application",
            "industry": "Health & Fitness",
            "image": "app/images/projects/fitness-maa.svg",
            "description": "Android + iOS Development",
            "info": "Fitness Maa is a powerful fitness application designed to provide users with an interactive and personalized workout experience. The app features AI-powered workout recommendations, real-time progress tracking, and seamless integration with wearable devices. It offers guided workout sessions, goal-setting features, and offline support to enhance user engagement. Built with Flutter, the app ensures a smooth cross-platform experience while leveraging Node.js and MySQL for a scalable backend.",
            "longDescription": "Fitness Maa is a comprehensive fitness application developed for both Android and iOS platforms. It provides users with structured workout plans, real-time performance tracking, and AI-driven exercise recommendations. The app is designed to offer a seamless experience across devices, supporting offline workout tracking and integration with fitness wearables. With a focus on user engagement, it includes custom UI components, push notifications, and a goal-setting feature to keep users motivated. The backend is powered by Node.js with MySQL to handle user data securely and efficiently.",
            "technologies": ["Node.js", "MySQL", "Flutter"],
            "demoLink": "https://play.google.com/store/apps/details?id=com.ilomatech.fitnessmaaadmin&hl=en_US",
            "codeLink": "",
            "featured": true,
            "completedDate": "2023",
            "screenshots": [
                "app/images/projects/fitnessmaa/fitnessmaa0.mp4",
                "app/images/projects/fitnessmaa/fitnessmaa1.png",
                "app/images/projects/fitnessmaa/fitnessmaa2.png",
                "app/images/projects/fitnessmaa/fitnessmaa3.png"
            ],
            "approach": "The mobile app was developed using Flutter for cross-platform compatibility, with a focus on performance and user engagement.",
            "challenges": [
                {
                    "title": "Cross-platform Compatibility",
                    "description": "Ensuring consistent behavior across Android and iOS platforms.",
                    "solution": "Implemented platform-specific code where necessary and used Flutter widgets that adapt to each platform."
                },
                {
                    "title": "Performance Optimization",
                    "description": "Ensuring smooth animations and fast loading times.",
                    "solution": "Optimized asset loading, used lazy loading techniques, and minimized state re-renders."
                }
            ],
            "role": "Mobile Developer",
            "contributions": [
                "Developed the core mobile application using Flutter",
                "Implemented offline data synchronization",
                "Created custom UI components for workout tracking",
                "Integrated push notifications for workout reminders"
            ]
        },
        {
            "id": 3,
            "title": "Ease Your Shoot",
            "category": "Web",
            "type": "Web Application",
            "industry": "Photography",
            "image": "app/images/projects/eys-loader.gif",
            "description": "React + Node + Express + MySQL",
            "info": "Ease Your Shoot is a comprehensive platform designed for photographers to efficiently manage their clients, bookings, and shoots. It offers an intuitive dashboard, automated scheduling, and seamless client communication. The platform enhances workflow efficiency by providing features like cloud-based storage for photos, contract management, and integrated invoicing, ensuring photographers can focus on their creative work while the system handles administrative tasks.",
            "longDescription": "Ease Your Shoot is a powerful web application built for professional photographers to streamline their business operations. The platform offers features like automated client bookings, shoot management, contract handling, and secure online payments. It simplifies the entire workflow by integrating tools for scheduling, invoice generation, and gallery sharing. Developed using React for the front end and Node.js with Express and MySQL for the backend, the application ensures scalability, performance, and a seamless user experience.",
            "technologies": ["React", "Node.js", "Express", "MySQL"],
            "demoLink": "https://www.easeyourshootdev.ilserver.cloud/",
            "codeLink": "",
            "featured": true,
            "completedDate": "2024",
            "screenshots": [
                "app/images/projects/easeyourshoot/eys-1.png",
                "app/images/projects/easeyourshoot/eys-2.png",
                "app/images/projects/easeyourshoot/eys-3.png",
                "app/images/projects/easeyourshoot/eys-4.png"
            ],
            "approach": "The project was developed with a focus on user experience and automation, ensuring photographers can manage their shoots efficiently. The UI was built with React for responsiveness, while Node.js and MySQL were used to handle data processing and storage securely.",
            "challenges": [
                {
                    "title": "Automated Scheduling",
                    "description": "Ensuring seamless integration of shoot bookings with photographers' calendars.",
                    "solution": "Implemented Google Calendar API integration to sync shoot schedules automatically."
                },
                {
                    "title": "Photo Storage and Sharing",
                    "description": "Managing large volumes of high-resolution images efficiently.",
                    "solution": "Integrated cloud-based storage with optimized image compression and secure access control."
                }
            ],
            "role": "Full Stack Developer",
            "contributions": [
                "Developed the user-friendly dashboard with React",
                "Implemented API endpoints in Node.js with Express",
                "Designed a secure authentication and authorization system",
                "Integrated cloud storage for efficient photo management",
                "Optimized the database schema for handling large datasets"
            ]
        },
        {
            "id": 4,
            "title": "Generic API",
            "category": "Backend",
            "type": "API Framework",
            "industry": "Software Development",
            "image": "app/images/projects/iloma.svg",
            "description": "Node + Express + MySQL",
            "info": "Generic API is a reusable and modular API framework designed for rapid application development. It provides a structured foundation for building scalable and maintainable backend systems. With built-in authentication, request validation, and database management, this framework accelerates API development and ensures best practices in backend architecture.",
            "longDescription": "The Generic API framework is built to provide a highly efficient and reusable backend solution. Designed with scalability in mind, it offers pre-configured modules for authentication, data validation, logging, and error handling. It simplifies development by providing a standardized structure, making it easy to extend for various applications. The API follows RESTful principles and is built using Node.js with Express for fast and lightweight request handling, while MySQL ensures robust data management.",
            "technologies": ["Node.js", "Express", "MySQL"],
            "demoLink": "",
            "codeLink": "",
            "featured": false,
            "completedDate": "2024",
            // "screenshots": [
            //     "app/images/projects/generic-api/api1.png",
            //     "app/images/projects/generic-api/api2.png",
            //     "app/images/projects/generic-api/api3.png"
            // ],
            "approach": "The project was built with a modular structure to ensure reusability and scalability. A layered architecture was followed, separating concerns like controllers, services, and database operations. Security best practices, such as JWT authentication and rate limiting, were implemented.",
            "challenges": [
                {
                    "title": "Modular Design",
                    "description": "Ensuring the framework remains flexible and reusable for multiple applications.",
                    "solution": "Implemented a service-oriented architecture with configurable middleware and dynamic route handling."
                },
                {
                    "title": "Database Optimization",
                    "description": "Handling large-scale API requests with optimized database queries.",
                    "solution": "Used indexing and query optimization techniques to improve performance."
                }
            ],
            "role": "Backend Developer",
            "contributions": [
                "Developed core API endpoints with Express",
                "Implemented authentication using JWT",
                "Designed a modular service-based architecture",
                "Optimized database queries for performance",
                "Integrated logging and error handling mechanisms"
            ]
        },
        {
            "id": 5,
            "title": "Salt",
            "category": "Web",
            "type": "Social Media Platform",
            "industry": "Food & Cooking",
            "image": "app/images/projects/salt.svg",
            "description": "React + Node + Express + MySQL",
            "info": "Salt is a social media platform designed for food enthusiasts to share short recipe videos, connect with like-minded people, and discover new culinary inspirations. Users can follow others, comment on posts, and filter content based on their interests. With a user-friendly interface, seamless video uploading, and interactive engagement features, Salt provides an engaging experience for food lovers worldwide.",
            "longDescription": "Salt is a full-stack web application built for sharing short recipe videos and engaging with a community of food lovers. The platform allows users to create an account, post videos, follow other users, leave comments, and explore content based on categories or trending filters. The UI is developed using React for a seamless experience, while the backend is powered by Node.js, Express, and MySQL for efficient data management. Advanced filtering and recommendation algorithms ensure users discover relevant recipes based on their preferences.",
            "technologies": ["React", "Node.js", "Express", "MySQL"],
            "demoLink": "#",
            "codeLink": "",
            "featured": false,
            "completedDate": "2024",
            "screenshots": [
                "app/images/projects/salt/salt1.png"
            ],
            "approach": "The platform was designed to provide an engaging user experience while ensuring smooth video uploads and real-time interactions. React was used for dynamic front-end rendering, and MySQL was optimized to store and retrieve user-generated content efficiently. A scalable architecture was implemented to handle high traffic and concurrent interactions.",
            "challenges": [
                {
                    "title": "Video Upload and Processing",
                    "description": "Ensuring smooth video uploads and playback performance.",
                    "solution": "Integrated cloud storage with optimized compression techniques and adaptive streaming for better performance."
                },
                {
                    "title": "Content Filtering and Recommendation",
                    "description": "Providing relevant content based on user preferences.",
                    "solution": "Implemented an algorithm that tracks user interactions and suggests content based on viewing history and preferences."
                },
                {
                    "title": "Real-time Engagement",
                    "description": "Managing live comments and user interactions in real-time.",
                    "solution": "Utilized WebSocket for real-time updates and notifications."
                }
            ],
            "role": "Full Stack Developer",
            "contributions": [
                "Developed an interactive front-end with React",
                "Implemented video upload and processing functionalities",
                "Designed and optimized database schema for user and content management",
                "Integrated WebSocket for real-time interactions",
                "Developed a filtering and recommendation system"
            ]
        },
        {
            "id": 6,
            "title": "iLrestro App",
            "category": "Web & Mobile",
            "type": "Restaurant Management System",
            "industry": "Food & Hospitality",
            "image": "app/images/projects/iloma.svg",
            "description": "React + Node + Express + MySQL",
            "info": "iLrestro is a comprehensive restaurant management system designed to streamline operations for restaurant owners, vendors, and customers. It features an admin panel with vendor login, allowing vendors to register their restaurants and manage orders. Customers can browse menus, place orders via the mobile app, and track deliveries in real-time. The backend is powered by Node.js with REST APIs, ensuring efficient order processing, inventory tracking, and seamless vendor-customer interactions.",
            "longDescription": "iLrestro is a full-featured restaurant management solution with a vendor-driven marketplace model. The platform consists of an admin panel, where vendors can register and manage their restaurants, a customer mobile app for ordering, and a robust backend handling restaurant data, order processing, and inventory tracking. The admin panel allows vendors to manage menus, track sales, and handle customer queries, while customers enjoy a smooth ordering experience with real-time order tracking. The application is built using React for the web interface, Flutter for the mobile app, and Node.js with Express for API development.",
            "technologies": ["React", "Flutter", "Node.js", "Express", "MySQL"],
            "demoLink": "#",
            "codeLink": "",
            "featured": false,
            "completedDate": "2024",
            "screenshots": [
                "app/images/projects/ilrestro/restro1.png",
                "app/images/projects/ilrestro/restro2.png"
            ],
            "approach": "The platform was designed to cater to restaurant vendors and customers through a modular and scalable system. The admin panel was built with React for seamless vendor management, the customer app was developed with Flutter for cross-platform compatibility, and the backend APIs were structured with Node.js and Express for fast and reliable data handling. Real-time order tracking was implemented using WebSockets.",
            "challenges": [
                {
                    "title": "Vendor & Restaurant Management",
                    "description": "Enabling vendors to register and manage multiple restaurants efficiently.",
                    "solution": "Implemented a multi-tenant database structure with role-based access control for vendors and admin users."
                },
                {
                    "title": "Real-time Order Tracking",
                    "description": "Ensuring customers receive live order updates.",
                    "solution": "Integrated WebSockets for real-time status updates and order tracking."
                },
                {
                    "title": "Inventory & Order Synchronization",
                    "description": "Managing stock levels dynamically to prevent overbooking of items.",
                    "solution": "Developed an automated inventory tracking system that updates stock in real-time as orders are placed."
                }
            ],
            "role": "Full Stack Developer",
            "contributions": [
                "Developed the admin panel with vendor login and management",
                "Built APIs for restaurant management, order processing, and inventory tracking",
                "Integrated WebSocket for real-time order status updates",
                "Developed the customer mobile app for food ordering and tracking",
                "Implemented role-based authentication and security measures"
            ]
        },
        
        {
            "id": 7,
            "title": "BhimSup App",
            "category": "Web",
            "type": "Customer Support Platform",
            "industry": "Fintech",
            "image": "app/images/projects/bhimsup.svg",
            "description": "React + Node + Express + MySQL",
            "info": "BhimSup is a dedicated customer support platform for BHIM UPI users, designed to assist with transaction issues, dispute resolution, and general inquiries. The platform integrates real-time customer service support, enabling users to track complaints, communicate with representatives, and resolve payment-related concerns efficiently.",
            "longDescription": "BhimSup is a fintech support application tailored for BHIM UPI users, offering a streamlined way to address transaction issues and provide customer assistance. It features an intuitive user interface built with React, a backend powered by Node.js and Express, and a MySQL database for storing user queries and resolutions. The system includes automated ticket management, chatbot integration for common queries, and live support for urgent matters. Users can check transaction statuses, raise disputes, and receive real-time updates on their concerns.",
            "technologies": ["React", "Node.js", "Express", "MySQL"],
            "demoLink": "",
            "codeLink": "",
            "featured": false,
            "completedDate": "2024",
            "screenshots": [
                "app/images/projects/bhimsup/bhim1.png",
                "app/images/projects/bhimsup/bhim2.png"
            ],
            "approach": "The BhimSup platform was built with a customer-first approach, integrating automation and human support for seamless resolution of UPI-related issues. The backend system was structured to handle high volumes of queries efficiently, with AI-powered chatbot assistance for instant responses and escalation workflows for complex cases.",
            "challenges": [
                {
                    "title": "Real-time Query Resolution",
                    "description": "Handling a high volume of user queries efficiently without delays.",
                    "solution": "Integrated an AI-powered chatbot for instant responses and escalated complex cases to human agents."
                },
                {
                    "title": "Secure User Data Handling",
                    "description": "Ensuring secure storage and transmission of sensitive financial data.",
                    "solution": "Implemented encryption and secure API authentication using JWT for data protection."
                },
                {
                    "title": "Transaction Status Tracking",
                    "description": "Allowing users to check the real-time status of their UPI transactions.",
                    "solution": "Integrated with UPI APIs to fetch and display live transaction status updates."
                }
            ],
            "role": "Full Stack Developer",
            "contributions": [
                "Developed the customer support dashboard with live chat integration",
                "Built APIs for ticket creation, status tracking, and dispute management",
                "Implemented chatbot functionality for automated query resolution",
                "Ensured data encryption and security compliance for financial transactions",
                "Optimized database queries for faster response times"
            ]
        },
        
        {
            "id": 8,
            "title": "Buty Public School",
            "category": "Web",
            "type": "School Management System",
            "industry": "Education",
            "image": "app/images/projects/buty.svg",
            "description": "React + Node + Express + MySQL",
            "info": "Buty Public School Management System is a comprehensive platform designed to streamline academic and administrative operations. It provides separate portals for students, teachers, and administrators, enabling real-time communication, attendance tracking, exam scheduling, and fee management. The system ensures a seamless learning experience by integrating digital assignments, report generation, and student performance analytics.",
            "longDescription": "Buty Public School Management System is a full-featured web application designed to enhance the efficiency of academic management. It includes a student portal for accessing timetables, assignments, and grades, a teacher portal for managing lessons and attendance, and an admin dashboard for overseeing school operations. Built using React for a responsive UI and Node.js with Express for a scalable backend, the system ensures smooth data handling with MySQL as the database.",
            "technologies": ["React", "Node.js", "Express", "MySQL"],
            "demoLink": "#",
            "codeLink": "",
            "featured": false,
            "completedDate": "2024",
            "screenshots": [
                "app/images/projects/buty/buty1.png",
                "app/images/projects/buty/buty2.png",
                "app/images/projects/buty/buty3.png",
                "app/images/projects/buty/buty4.png"
            ],
            "approach": "The Buty Public School Management System was developed with a user-friendly interface to simplify daily administrative tasks. The backend was optimized for handling a high volume of student and teacher records efficiently. Security measures such as role-based access control and encrypted student data storage were implemented to ensure compliance with educational standards.",
            "challenges": [
                {
                    "title": "Role-based Access Control",
                    "description": "Ensuring proper access levels for students, teachers, and administrators.",
                    "solution": "Implemented role-based authentication and authorization using JWT and user permissions."
                },
                {
                    "title": "Attendance Tracking System",
                    "description": "Providing real-time attendance tracking and reporting.",
                    "solution": "Developed an automated attendance system with daily logs and report generation."
                },
                {
                    "title": "Scalability for Large Student Data",
                    "description": "Handling thousands of student records efficiently without performance degradation.",
                    "solution": "Optimized MySQL queries and indexed key tables to improve data retrieval speed."
                }
            ],
            "role": "Full Stack Developer",
            "contributions": [
                "Developed the student, teacher, and admin portals using React",
                "Built APIs for attendance tracking, fee management, and report generation",
                "Implemented a secure authentication system with role-based access control",
                "Designed a scalable database structure for handling large student records",
                "Optimized UI for a seamless user experience across all devices"
            ]
        },
        {
            "id": 9,
            "title": "Lorraine Music App",
            "category": "Web",
            "type": "Student Progress Tracking Portal",
            "industry": "Education & Music",
            "image": "app/images/projects/lorraine.png",
            "description": "Next.js + Spring Boot + PostgreSQL",
            "info": "Lorraine Music App is a student progress tracking portal designed for a music training organization. The platform allows schools to monitor students' academic performance alongside their music learning journey. It includes role-based access for principals, teachers, and administrators to manage schools, classes, subjects, exams, and results efficiently.",
            "longDescription": "Lorraine Music App is a comprehensive educational platform that integrates music training with academic performance tracking. Schools can add classes, assign subjects, create exams, upload exam papers, and enter results to evaluate student progress. The system provides insightful analytics to assess the impact of music learning on academic growth. Developed using Next.js for a dynamic frontend and Spring Boot for a scalable backend, it ensures data integrity with PostgreSQL.",
            "technologies": ["Next", "Java", "Spring Boot", "PostgreSQL", "Docker"],
            "demoLink": "#",
            "codeLink": "",
            "featured": true,
            "completedDate": "2024",
            "screenshots": [
                "app/images/projects/lorraine/lorraine1.png",
                "app/images/projects/lorraine/lorraine2.png",
                "app/images/projects/lorraine/lorraine3.png",
                "app/images/projects/lorraine/lorraine4.png",
                "app/images/projects/lorraine/lorraine5.png",
                "app/images/projects/lorraine/lorraine6.png",
                "app/images/projects/lorraine/lorraine7.png",
                "app/images/projects/lorraine/lorraine8.png",
                "app/images/projects/lorraine/lorraine9.png",
                "app/images/projects/lorraine/lorraine10.png"
                
            ],
            "approach": "The Lorraine Music App was developed with a structured microservices architecture for scalability. The backend uses Spring Boot APIs to manage school operations efficiently, while the Next.js frontend ensures a smooth and interactive user experience. Deployment was handled using Docker containers for better portability and reliability.",
            "challenges": [
                {
                    "title": "Multi-role Access Management",
                    "description": "Ensuring secure and seamless access for different roles such as principals, teachers, and administrators.",
                    "solution": "Implemented a robust role-based authentication system using Spring Security and JWT."
                },
                {
                    "title": "Exam and Result Management",
                    "description": "Creating a dynamic system for schools to manage exams, upload papers, and enter results.",
                    "solution": "Developed an intuitive UI for exam creation and automated result calculations in the backend."
                },
                {
                    "title": "Scalability & Deployment",
                    "description": "Ensuring the system performs well with multiple schools and large student records.",
                    "solution": "Optimized database queries, implemented caching strategies, and deployed using Docker for better resource management."
                }
            ],
            "role": "Lead Developer",
            "contributions": [
                "Managed the development team and ensured timely project delivery",
                "Developed key features in both frontend (Next.js) and backend (Spring Boot)",
                "Designed and implemented the database schema using PostgreSQL",
                "Handled deployment and resolved production issues using Docker",
                "Optimized the system for scalability and performance"
            ]
        }
    ];
}]); 