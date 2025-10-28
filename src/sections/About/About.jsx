import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Title */}
        <motion.h2
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          About Me
        </motion.h2>

        {/* Description */}
        {[
          `I'm Ritik Kumar, a passionate and detail-oriented Full Stack Developer focused on crafting clean, efficient, and user-centric web applications. I love transforming ideas into elegant, functional products using technologies like React, Spring Boot, and MySQL.`,
          `I thrive on challenges that require both creativity and precision. Whether it’s building a modern UI, optimizing a backend API, or connecting systems together — I enjoy making things that are fast, accessible, and reliable.`,
          `When I’m not coding, I love exploring new technologies, reading about AI and cloud trends, and continuously improving my problem-solving skills. I believe that learning never stops — every line of code is an opportunity to grow.`,
        ].map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg"
          >
            {text}
          </motion.p>
        ))}

        {/* Animated Skill Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Core Skills
          </h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 text-gray-800 dark:text-gray-200"
          >
            {[
              "React",
              "Angular",
              "Node.js",
              "Spring Boot",
              "Java",
              "MySQL",
              "MongoDB",
              "REST APIs",
              "TailwindCSS",
              "Bootstrap",
              "Data Structures & Algorithms",
              "Git & GitHub",
              "Maven",
              "Vite",
            ].map((skill, i) => (
              <motion.span
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgb(59,130,246)",
                  color: "#fff",
                }}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium cursor-default transition"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
