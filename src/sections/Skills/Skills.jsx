import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../utils/data";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative py-28 mx-6 sm:mx-10 lg:mx-20 text-center rounded-3xl overflow-hidden
                 bg-white/40 dark:bg-gray-900/60 backdrop-blur-2xl 
                 border border-gray-200/50 dark:border-gray-700/40 
                 shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* Title */}
      <motion.h2
        className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-14 tracking-tight"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </motion.h2>

      {/* Skills Grid */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="group p-8 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md
                       border border-gray-200/40 dark:border-gray-700/40 
                       shadow-[0_4px_25px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.12)]
                       transition-all duration-700 ease-out"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              scale: 1.04,
              y: -5,
              borderColor: "rgba(59,130,246,0.4)",
              boxShadow:
                "0 12px 35px rgba(59,130,246,0.25), 0 4px 15px rgba(59,130,246,0.15)",
            }}
          >
            {/* Title */}
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-5">
              {category.title}
            </h3>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-br from-blue-50/60 to-white/40
                             dark:from-gray-700/60 dark:to-gray-800/40
                             text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium
                             border border-blue-200/30 dark:border-gray-600/40 
                             shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all duration-300"
                  whileHover={{
                    scale: 1.12,
                    rotate: Math.random() * 6 - 3,
                    boxShadow:
                      "0 0 20px rgba(59,130,246,0.4), 0 0 35px rgba(59,130,246,0.25)",
                    backgroundColor: "rgba(255,255,255,0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 200 }}
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
