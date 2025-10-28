import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 px-6 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 text-center md:text-left"
      >
        <motion.h1
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
        >
          Hi, I'm Ritik — a{" "}
          <span className="text-blue-600 dark:text-blue-400">Software Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 max-w-xl mx-auto md:mx-0 text-gray-700 dark:text-gray-300"
        >
          I build web apps, tools, and experiments focused on performance and
          delightful user experience.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 flex justify-center md:justify-start gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#projects"
            className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            See Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/resume.pdf"
            target="_blank"
            className="px-5 py-3 border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-6 flex justify-center md:justify-start gap-5"
        >
          <motion.a
            href="https://github.com/ritikdolly"
            target="_blank"
            aria-label="GitHub"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaGithub size={24} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ritik-kumar-0a2728192/"
            target="_blank"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaLinkedin size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        className="w-48 h-48 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 shadow-lg"
      >
        <img
          src="/src/assets/images/ritik.png"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
