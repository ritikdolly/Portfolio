import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../utils/data";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="
        relative
        py-16 sm:py-20 lg:py-28
        mx-3 sm:mx-6 lg:mx-16
        rounded-3xl
        text-center
        bg-white/50 dark:bg-gray-900/60
        backdrop-blur-xl
        border border-gray-200/40 dark:border-gray-700/40
        shadow-[0_8px_40px_rgba(0,0,0,0.15)]
        overflow-hidden
      "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <motion.h2
        className="
          text-3xl sm:text-4xl lg:text-5xl
          font-semibold
          tracking-tight
          text-gray-900 dark:text-gray-100
          mb-10 sm:mb-14
        "
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </motion.h2>

      {/* Skills Grid */}
      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6 sm:gap-8 lg:gap-10
          px-4 sm:px-6
        "
      >
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="
              p-6 sm:p-7
              rounded-2xl
              bg-white/60 dark:bg-gray-800/60
              backdrop-blur-md
              border border-gray-200/30 dark:border-gray-700/30
              shadow-[0_4px_20px_rgba(0,0,0,0.08)]
              transition-all duration-300
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Category Title */}
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              {category.title}
            </h3>

            {/* Skill Pills */}
            <div className="flex flex-wrap justify-center gap-2.5">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="
                    px-4 py-1.5
                    rounded-full
                    text-sm font-medium
                    text-blue-800 dark:text-blue-200
                    bg-blue-50/70 dark:bg-gray-700/60
                    border border-blue-200/40 dark:border-gray-600/40
                    transition-all duration-200
                  "
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 16px rgba(59,130,246,0.35)",
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
