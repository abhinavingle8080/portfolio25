# Creative Developer Portfolio

A modern, creative portfolio website built with AngularJS to showcase software development skills in Java, Node.js, and React.

![Portfolio Screenshot](app/images/screenshot.png)

## Features

- Responsive design that works on all devices
- Interactive UI with smooth animations
- 3D particle background created with Three.js
- Animated typing effect with Typed.js
- Skills visualization with animated progress bars
- Project filtering by technology
- Contact form with validation
- Theme switcher with multiple color themes
- Optimized performance

## Technologies Used

- **AngularJS**: Core framework for the single-page application
- **Bootstrap 4**: CSS framework for responsive design
- **Three.js**: 3D graphics library for the interactive background
- **GSAP**: Animation library for smooth transitions
- **AOS**: Animate on scroll library for content animations
- **Typed.js**: Library for the typing animation effect
- **Express**: Simple server for local development and deployment

## Pages

1. **Home**: Introduction and featured content
2. **About**: Personal information, experience timeline, and education
3. **Skills**: Technical skills with visual representation
4. **Projects**: Portfolio of projects with filtering by technology
5. **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/portfolio-2025.git
   cd portfolio-2025
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Customization

### Personal Information

Update your personal information in `app/scripts/controllers.js`:

```javascript
// In the AboutController
$scope.aboutMe = {
    birthYear: 1990, // Change this to your birth year
    location: 'Your Location',
    email: 'youremail@example.com',
    phone: '+1 123 456 7890',
    bio: 'Your bio here...'
};
```

### Projects

Add or modify your projects in `app/scripts/services.js`:

```javascript
// In the ExperienceService
service.getProjects = function() {
    return [
        {
            title: 'Project Title',
            category: 'Category',
            image: 'app/images/project.jpg',
            description: 'Project description',
            technologies: ['Tech1', 'Tech2', 'Tech3'],
            demoLink: '#',
            codeLink: '#',
            featured: true
        },
        // More projects...
    ];
};
```

### Skills

Update your skills in `app/scripts/services.js`:

```javascript
// In the ExperienceService
service.getSkills = function() {
    return [
        {
            name: 'Category Name',
            skills: [
                { name: 'Skill Name', level: 95, icon: 'icon-class' },
                // More skills...
            ]
        },
        // More categories...
    ];
};
```

### Styling

Customize the colors and styling by editing `app/styles/main.css`. The main color variables are defined at the top of the file:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #e74c3c;
    --accent-color: #3498db;
    --dark-color: #1a252f;
    --light-color: #ecf0f1;
    --text-color: #333;
    --transition: all 0.3s ease;
}
```

## Deployment

### Netlify

1. Create a `netlify.toml` file with the following content:
   ```
   [build]
     publish = "."
     command = "npm install"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. Deploy to Netlify by connecting your repository.

### Heroku

1. Make sure your `Procfile` contains:
   ```
   web: node server.js
   ```

2. Deploy to Heroku:
   ```
   heroku create
   git push heroku main
   ```

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Unsplash for stock images

---

Created with ❤️ by [Your Name] 