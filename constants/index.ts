import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navigation = [
  { name: "Home", href: "#hero", identifier: "hero" },
  {
    name: "Projects",
    href: "#projects",
    identifier: "projects",
  },
  {
    name: "Skills",
    href: "#skills",
    identifier: "skills",
  },
  {
    name: "Contact",
    href: "#contact",
    identifier: "contact",
  },
];

export const projects = [
  {
    title: "Real-Time Chat App",
    name: "ChitChat",
    description:
      "A real-time chat application built with React and Firebase. Users can create chat rooms or invite others to participate in real-time conversations. The application features authentication powered by Firebase Auth, and state management is efficiently handled using Zustand.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    link: "https://mg-chitchat.vercel.app",
    image: "/assets/images/chitchat.png",
  },
  {
    title: "Social Media App",
    name: "PhotoFeed",
    description:
      "A social media application built with React, Appwrite, and Tailwind CSS. It enables users to create, like, save, and delete posts, as well as view other users' profiles and more. Authentication is seamlessly integrated using Appwrite Auth.",
    techStack: ["React", "Appwrite", "Tailwind CSS", "React Query"],
    link: "https://mg-photofeed.vercel.app",
    image: "/assets/images/photofeed.png",
  },
  {
    title: "Ecommerce Website",
    name: "Everywear",
    description:
      "An e-commerce website built with React, Express, Tailwind CSS, MongoDB, and Cloudinary. It allows users to view products, add products to the cart, and proceed to checkout. The platform also includes an admin panel, enabling the admin to view products, add new products, update product details, delete products, view all orders, and check their delivery status. Additionally, the admin can change the status of orders and view all registered users.",
    techStack: [
      "React",
      "ExpressJS",
      "Tailwind CSS",
      "MongoDB",
      "Cloudinary",
      "React Query",
    ],
    link: "https://mg-everywear.vercel.app",
    image: "/assets/images/everywear.png",
  },
  {
    title: "Task Management App",
    name: "(Teudo)ongi App",
    description:
      "A task management application built with React, Express, Tailwind CSS, MongoDB, React Query, and React Hook Form. It enables users to create, update, delete, and mark tasks as completed.",
    techStack: ["React", "ExpressJS", "Tailwind CSS", "MongoDB", "React Query"],
    link: "https://mg-todo-app.vercel.app",
    image: "/assets/images/teudongi_app.png",
  },
];

export const role = [
  "Software Engineer",
  "Full Stack Web Developer",
  "Tech Enthusiast",
];

export const aboutMe = [
  `I recently graduated from Arellano University with a Bachelor of
          Science in Information Technology and bring hands-on experience in
          developing full-stack web applications that address real-world
          challenges. I have a passion for exploring new ideas and embrace
          challenges that push me to stay up-to-date with the latest
          technologies, keeping my work efficient and innovative. I am committed
          to applying the skills I’ve developed over the years to make a
          meaningful impact in the tech industry.`,
  `My journey into tech started with a love for problem-solving, and over
          time, I found a particular interest in creating intuitive user
          interfaces and efficient backend systems. I’m dedicated to building
          clean, maintainable code and enjoy tackling complex challenges,
          whether it’s optimizing performance in a social media app or
          implementing secure authentication flows.`,
  `I'm always eager to learn new technologies and methodologies, and I'm
          excited to collaborate with other developers to create innovative
          solutions that make a positive impact. When I'm not coding, you can
          find me reading about the latest tech trends, playing video games, or
          exploring the great outdoors.`,
];

export const bio = `I'm an aspiring software developer with a passion for building dynamic
        web applications and solving real-world problems through code. Eager
        to learn, innovate, and grow, I'm dedicated to creating impactful
        digital experiences.`;

export const projectDesc = `This collection of projects showcases my journey in learning and
          applying technologies like TypeScript, React, Node.js, and more. Each
          project reflects my growth in problem-solving, development skills, and
          passion for building impactful solutions.`;

export const skillDesc = `Here are the key skills I’ve honed through hands-on experience and
          continuous learning, including expertise in technologies like
          TypeScript, React, Node.js, and more. These skills form the foundation
          of my ability to create efficient, scalable, and user-focused
          solutions.`;

export const contactDesc = `If you're interested in collaborating or have a project where I can
          contribute, I'd love to hear from you! Feel free to reach me out about
          job opportunities, freelance or contract work and collaborative
          projects.`;

export const socials = [
  {
    icon: FaGithub,
    link: "https://github.com/aboutMarkDev",
  },
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/antipey.ez",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/mark-laurence-guyada-288276261",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/iammarkguyada/",
  },
  {
    icon: FaXTwitter,
    link: "https://x.com/mrklrncgyd",
  },
];

export const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "PHP",
  "ReactJs",
  "NextJs",
  "ExpressJs",
  "NodeJs",
  "MongoDB",
  "PostgreSQL",
  "Firebase",
  "Appwrite",
];

export const skills = [
  {
    title: "Frontend",
    quote:
      "I have experience building websites using HTML, CSS, and JavaScript. I have also worked with modern frameworks like React and NextJs.",
  },
  {
    title: "Backend",
    quote:
      "I have experience building backend services using NodeJs and Express. I have also worked with databases like MongoDB and PostgreSQL.",
  },
  {
    title: "APIs",
    quote: "I have experience building RESTful APIs using NodeJs and Express.",
  },
  {
    title: "Authentication and Authorization",
    quote:
      "I have experience implementing authentication and authorization using JWT and OAuth.",
  },
  {
    title: "Object-Oriented Programming",
    quote:
      "I have experience building applications using object-oriented programming principles.",
  },
];
