"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { FiMail } from "react-icons/fi";
import { RiCodeBoxFill } from "react-icons/ri";
import myImage from "@/public/my.jpg";
import { useEffect, useState } from "react";

const TYPING_INTERVAL = 100;
const DELETING_INTERVAL = 50;
const PAUSE_DURATION = 1500;

const TITLES = [
  "Full-Stack Developer",
  "React Specialist",
  "Next.js Expert",
  "UI/UX Enthusiast",
  "Web Solutions Architect",
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Animated floating background elements
  const floatingX = useMotionValue(0);
  const floatingY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 25;
      const y = (e.clientY - innerHeight / 2) / 25;
      animate(floatingX, x, { duration: 1 });
      animate(floatingY, y, { duration: 1 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [floatingX, floatingY]);

  // Typing effect
  useEffect(() => {
    let timeout: any;

    if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, DELETING_INTERVAL);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
      }
    } else {
      if (currentText.length < TITLES[currentTitleIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(
            TITLES[currentTitleIndex].slice(0, currentText.length + 1)
          );
        }, TYPING_INTERVAL);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_DURATION);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTitleIndex, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 pb-32">
      {/* Dynamic floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{
            x: useTransform(floatingX, (x) => x * 0.5),
            y: useTransform(floatingY, (y) => y * 0.5),
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          style={{
            x: useTransform(floatingX, (x) => x * -0.7),
            y: useTransform(floatingY, (y) => y * -0.7),
          }}
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 120,
            ease: "linear",
          }}
          className="absolute top-1/3 right-1/3 w-96 h-96 border-2 border-dashed border-gray-300/10 rounded-full"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column - Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-4 shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <RiCodeBoxFill className="mr-2 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                {currentText}
                <span className="ml-1 inline-block w-2 h-5 bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="block text-gray-900 dark:text-white"
              >
                Hello, I'm
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2"
              >
                Suraj Kumar
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0"
            >
              I build exceptional digital experiences with modern web
              technologies, focusing on performance, accessibility, and
              beautiful interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-5 py-3 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>Get in touch</span>
                <BsArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                download
                className="px-5 py-3 sm:px-6 sm:py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-lg font-medium shadow hover:shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Download CV</span>
                <HiDownload className="text-lg group-hover:translate-y-0.5 transition-transform" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center lg:justify-start gap-3 sm:gap-4 pt-4"
            >
              {[
                {
                  icon: <FiMail className="text-xl" />,
                  href: "mailto:hello@example.com",
                  label: "Email",
                  color:
                    "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                },
                {
                  icon: <FaGithub className="text-xl" />,
                  href: "https://github.com",
                  label: "GitHub",
                  color:
                    "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700",
                },
                {
                  icon: <BsLinkedin className="text-xl" />,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  color:
                    "text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20",
                },
                {
                  icon: <FaTwitter className="text-xl" />,
                  href: "https://twitter.com",
                  label: "Twitter",
                  color:
                    "text-sky-500 hover:bg-sky-50 dark:hover:bg-sky-900/20",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 ${social.color}`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Circular image container with gradient border */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl  -mt-16 sm:-mt-20">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-900">
                <Image
                  src={myImage}
                  alt="Professional portrait"
                  fill
                  className="object-cover object-top"
                  quality={100}
                  priority
                />
              </div>

              {/* Floating tech badges with animation */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">React</span>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Next.js</span>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute top-1/4 -left-8 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Node.js</span>
              </motion.div>
            </div>

            {/* Floating dots decoration */}
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 60,
                ease: "linear",
              }}
              className="absolute -top-12 -right-12 w-32 h-32 rounded-full border-2 border-dotted border-gray-400/20"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated scroll indicator with improved animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center relative"
          >
            <motion.div
              animate={{ y: [0, 5, 0], opacity: [0.6, 1, 0.6] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2"
            ></motion.div>
          </motion.div>
          <motion.span
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-xs text-gray-500 dark:text-gray-400 mt-2"
          >
            Scroll down
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
