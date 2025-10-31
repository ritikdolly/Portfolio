import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectList } from "../../utils/data";

export default function Projects() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projectList.length);
    }, 6000);
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
    <motion.section
      id="projects"
      className="relative py-36 px-6 md:px-16 text-center
                 bg-gradient-to-b from-white/80 via-white/40 to-transparent 
                 dark:from-gray-900/80 dark:via-gray-800/40 dark:to-transparent 
                 backdrop-blur-3xl border border-gray-300/30 dark:border-gray-700/40
                 rounded-[40px] mx-4 md:mx-12 shadow-[0_12px_80px_-20px_rgba(0,0,0,0.25)]"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="text-5xl font-semibold mb-16 tracking-tight text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Featured Projects
      </motion.h2>

      {/* 3D Carousel */}
      <div
        className="relative w-full max-w-7xl h-[560px] mx-auto flex items-center justify-center perspective-[2000px]"
      >
        <AnimatePresence>
          {projectList.map((project, index) => {
            const position = getPosition(index);

            const variants = {
              center: {
                x: 0,
                scale: 1,
                rotateY: 0,
                zIndex: 5,
                opacity: 1,
                filter: "blur(0px)",
              },
              left: {
                x: "-60%",
                scale: 0.85,
                rotateY: 25,
                zIndex: 3,
                opacity: 0.4,
                filter: "blur(3px)",
              },
              right: {
                x: "60%",
                scale: 0.85,
                rotateY: -25,
                zIndex: 3,
                opacity: 0.4,
                filter: "blur(3px)",
              },
              hidden: { opacity: 0, scale: 0.6, zIndex: 0 },
            };

            return (
              <motion.div
                key={project.id}
                className="absolute w-[80%] md:w-[55%] 
                           rounded-[32px] overflow-hidden 
                           bg-white/50 dark:bg-gray-800/60 
                           backdrop-blur-2xl border border-gray-300/30 dark:border-gray-700/30
                           shadow-[0_15px_80px_-25px_rgba(0,0,0,0.25)] 
                           transform-style-preserve-3d"
                initial={{ opacity: 0 }}
                animate={variants[position]}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 60px rgba(0,0,0,0.15)",
                }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover border-b border-gray-200/30"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex justify-center gap-10 text-2xl">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-black dark:hover:text-white transition-colors"
                      whileHover={{ scale: 1.2, rotate: 8 }}
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                      whileHover={{ scale: 1.2, rotate: -8 }}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>

                {/* Subtle Mac-like reflection */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/30 dark:from-gray-900/20 to-transparent" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-14">
        {projectList.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActive(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              active === index
                ? "bg-blue-600 w-6 shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                : "bg-gray-400/60 hover:bg-blue-400/70"
            }`}
            whileHover={{ scale: 1.25 }}
          />
        ))}
      </div>
    </motion.section>
  );
}
