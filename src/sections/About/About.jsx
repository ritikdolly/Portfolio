import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="
        py-16 sm:py-20 lg:py-24
        mx-3 sm:mx-6 lg:mx-10
        rounded-2xl
        bg-white/50 dark:bg-gray-900/60
        backdrop-blur-xl
        border border-gray-200/40 dark:border-gray-700/40
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        text-gray-800 dark:text-gray-100
        overflow-hidden
      "
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
        {/* Title */}
        <motion.h2
          className="
            text-3xl sm:text-4xl lg:text-5xl
            font-semibold
            tracking-tight
            text-gray-900 dark:text-gray-100
            mb-8 sm:mb-12
          "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="
            text-base sm:text-lg md:text-xl
            leading-relaxed
            text-gray-700 dark:text-gray-300
            max-w-4xl mx-auto
          "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
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
            Java, Spring Boot, React, MongoDB and MySQL
          </span>
          . I focus on building scalable, maintainable web applications that
          combine intuitive UI with reliable backend systems. My work includes a{" "}
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
          .
        </motion.p>

        {/* Highlights */}
        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 sm:mt-16">
          {[
            { title: "Projects", value: "10+" },
            { title: "Expertise", value: "Full Stack Development" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="
        w-full sm:w-[260px] lg:w-[300px]
        p-5 sm:p-6
        rounded-xl
        bg-white/60 dark:bg-gray-800/60
        backdrop-blur-md
        border border-gray-200/30 dark:border-gray-700/30
        shadow-[0_4px_15px_rgba(0,0,0,0.08)]
        transition-all duration-300
      "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
            >
              <h4 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-600 dark:text-gray-400">
                {item.title}
              </h4>
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mt-1">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
