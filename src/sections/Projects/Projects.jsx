import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectList } from "../../utils/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projectList.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    const total = projectList.length;
    if (index === active) return "center";
    if (index === (active + 1) % total) return "right";
    if (index === (active - 1 + total) % total) return "left";
    return "hidden";
  };

  return (
    <section
      id="projects"
      className="py-24 flex flex-col items-center text-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <h2 className="text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400">
        Projects
      </h2>

      <div className="relative w-full max-w-5xl h-[480px] flex items-center justify-center overflow-hidden">
        <AnimatePresence>
          {projectList.map((project, index) => {
            const position = getPosition(index);

            const variants = {
              center: {
                x: 0,
                scale: 1,
                zIndex: 3,
                opacity: 1,
                rotateY: 0,
              },
              left: {
                x: "-60%",
                scale: 0.8,
                zIndex: 2,
                opacity: 0.6,
                rotateY: 25,
              },
              right: {
                x: "60%",
                scale: 0.8,
                zIndex: 2,
                opacity: 0.6,
                rotateY: -25,
              },
              hidden: { opacity: 0, scale: 0.6, zIndex: 0 },
            };

            return (
              <motion.div
                key={project.id}
                className="absolute w-[70%] md:w-[55%] bg-white/10 dark:bg-gray-800/60 rounded-3xl shadow-xl backdrop-blur-md overflow-hidden cursor-pointer"
                initial={{ opacity: 0 }}
                animate={variants[position]}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex justify-center gap-6 text-xl">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-500 transition-colors"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-3 mt-10">
        {projectList.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full ${
              active === index ? "bg-blue-600 w-6" : "bg-gray-400"
            } transition-all`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
}
