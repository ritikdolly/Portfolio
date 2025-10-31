import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-24 mx-2 md:mx-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                 bg-white/40 dark:bg-gray-900/50 backdrop-blur-lg border border-gray-200/40 dark:border-gray-700/40
                 text-gray-800 dark:text-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto px-8 text-center">
        {/* Title */}
        <motion.h2
          className="text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-12 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hi, I’m{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            Ritik Kumar
          </span>
          — a passionate{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Full Stack Developer
          </span>{" "}
          skilled in{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Java, Spring Boot, React, Angular, and MySQL
          </span>
          . I create scalable and elegant web solutions that balance beautiful
          design with strong backend logic. My key projects include a{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Mentoring ERP System
          </span>
          , a{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Face Recognition Attendance Platform
          </span>
          , and a{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Banking Management System
          </span>
          — all built with precision, creativity, and modern technology.
        </motion.p>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          {[
            { title: "Experience", value: "2+ Years" },
            { title: "Projects", value: "10+" },
            { title: "Expertise", value: "Full Stack Development" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.08)] 
                         bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200/30 dark:border-gray-700/30
                         hover:shadow-[0_6px_25px_rgba(0,0,0,0.12)] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                {item.title}
              </h4>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
