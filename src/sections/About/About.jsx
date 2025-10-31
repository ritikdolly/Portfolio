import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I’m{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Ritik Kumar
          </span>
          , a passionate{" "}
          <span className="font-semibold">Full Stack Developer</span> skilled in{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">
            Java, Spring Boot, React, Angular, and MySQL
          </span>
          . I build scalable, high-performance web solutions with clean design
          and strong backend logic. My key works include a{" "}
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
          — each crafted with precision, innovation, and modern technology.
        </motion.p>

        {/* Animated Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {[
            { title: "Experience", value: "2+ Years" },
            { title: "Projects", value: "10+" },
            { title: "Expertise", value: "Full Stack Development" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/10 dark:bg-gray-800/40 rounded-2xl shadow-md backdrop-blur-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px rgba(59,130,246,0.6)",
              }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                {item.title}
              </h4>
              <p className="text-2xl font-semibold">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
