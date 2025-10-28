import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 px-6 py-20 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          whileHover={{ scale: 1.05, color: "#3b82f6" }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6"
        >
          I'm <b>Ritik Kumar</b>, a dedicated <b>Full Stack Developer</b> who loves turning ideas into functional, polished digital experiences. 
          I specialize in <b>React</b>, <b>Spring Boot</b>, <b>MySQL</b>, and <b>TailwindCSS</b>.
        </motion.p>

        <motion.p
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6"
        >
          I focus on creating fast, scalable, and aesthetically appealing applications that combine intuitive UI with solid backend logic.
          Every project I build is driven by a passion for learning and improving.
        </motion.p>

        <motion.p
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
        >
          Beyond code, I’m fascinated by <b>AI</b>, <b>automation</b>, and <b>cloud systems</b>. 
          I believe great developers never stop learning — every challenge is a chance to evolve.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Core Skills
          </h3>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="flex flex-wrap justify-center gap-3 text-gray-800 dark:text-gray-200"
          >
            {[
              "React",
              "Angular",
              "Spring Boot",
              "Java",
              "Python",
              "MySQL",
              "MongoDB",
              "Node.js",
              "REST APIs",
              "Bootstrap",
              "TailwindCSS",
              "Data Structures & Algorithms",
              "Git & GitHub",
              "Vite",
            ].map((skill, i) => (
              <motion.span
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#3b82f6",
                  color: "#fff",
                  boxShadow: "0 0 20px rgba(59,130,246,0.6)",
                }}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium transition cursor-pointer"
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
