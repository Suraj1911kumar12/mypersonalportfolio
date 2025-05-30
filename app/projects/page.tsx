"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projectsData } from "@/lib/data";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import ParticlesBackground from "@/components/Particles";

const ProjectsSection = () => {
  return (
    <ParticlesBackground>
      <section id="projects" className="relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-4 py-24 sm:px-6 lg:px-8">
          {/* Section Header */}
          {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 mb-6">
            My Projects
          </h2>
        </motion.div> */}

          {/* Projects Grid */}
          <div className="relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 right-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="space-y-32">
              {projectsData.map((project: any, index) => (
                <ProjectCard key={index} index={index} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ParticlesBackground>
  );
};

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  codeUrl,
  index,
}: {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: any;
  projectUrl: string;
  codeUrl: string;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const xProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? 50 : -50, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale: isMobile ? 1 : scaleProgress,
        opacity: isMobile ? 1 : opacityProgress,
        x: isMobile ? 0 : xProgress,
      }}
      className="group relative"
    >
      <div
        className={`flex flex-col lg:flex-row gap-8 items-center rounded-3xl bg-white dark:bg-gray-900 p-1 overflow-hidden shadow-2xl shadow-gray-500/10 dark:shadow-black/20 ${
          index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Glass Morphic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 dark:from-gray-800/30 dark:to-gray-900/10 backdrop-blur-lg rounded-3xl border border-white/20 dark:border-gray-700/50"></div>

        {/* Image Container */}
        <div className="relative w-full lg:w-1/2 h-80 lg:h-[28rem] overflow-hidden rounded-2xl">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                  transition 
                  group-hover:scale-[1.04]
                  group-hover:-translate-x-3
                  group-hover:translate-y-3
                  group-hover:-rotate-2
          
                  group-even:group-hover:translate-x-3
                  group-even:group-hover:translate-y-3
                  group-even:group-hover:rotate-2
          
                  group-even:right-[initial] group-even:-left-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
            <div className="flex space-x-4">
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all transform hover:-translate-y-1"
              >
                <FiExternalLink className="mr-2" />
                Live Demo
              </a>
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all transform hover:-translate-y-1"
              >
                <FiGithub className="mr-2" />
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 relative z-10">
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-full text-sm font-medium"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500 mb-6"
          >
            {title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex space-x-4 lg:hidden"
          >
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all"
            >
              <FiExternalLink className="mr-2" />
              Live Demo
            </a>
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all"
            >
              <FiGithub className="mr-2" />
              View Code
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
