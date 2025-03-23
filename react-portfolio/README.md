# React Portfolio 2025

A modern, responsive portfolio website built with React, TypeScript, and Bootstrap showcasing my skills in Java, Node.js, and React development.

## Features

- **Modern React Architecture**: Built with React 18 and TypeScript.
- **Responsive Design**: Looks great on all devices from mobile to desktop.
- **Interactive UI**: Engaging animations and transitions using AOS and GSAP.
- **3D Background**: Dynamic 3D background animation on the home page using Three.js.
- **Dynamic Content**: Content managed through React context.
- **Blog System**: Simple blog functionality with markdown support.
- **Contact Form**: Fully functional contact form.

## Technologies Used

- React 18
- TypeScript
- React Router 6
- Bootstrap 5
- AOS (Animate On Scroll)
- GSAP (GreenSock Animation Platform)
- Three.js
- Typed.js
- Express (for production server)

## Project Structure

```
src/
├── components/           # Reusable UI components
├── context/              # React Context API for state management
├── pages/                # Page components 
├── styles/               # CSS styles
└── App.tsx               # Main app component with routing
```

## Getting Started

### Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher

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

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Building for Production

```
npm run build
```

This will create a `build` folder with optimized production build.

## Deployment

The project is ready for deployment on services like Netlify, Vercel, or Heroku with minimal configuration.

To run the production build locally:

```
npm run build
npm start
```

## License

This project is licensed under the ISC License.

## Credits

- FontAwesome for icons
- AOS for scroll animations
- Three.js for 3D animations
- Typed.js for typing animation
