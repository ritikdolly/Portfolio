import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../../utils/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 text-center"
    >
      <motion.h2
        className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white/10 dark:bg-gray-800/50 rounded-2xl shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              rotateX: 10,
              boxShadow: "0 0 25px rgba(59,130,246,0.4)",
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {category.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="px-4 py-2 bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow-sm hover:shadow-blue-400/30"
                  whileHover={{
                    scale: 1.15,
                    rotate: Math.random() * 10 - 5,
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
    </section>
  );
}
