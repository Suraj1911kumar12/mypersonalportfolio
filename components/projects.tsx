"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);
  const router = useRouter();

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 px-4">
        {projectsData?.slice(0, 4)?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-16">
        {projectsData?.length > 1 && (
          <motion.button
            onClick={() => router.push("/projects")}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -10px rgba(79, 70, 229, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-lg shadow-lg"
          >
            {/* Animated background */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

            {/* Button content with animation */}
            <span className="relative z-10 flex items-center gap-2">
              <span>View More Projects</span>
              <motion.span
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                →
              </motion.span>
            </span>

            {/* Glow effect */}
            <span className="absolute -inset-2 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></span>
          </motion.button>
        )}
      </div>
    </section>
  );
}
