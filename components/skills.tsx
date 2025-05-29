"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FiCode, FiCpu, FiDatabase, FiLayers } from "react-icons/fi";

const skillCategories = [
  {
    name: "Frontend",
    icon: <FiLayers className="w-5 h-5" />,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "Redux",
    ],
  },
  {
    name: "Backend",
    icon: <FiCpu className="w-5 h-5" />,
    skills: ["Node.js", "Express", "Python", "Django", "GraphQL", "Apollo"],
  },
  {
    name: "Database",
    icon: <FiDatabase className="w-5 h-5" />,
    skills: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    name: "Tools",
    icon: <FiCode className="w-5 h-5" />,
    skills: ["Git", "Framer Motion"],
  },
];

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      ease: [0.16, 1, 0.3, 1],
      duration: 0.6,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-6xl mx-auto scroll-mt-28 sm:mb-40 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My <span className="text-blue-600 dark:text-blue-400">Skills</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {category.name}
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {category.skills.map((skill: any, skillIndex) => {
                const globalIndex = skillsData.indexOf(skill);
                return (
                  <motion.li
                    key={skillIndex}
                    custom={globalIndex}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="text-sm"
                  >
                    <div className="flex items-center gap-2 bg-white/80 dark:bg-gray-700/80 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      {skill}
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Proficiency meter */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
      >
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
          My <span className="text-blue-600 dark:text-blue-400">Expertise</span>{" "}
          Level
        </h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            { skill: "React/Next.js", level: 90 },
            { skill: "TypeScript", level: 85 },
            { skill: "Node.js", level: 80 },
            { skill: "UI/UX Design", level: 75 },
          ].map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {item.skill}
                </span>
                <span className="text-blue-600 dark:text-blue-400">
                  {item.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  transition={{
                    delay: index * 0.1 + 0.5,
                    duration: 1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
