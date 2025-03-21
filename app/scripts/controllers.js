'use strict';

/**
 * Main Controller
 */
app.controller('MainController', ['$scope', '$window', 'PortfolioDataService', function($scope, $window, PortfolioDataService) {
    // Main controller functionality
    
    // Set personal information from the data service
    $scope.yourName = PortfolioDataService.personalInfo.name;
    $scope.currentYear = new Date().getFullYear();
    
    // Set social links
    $scope.socialLinks = PortfolioDataService.socialLinks;
    
    // Scroll to top when navigating to a new page
    $scope.$on('$routeChangeSuccess', function() {
        $window.scrollTo(0, 0);
    });
}]);

/**
 * Home Controller
 */
app.controller('HomeController', ['$scope', '$timeout', 'PortfolioDataService', function($scope, $timeout, PortfolioDataService) {
    // Set personal data
    $scope.yourName = PortfolioDataService.personalInfo.name;
    $scope.headerTaglines = PortfolioDataService.personalInfo.headerTaglines;
    $scope.featuredProjects = PortfolioDataService.projects.filter(project => project.featured);
    
    // Initialize typed.js for animated typing
    $timeout(function() {
        var typed = new Typed('#typed-text', {
            strings: ['Java Developer.', 'Node.js Expert.', 'React Specialist.', 'Software Engineer.'],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 1500,
            startDelay: 500,
            loop: true
        });
    }, 500);
    
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
app.controller('AboutController', ['$scope', 'PortfolioDataService', function($scope, PortfolioDataService) {
    // Load about data from portfolio service
    $scope.aboutPara = PortfolioDataService.personalInfo.aboutPara;
    $scope.workExperience = PortfolioDataService.workExperience;
    $scope.education = PortfolioDataService.education;
    $scope.skills = PortfolioDataService.skills;
    
    // Initialize timeline animation
    $scope.initTimeline = function() {
        // ... existing code ...
    };
}]);

/**
 * Skills Controller
 */
app.controller('SkillsController', ['$scope', 'PortfolioDataService', function($scope, PortfolioDataService) {
    // Load skills from the portfolio data service
    $scope.languages = PortfolioDataService.skills.languages;
    $scope.frameworks = PortfolioDataService.skills.frameworks;
    $scope.others = PortfolioDataService.skills.others;
    
    // Programming languages with proficiency
    $scope.programmingSkills = [
        { name: 'Java', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'Python', level: 70 },
        { name: 'C/C++', level: 60 }
    ];
    
    // Framework skills
    $scope.frameworkSkills = [
        { name: 'Spring Boot', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 85 },
        { name: 'Angular', level: 70 },
        { name: 'Vue.js', level: 65 },
        { name: 'Django', level: 60 }
    ];
    
    // Tool & platform skills
    $scope.toolSkills = [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'Kubernetes', level: 70 },
        { name: 'AWS', level: 75 },
        { name: 'Databases', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'CI/CD', level: 80 }
    ];
    
    // Initialize skills animations
    $scope.initSkillBars = function() {
        // ... existing code ...
    };
}]);

/**
 * Projects Controller
 */
app.controller('ProjectsController', ['$scope', '$timeout', 'PortfolioDataService', function($scope, $timeout, PortfolioDataService) {
    // Load projects from PortfolioDataService
    $scope.projects = PortfolioDataService.projects;
    
    // Categories for filtering
    $scope.categories = ['All'];
    
    // Create unique categories
    PortfolioDataService.projects.forEach(function(project) {
        if ($scope.categories.indexOf(project.category) === -1) {
            $scope.categories.push(project.category);
        }
    });
    
    // Currently selected category
    $scope.selectedCategory = 'All';
    
    // Filter projects by category
    $scope.filterProjects = function() {
        if ($scope.selectedCategory === 'All') {
            return $scope.projects;
        } else {
            return $scope.projects.filter(function(project) {
                return project.category === $scope.selectedCategory;
            });
        }
    };
    
    // Change category
    $scope.setCategory = function(category) {
        $scope.selectedCategory = category;
    };
    
    // Isotope initialization
    $scope.initIsotope = function() {
        // ... existing code ...
    };
}]);

/**
 * Contact Controller
 */
app.controller('ContactController', ['$scope', '$timeout', 'PortfolioDataService', function($scope, $timeout, PortfolioDataService) {
    // Personal contact information
    $scope.contactInfo = {
        email: 'abhinavingle8080@gmail.com',
        phone: '+91 XXX XXX XXXX',
        location: 'Nagpur, India'
    };
    
    // Social links from PortfolioDataService
    $scope.socialLinks = PortfolioDataService.socialLinks;
    
    // Contact form submission
    $scope.formData = {};
    $scope.formSubmitted = false;
    $scope.formSuccess = false;
    $scope.formError = false;
    
    $scope.submitForm = function() {
        // Show loading state
        $scope.submitting = true;
        
        // Simulate form submission (replace with actual API call)
        $timeout(function() {
            $scope.submitting = false;
            $scope.formSubmitted = true;
            $scope.formSuccess = true;
            
            // Reset form
            $scope.formData = {};
            $scope.contactForm.$setPristine();
            $scope.contactForm.$setUntouched();
            
            // Reset status after delay
            $timeout(function() {
                $scope.formSubmitted = false;
            }, 5000);
        }, 1500);
    };
    
    // Initialize map
    $scope.initMap = function() {
        // ... existing code ...
    };
}]); 