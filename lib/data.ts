import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "React Developer",
    company: "Softfix Technologies OPC Private Limited",
    location: "Lucknow, Uttar Pradesh",
    description:
      "Currently working as a React Developer. Built and optimized 4 high-performance Next.js applications, enhancing SEO and loading speeds by up to 40%. Developed a cross-platform mobile app using React Native, reducing development time by 30%.",
    icon: React.createElement(FaReact),
    date: "May, 2024 - Present",
    companyLogo:
      "https://softfix.in/images/logos/1739942748_footer-logo%20(2).png",
  },
  {
    title: "Front-End Developer",
    company: "Boolean AI",
    location: "Lucknow, Uttar Pradesh",
    description:
      "Worked as a Front-End Developer, creating visually appealing, responsive web apps. Collaborated with back-end developers, integrated server-side logic, optimized web performance, and recommended performance improvements.",
    icon: React.createElement(CgWorkAlt),
    date: "January, 2023 - April, 2024",
    companyLogo:
      "https://media.licdn.com/dms/image/v2/D4D0BAQEOGeyGnZEYZA/company-logo_200_200/company-logo_200_200/0/1686482615847?e=2147483647&v=beta&t=2S2X-jQljGftEXimKYjm5AMsMEwOr2vIJ6q_qehzhOk",
  },
] as const;

export const projectsData = [
  {
    title: "Kardify",
    description:
      "Led the front-end development for a car modification app using React Native. Enhanced the mobile UI/UX, redesigned the company website, and improved app performance and stability.",
    tags: ["React Native", "UI/UX", "Mobile Development"],
    imageUrl: corpcommentImg,
  },
  {
    title: "TNV MIS",
    description:
      "Developed a multi-module MIS certification system with Next.js, implementing server-side rendering and static site generation to optimize performance. Integrated backend services for real-time data updates.",
    tags: ["Next.js", "SSR", "Real-Time", "Backend Integration"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Mykanjee Admin Panel",
    description:
      "Developed a comprehensive admin panel using Next.js. Enhanced performance with SSR, improved load times and SEO, and implemented robust data visualization and user management features.",
    tags: ["Next.js", "Admin Panel", "Data Visualization"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Gamlewala",
    description:
      "Optimized front-end features for the e-commerce platform's Admin, Vendor, and Assistant panels. Enhanced user interaction, performance, and responsive design using React.js.",
    tags: ["React.js", "E-commerce", "Performance"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Radee8",
    description:
      "Led the front-end development to redesign the company's website with React.js, resulting in a 20% increase in user engagement. Improved code performance and added new features.",
    tags: ["React.js", "Redesign", "Performance"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Management System",
    description:
      "Developed a responsive task management app using React.js, enabling efficient task tracking and real-time updates using WebSocket technology for seamless collaboration.",
    tags: ["React.js", "Task Management", "WebSocket"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Onestox",
    description:
      "Worked on a trading website and its admin panel using Next.js, implementing responsive design and high-performance features.",
    tags: ["Next.js", "Trading Platform", "Admin Panel"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Motofilla Admin Panel",
    description:
      "Developed the Motofilla admin panel using React.js, enhancing performance, user management, and backend integration.",
    tags: ["React.js", "Admin Panel", "Backend Integration"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Redux",
  "React Native",
  "GSAP",
  "Framer Motion",
  "React Reanimated",
  "Tailwind CSS",
  "Bootstrap",
  "Media Queries",
  "Express",
  "PostgreSQL",
  "WebSockets",
  "Figma",
  "Chrome Developer Tools",
  "Git",
  "Effective Communication",
  "Team Collaboration",
  "Troubleshooting",
  "Bug Fixing",
  "Continuous Learning",
] as const;
