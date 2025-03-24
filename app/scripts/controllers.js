'use strict';


/**
 * Main Controller
 */
app.controller('MainController', ['$scope', '$window', function($scope, $window) {
    // Main controller functionality
    
    // Scroll to top when navigating to a new page
    $scope.$on('$routeChangeSuccess', function() {
        $window.scrollTo(0, 0);
    });
}]);

/**
 * Home Controller
 */
app.controller('HomeController', ['$scope', '$timeout', 'portfolioService', function($scope, $timeout, portfolioService) {
    // Initialize typed.js for animated typing
    $timeout(function() {
        var typed = new Typed('#typed-text', {
            strings: ['The only A.I. you will ever need.', 'A.I. with a Human Touch.', 'The Intelligence You Can Trust.', 'Bridging Logic and Innovation.'],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1500,
            startDelay: 500,
            loop: true
        });
    }, 500);
    
    // Get projects from portfolio service
    $scope.projects = portfolioService.projects;
    
    // Initialize 3D Background with three.js
    $scope.init3DBackground = function() {
        var container = document.getElementById('hero-bg');
        var width = container.offsetWidth;
        var height = container.offsetHeight;
        
        // Scene, camera, renderer
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 30;
        
        var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        
        // Create binary digits (0s and 1s)
        var particleCount = 200;
        var group = new THREE.Group();
        var velocities = [];
        var particleSize = 0.8;
        
        // Create canvas textures for 0 and 1
        function createTextTexture(text) {
            var canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            var context = canvas.getContext('2d');
            context.font = 'Bold 40px Courier New';
            context.fillStyle = '#3498db';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(text, 32, 32);
            
            var texture = new THREE.CanvasTexture(canvas);
            return texture;
        }
        
        var texture0 = createTextTexture('0');
        var texture1 = createTextTexture('1');
        
        var material0 = new THREE.SpriteMaterial({ 
            map: texture0,
            transparent: true,
            opacity: 0.8
        });
        
        var material1 = new THREE.SpriteMaterial({ 
            map: texture1,
            transparent: true,
            opacity: 0.8
        });
        
        // Create the sprites (0s and 1s)
        for (var i = 0; i < particleCount; i++) {
            // Randomly choose between 0 and 1
            var material = Math.random() > 0.5 ? material0 : material1;
            var sprite = new THREE.Sprite(material);
            
            // Random position
            sprite.position.x = (Math.random() - 0.5) * 50;
            sprite.position.y = (Math.random() - 0.5) * 50;
            sprite.position.z = (Math.random() - 0.5) * 50;
            
            // Random size (with variation)
            var size = particleSize * (0.8 + Math.random() * 0.5);
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
        function animate() {
            requestAnimationFrame(animate);
            
            // Update binary digits positions
            for (var i = 0; i < particleCount; i++) {
                var sprite = group.children[i];
                
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
        }
        
        // Handle window resize
        function onWindowResize() {
            width = container.offsetWidth;
            height = container.offsetHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }
        
        window.addEventListener('resize', onWindowResize, false);
        
        // Start animation
        animate();
    };
    
    // Initialize the 3D background on controller load
    $timeout(function() {
        $scope.init3DBackground();
    }, 1000);
}]);

/**
 * About Controller
 */
app.controller('AboutController', ['$scope', function($scope) {
    $scope.aboutMe = {
        birthYear: 2001,
        location: 'Nagpur, India',
        email: 'abhinavingle8080@gmail.com',
        phone: '+91 9595385841',
        bio: "Hi there! 👋 I'm a Full Stack Developer who builds APIs, debugs them, and questions my life choices—fueled by caffeine and determination. With 2+ years of experience, I craft reliable backends, sleek frontends, and debug mysteries that shouldn't work but do. When I'm not coding, I'm probably laughing at coding memes. Let's build something awesome (and maybe break it a little)! 😎"
    };
    
    // Calculate age dynamically
    $scope.calculateAge = function() {
        var today = new Date();
        var birthYear = $scope.aboutMe.birthYear;
        return today.getFullYear() - birthYear;
    };
    
    // Experience timeline data
    $scope.experiences = [
        {
            position: 'Full Stack Developer',
            company: 'Iloma Technology Pvt.Ltd',
            period: 'Sept 2023 - Present',
            description: 'Leading the development of enterprise-level applications using Node.js, React, and Express. Mentoring junior developers and participating in architecture design.',
            technologies: ['Node.js', 'React', 'Express', 'MySQL']
        },
        {
            position: 'Full Stack Developer',
            company: 'Self-Employed',
            period: '2021 - 2023',
            description: 'Developed and maintained web applications using Node.js and React. Collaborated with UX/UI designers to implement responsive and intuitive interfaces.',
            technologies: ['Node.js', 'Express', 'React', 'PostgreSQL', 'Docker']
        }
    ];
    
    // Education timeline data
    $scope.education = [
        {
            degree: 'Secondary and Higher Secondary',
            institution: 'Maharashtra State Board',
            period: '2016 - 2018',
            description: 'Fundamentals of Mathematics, Science, and Computer Science.'
        },
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'Sant Gadge Baba Amravati University',
            period: '2018 - 2021',
            description: 'Fundamentals of computer science, algorithms, data structures, and software development.'
        }
    ];
}]);

/**
 * Skills Controller
 */
app.controller('SkillsController', ['$scope', '$timeout', function($scope, $timeout) {
    // Skills data by category
    $scope.skillCategories = [
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
    
    // Animate skill progress bars
    $scope.animateSkills = function() {
        $timeout(function() {
            angular.forEach(document.querySelectorAll('.skill-progress'), function(element, index) {
                var level = element.getAttribute('data-level');
                $timeout(function() {
                    element.style.width = level + '%';
                }, 100 * index);
            });
        }, 500);
    };
}]);

/**
 * Projects Controller
 */
app.controller('ProjectsController', ['$scope', function($scope) {
    // Filter categories
    $scope.filters = ['All', 'Java', 'Node.js', 'React', 'Mobile', 'Other'];
    $scope.activeFilter = 'All';
    
    // Set active filter
    $scope.setFilter = function(filter) {
        $scope.activeFilter = filter;
    };
    
    // Check if project should be visible based on filter
    $scope.isVisible = function(project) {
        if ($scope.activeFilter === 'All') {
            return true;
        }
        return project.technologies.indexOf($scope.activeFilter) !== -1;
    };
    
    // Projects data
    $scope.projects = [
        {
            title: 'E-Commerce Platform',
            category: 'Java',
            image: 'app/images/project1.jpg',
            description: 'A full-featured e-commerce platform built with Java Spring Boot backend and React frontend.',
            technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'AWS'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Task Management System',
            category: 'Node.js',
            image: 'app/images/project2.jpg',
            description: 'A collaborative task management system with real-time updates using Socket.io.',
            technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'React'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Social Media Dashboard',
            category: 'React',
            image: 'app/images/project3.jpg',
            description: 'A responsive dashboard for social media analytics with interactive charts and data visualization.',
            technologies: ['React', 'Redux', 'D3.js', 'Firebase'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Mobile Banking App',
            category: 'Mobile',
            image: 'app/images/project4.jpg',
            description: 'A secure mobile banking application with biometric authentication and transaction tracking.',
            technologies: ['Java', 'Android', 'Spring Boot', 'PostgreSQL'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Content Management System',
            category: 'Node.js',
            image: 'app/images/project5.jpg',
            description: 'A flexible and extensible CMS with a user-friendly admin interface and customizable templates.',
            technologies: ['Node.js', 'Express', 'MongoDB', 'Handlebars'],
            demoLink: '#',
            codeLink: '#'
        },
        {
            title: 'Weather Forecast App',
            category: 'React',
            image: 'app/images/project6.jpg',
            description: 'A weather forecast application with location-based data and interactive maps.',
            technologies: ['React', 'Node.js', 'OpenWeatherMap API', 'Google Maps API'],
            demoLink: '#',
            codeLink: '#'
        }
    ];
}]);

/**
 * Contact Controller
 */
app.controller('ContactController', ['$scope', '$window', '$timeout', function($scope, $window, $timeout) {
    // Initialize contact form
    $scope.contactForm = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };
    
    // Form submission
    $scope.submitForm = function() {
        if ($scope.contactForm.$invalid) {
            // Form is invalid
            return;
        }
        
        // You would normally send the form data to your backend here
        // This is just a simulation for demo purposes
        $scope.loading = true;
        
        $timeout(function() {
            $scope.loading = false;
            $scope.success = true;
            
            // Reset form after successful submission
            $scope.contactForm = {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
            
            // Clear success message after 5 seconds
            $timeout(function() {
                $scope.success = false;
            }, 5000);
        }, 1500);
    };
    
    // Contact information
    $scope.contactInfo = {
        email: 'youremail@example.com',
        phone: '+1 123 456 7890',
        location: 'Your City, Country'
    };
}]);

/**
 * Project Detail Controller
 */
app.controller('ProjectDetailController', ['$scope', '$routeParams', '$location', 'portfolioService', '$timeout', function($scope, $routeParams, $location, portfolioService, $timeout) {
    // Get project ID from route params and convert to number
    const projectId = parseInt($routeParams.id);
    
    // Find project in the projects array
    $scope.project = portfolioService.projects.find(project => project.id === projectId);
    
    // If project not found, redirect to projects page
    if (!$scope.project) {
        $location.path('/projects');
        return;
    }
    
    // Set page title
    $scope.pageTitle = $scope.project.title;
    
    // Initialize Swiper slider after view is loaded
    $timeout(function() {
        new Swiper('.project-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            speed: 800,
            grabCursor: true,
            watchSlidesProgress: true,
            preloadImages: true,
            lazy: true,
            a11y: {
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
            }
        });
    }, 100);
}]); 
