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

export const briefIntroduction = `I recently graduated from Arellano University with a Bachelor of
          Science in Information Technology and bring hands-on experience in
          developing full-stack web applications that address real-world
          challenges. I have a passion for exploring new ideas and embrace
          challenges that push me to stay up-to-date with the latest
          technologies, keeping my work efficient and innovative. I am committed
          to applying the skills I’ve developed over the years to make a
          meaningful impact in the tech industry.`;

export const about = [
  "Hello! I’m a passionate software developer with a strong focus on JavaScript and TypeScript, currently diving deeper into building scalable web applications with React and Node.js. My journey into tech started with a love for problem-solving, and over time, I found a particular interest in creating intuitive user interfaces and efficient backend systems.",
  "I’m dedicated to building clean, maintainable code and enjoy tackling complex challenges, whether it’s optimizing performance in a social media app or implementing secure authentication flows. Recently, I’ve been working with REST APIs, integrating with PostgreSQL using Prisma ORM, and exploring advanced authentication techniques with JWT.",
  "I'm always eager to learn new technologies and methodologies, and I'm excited to collaborate with other developers to create innovative solutions that make a positive impact. When I'm not coding, you can find me reading about the latest tech trends, playing video games, or exploring the great outdoors.",
];

export const projects = [
  {
    title: "Real-Time Chat App",
    name: "ChitChat",
    description:
      "A real-time chat application built with React and Firebase. It allows users to create chat rooms and chat with other users in real-time. It also has authentication using Firebase Auth. The state management is handled by Zustand.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    link: "https://mg-chitchat.vercel.app",
    image: "/assets/images/chitchat.png",
  },
  {
    title: "Social Media App",
    name: "PhotoFeed",
    description:
      "A social media application built with React, Appwrite, and Tailwind Css. It allows users to create posts, like posts, save posts, and follow other users. It also has authentication using Appwrite Auth.",
    techStack: ["React", "Appwrite", "Tailwind CSS", "React Query"],
    link: "https://mg-photofeed.vercel.app",
    image: "/assets/images/photofeed.png",
  },
  {
    title: "Ecommerce Website",
    name: "Everywear",
    description:
      "An Ecommerce website built with React, Express, Tailwind CSS, MongoDB, Cloudinary, and Stripe. It allows users to view products, add products to cart, and checkout. It also has authentication using JWT.",
    techStack: [
      "React",
      "ExpressJS",
      "Tailwind CSS",
      "MongoDB",
      "Cloudinary",
      "Stripe",
      "React Query",
    ],
    link: "https://mg-everywear.vercel.app",
    image: "/assets/images/everywear.png",
  },
  {
    title: "Task Management App",
    name: "(Teudo)ongi App",
    description:
      "A task management application built with React, Express, Tailwind CSS, MongoDB, React Query, and React Hook Form. It allows users to create tasks, update tasks, delete tasks, and mark tasks as completed.",
    techStack: ["React", "ExpressJS", "Tailwind CSS", "MongoDB", "React Query"],
    link: "https://mg-todo-app.vercel.app",
    image: "/assets/images/teudongi_app.png",
  },
];
