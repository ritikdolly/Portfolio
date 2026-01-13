import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectList } from "../../utils/data";

export default function Projects() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % projectList.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const total = projectList.length;

  const getPosition = (index) => {
    if (index === active) return "center";
    if (index === (active + 1) % total) return "right";
    if (index === (active - 1 + total) % total) return "left";
    return "hidden";
  };

  const variants = {
    center: {
      x: 0,
      scale: 1,
      rotateY: 0,
      opacity: 1,
      zIndex: 5,
    },
    left: {
      x: "-55%",
      scale: 0.88,
      rotateY: 18,
      opacity: 0.35,
      zIndex: 3,
    },
    right: {
      x: "55%",
      scale: 0.88,
      rotateY: -18,
      opacity: 0.35,
      zIndex: 3,
    },
    hidden: {
      opacity: 0,
      scale: 0.6,
      zIndex: 0,
    },
  };

  return (
    <motion.section
      id="projects"
      className="
        py-20 sm:py-28 lg:py-36
        px-4 sm:px-8 lg:px-16
        mx-3 sm:mx-6 lg:mx-12
        rounded-[32px]
        bg-gradient-to-b from-white/80 via-white/50 to-transparent
        dark:from-gray-900/80 dark:via-gray-800/50 dark:to-transparent
        backdrop-blur-xl
        border border-gray-300/30 dark:border-gray-700/40
        shadow-[0_12px_70px_-20px_rgba(0,0,0,0.25)]
        text-center
      "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-10 sm:mb-14 text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects & Work
      </motion.h2>

      {/* Desktop 3D Carousel */}
      <div
        className="relative hidden lg:flex w-full max-w-7xl h-[520px] mx-auto items-center justify-center perspective-[1600px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence>
          {projectList.map((project, index) => {
            const position = getPosition(index);

            return (
              <motion.div
                key={project.id}
                className="
                  absolute w-[55%]
                  rounded-[28px]
                  overflow-hidden
                  bg-white/60 dark:bg-gray-800/60
                  backdrop-blur-xl
                  border border-gray-300/30 dark:border-gray-700/30
                  shadow-[0_12px_60px_-20px_rgba(0,0,0,0.25)]
                  transform-style-preserve-3d
                "
                animate={variants[position]}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />

                <div className="p-7">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>

                  <div className="flex justify-center gap-8 text-xl">
                    <a href={project.github} target="_blank">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Mobile / Tablet Cards */}
      <div className="lg:hidden grid gap-8 max-w-3xl mx-auto">
        {projectList.map((project) => (
          <motion.div
            key={project.id}
            className="
              rounded-2xl overflow-hidden
              bg-white/70 dark:bg-gray-800/70
              border border-gray-300/30 dark:border-gray-700/30
              shadow-lg
            "
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
              loading="lazy"
            />

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex justify-center gap-6 text-xl">
                <a href={project.github} target="_blank">
                  <FaGithub />
                </a>
                <a href={project.live} target="_blank">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dots */}
      <div className="hidden lg:flex justify-center gap-3 mt-12">
        {projectList.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-3 rounded-full transition-all ${
              active === index
                ? "w-6 bg-blue-600"
                : "w-3 bg-gray-400/60"
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
}
