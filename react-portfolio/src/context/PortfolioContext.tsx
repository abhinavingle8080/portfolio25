import React, { createContext, useContext, ReactNode } from 'react';

interface AboutMe {
  bio: string;
  location: string;
  email: string;
  phone: string;
}

interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

interface Skills {
  languages: string[];
  technologies: string[];
  others: string[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  imageSrc: string;
  technologies: string[];
  features: string[];
  liveLink: string;
}

interface BlogPost {
  id: number;
  title: string;
  tagline: string;
  date: string;
  preview: string;
  image: string;
  content: string;
}

interface PortfolioContextType {
  yourName: string;
  currentYear: number;
  aboutMe: AboutMe;
  calculateAge: () => number;
  experiences: Experience[];
  education: Education[];
  skills: Skills;
  projects: Project[];
  blogPosts: BlogPost[];
}

const defaultContext: PortfolioContextType = {
  yourName: 'Abhinav Ingle',
  currentYear: new Date().getFullYear(),
  aboutMe: {
    bio: "Hi there! 👋 I'm a Full Stack Developer who spends half my time building robust APIs and the other half debugging them—sometimes questioning my life choices but always pushing through with caffeine and sheer determination. With over 2 years of experience, I've crafted everything from backend systems that refuse to crash (most of the time) to front-end designs that might just make you say, 'Wow, this actually looks good!' I'm fluent in the universal language of semicolons, parentheses, and the occasional panic-induced Google search. Whether it's solving complex problems, leading teams, or figuring out why my code works when it shouldn't—I'm always ready for the next challenge. When I'm not coding, you can find me pretending to be productive while actually browsing memes about coding. Let's build something amazing—and maybe break it a little, just for fun! 😎",
    location: "Nagpur, India",
    email: "abhinavingle8080@gmail.com",
    phone: "+91 (Contact Number)" // Replace with actual phone if available
  },
  calculateAge: () => 24, // Replace with actual age calculation if needed
  experiences: [
    {
      position: "Full Stack Developer",
      company: "IlomaTechnology Pvt.Ltd",
      period: "Sept 2023 - Present",
      description: "Developed backend APIs using Node.js and front-end web applications with the React framework. Mentored new interns, helping them onboard and improve their technical skills. Managed application workflows and guided team members through complex tasks.",
      technologies: ["Node.js", "React", "Express", "MySQL"]
    },
    {
      position: "Freelance Developer",
      company: "Self-Employed",
      period: "2021 - 2023",
      description: "Built custom solutions for small businesses in Buldhana, including a HairXpertise app (Queue management system) for Salons and a student management system for the local school. Streamlined operations, reducing wait times, and improving administrative efficiency. Tailored software to meet specific needs, leading to enhanced customer satisfaction.",
      technologies: ["Java", "Spring Boot", "React", "MySQL"]
    }
  ],
  education: [
    {
      institution: "Sant Gadge Baba, Amaravati University",
      degree: "Bachelor's Degree in Computer Science",
      period: "2018-2021",
      description: "Foundation knowledge in Computer Science, Advanced mathematics and physics, focusing on software development, algorithms, and data structures."
    }
  ],
  skills: {
    languages: ["English", "Hindi", "Marathi", "Japanese"],
    technologies: ["Spring Boot", "Spring-Security", "Spring-Data-JPA", "React JS", "MUI", "Node JS", "Express", "Sequelize"],
    others: ["Junit Testing", "MySQL", "Oracle", "PostgreSQL", "Version Control", "Hibernate", "Apache Tomcat", "Linux/Ubuntu: Server management", "App Deployment"]
  },
  projects: [
    {
      id: "1",
      title: "Color Pencil",
      description: "Color Pencil is an interactive math learning platform for children of grade 1-6. It offers engaging exercises, assignments, and learning materials designed to teach young children mathematical concepts in a fun and interactive way.",
      shortDescription: "Node APIs + Admin + Parent & Student Panel",
      imageSrc: "/assets/images/projects/colorpencil.svg",
      technologies: ["React.js", "Node.js", "Express.js", "Sequelize-CLI", "MySQL", "Firebase", "RazorPay", "Stripe", "MUI"],
      features: [
        "Web-App -> Interactive exercises and games for children to learn math",
        "Web-App -> Parent dashboard to monitor child progress",
        "Admin -> Admin panel for managing users, subscriptions, and content",
        "Admin -> Subscription management with coupons and offers",
        "Admin -> Content management system for exercises and assignments",
        "Back-end -> Full CRUD operations with a MySQL database",
        "Front-end -> Responsive design for both mobile and desktop"
      ],
      liveLink: "https://colorpencilstage.ilserver.cloud"
    },
    {
      id: "2",
      title: "Fitness Maa",
      description: "FitnessMaa is your ultimate solution for managing all official tasks as a Gym owner, Trainer, and Manager. Developed to simplify operations at your Fitness Centers, FitnessMaa allows you to manage your work from anywhere, anytime.",
      shortDescription: "Android + iOS Development",
      imageSrc: "/assets/images/projects/fitness-maa.svg",
      technologies: ["Node.js", "Express.js", "Firebase", "Flutter", "MySQL"],
      features: [
        "Advanced Gym Management Facilities",
        "Expense and income log for managing finances",
        "Separate Admin app to maintain track of all your fitness centers in one place",
        "User App with account management with secure authentication",
        "Services and Packages management"
      ],
      liveLink: "https://fitnessmaa.com"
    },
    {
      id: "3",
      title: "Ease Your Shoot",
      description: "Ease Your Shoot is a cutting-edge web platform designed to simplify the process of booking photographers and videographers for events. It provides users with an intuitive and seamless experience to plan and manage their events efficiently.",
      shortDescription: "React + Node + Express + MySQL",
      imageSrc: "/assets/images/projects/eys-loader.gif",
      technologies: ["React.js", "Node.js", "Express.js", "Sequelize-CLI", "MySQL", "Firebase", "RazorPay", "Zoho CRM", "Twilio"],
      features: [
        "Feature-rich admin panel for managing and updating website content effortlessly",
        "Secure and scalable backend APIs with advanced security protocols",
        "OTP-based authentication for secure logins using Firebase and Twilio",
        "Seamless payment gateway integration powered by RazorPay",
        "Automatic order data synchronization with Zoho CRM for streamlined data management",
        "Responsive design ensuring a smooth experience across devices"
      ],
      liveLink: "https://easeyourshoot.com/"
    },
    {
      id: "4",
      title: "Generic API",
      description: "A powerful, scalable API framework that serves as the backbone for multiple applications, providing authentication, authorization, database operations, and business logic implementation.",
      shortDescription: "Node + Express + MySQL",
      imageSrc: "/assets/images/projects/iloma.svg",
      technologies: ["Node.js", "Express.js", "MySQL", "JWT", "Redis", "Docker"],
      features: [
        "Authentication and authorization with JWT",
        "Role-based access control",
        "Database abstraction layer",
        "Caching with Redis",
        "Containerized deployment with Docker"
      ],
      liveLink: "#"
    },
    {
      id: "5",
      title: "Salt",
      description: "A comprehensive sales management platform for tracking customer interactions, managing inventory, and processing orders.",
      shortDescription: "React + Node + Express + MySQL",
      imageSrc: "/assets/images/projects/salt.svg",
      technologies: ["React", "Node.js", "Express", "MySQL", "Redux", "Material-UI"],
      features: [
        "Customer relationship management",
        "Inventory tracking",
        "Order processing",
        "Sales analytics",
        "User management"
      ],
      liveLink: "#"
    },
    {
      id: "6",
      title: "Buty Public School",
      description: "A comprehensive school management system that helps administrators, teachers, and students streamline educational processes.",
      shortDescription: "React + Node + Express + MySQL",
      imageSrc: "/assets/images/projects/buty.svg",
      technologies: ["React", "Node.js", "Express", "MySQL", "Material-UI"],
      features: [
        "Student information management",
        "Attendance tracking",
        "Grade management",
        "Parent communication portal",
        "Fee management"
      ],
      liveLink: "#"
    }
  ],
  blogPosts: [
    {
      id: 1,
      title: "Amazing Blog",
      tagline: "This is a Tagline If you want to add.",
      date: "2022-07-15",
      preview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/assets/images/blogs/blog1.jpg",
      content: `# Heading One

**Lorem Ipsum** is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

## This is Heading Two

Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
    },
    {
      id: 2,
      title: "Second Blog Post",
      tagline: "Another interesting tagline here",
      date: "2022-08-10",
      preview: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
      image: "/assets/images/blogs/blog1.jpg",
      content: `# Second Blog Post

This is the full content of the second blog post. It would contain all the details and information.`
    }
  ]
};

const PortfolioContext = createContext<PortfolioContextType>(defaultContext);

export const usePortfolioContext = () => useContext(PortfolioContext);

interface PortfolioProviderProps {
  children: ReactNode;
}

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({ children }) => {
  return (
    <PortfolioContext.Provider value={defaultContext}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext; 