// components/splash-loader.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const motivationalPhrases = [
  "Stay motivated!",
  "Great things take time",
  "Almost there...",
  "Your journey matters",
  "Keep pushing forward",
];

export default function SplashLoader() {
  const [loading, setLoading] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const colors = ["#3B82F6", "#EC4899", "#10B981", "#F59E0B", "#8B5CF6"];

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      document.body.style.overflow = "auto";
    };

    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % motivationalPhrases.length);
    }, 1500);

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(timer);
      clearInterval(phraseInterval);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`${playfair.variable} font-serif`}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 z-[9999]"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="relative mb-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute inset-0 rounded-full blur-md"
              style={{
                background: `radial-gradient(circle, ${colors[currentPhrase]}33, transparent 70%)`,
              }}
            />
            <div className="h-24 w-24 rounded-full bg-white dark:bg-gray-800 shadow-xl flex items-center justify-center relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-16 w-16 rounded-full border-4 border-transparent"
                style={{
                  borderTopColor: colors[currentPhrase],
                  borderRightColor: colors[currentPhrase],
                }}
              />
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhrase}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.h2
                animate={{
                  color: colors,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="text-4xl font-bold mb-2"
              >
                {motivationalPhrases[currentPhrase]}
              </motion.h2>
              <motion.p
                animate={{
                  color: ["#6B7280", "#9CA3AF", "#6B7280"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-lg dark:text-gray-300"
              >
                Loading your inspiration...
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
            className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full mt-8 max-w-md"
          >
            <motion.div
              animate={{
                background: `linear-gradient(90deg, ${colors[currentPhrase]}, ${
                  colors[(currentPhrase + 1) % colors.length]
                })`,
              }}
              transition={{ duration: 1.5 }}
              className="h-full rounded-full"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
