"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Particle {
  id: number;
  size: number;
  shape: "circle" | "blob";
  style: {
    top: string;
    left: string;
  };
}

interface ParticlesBackgroundProps {
  children: ReactNode;
  particleCount?: number;
}

export default function ParticlesBackground({
  children,
  particleCount = 30,
}: ParticlesBackgroundProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particlesArray: Particle[] = Array.from({
      length: particleCount,
    }).map((_, index) => {
      const size = Math.random() * 8 + 2;
      const shape = Math.random() > 0.7 ? "blob" : "circle";

      return {
        id: index,
        size,
        shape,
        style: {
          top: `${Math.random() * 100}vh`,
          left: `${Math.random() * 100}vw`,
        },
      };
    });

    setParticles(particlesArray);
  }, [particleCount]);

  const colors = [
    "bg-amber-400/70",
    "bg-purple-400/70",
    "bg-blue-400/70",
    "bg-pink-400/70",
    "bg-emerald-400/70",
  ];

  return (
    <div className="relative min-h-[500vh] bg-transparent overflow-hidden">
      {/* Particles Layer */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {particles.map((particle) => {
          const color = colors[particle.id % colors.length];
          const duration = Math.random() * 20 + 10;
          const delay = Math.random() * 5;
          const xMovement = Math.random() * 200 - 100;

          return (
            <motion.div
              key={particle.id}
              className={`absolute ${color} ${
                particle.shape === "blob" ? "rounded-[40%]" : "rounded-full"
              }`}
              style={{
                ...particle.style,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: 0.7,
              }}
              initial={{ y: -100, x: 0 }}
              animate={{
                y: [0, window.innerHeight + 500],
                x: [0, xMovement],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
            />
          );
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
