import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex-1 space-y-6"
      >
        <motion.h1
          whileHover={{ scale: 1.05, color: "#3b82f6" }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white"
        >
          Hi, I'm Ritik — a Software Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-700 dark:text-gray-300 text-lg max-w-xl"
        >
          I build web apps, tools, and experiments focused on performance and delightful UX.
        </motion.p>

        <div className="flex gap-4 mt-8">
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(59,130,246,0.6)",
            }}
            transition={{ duration: 0.3 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700"
          >
            See Projects
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255,255,255,0.4)",
            }}
            transition={{ duration: 0.3 }}
            className="px-6 py-3 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            Resume
          </motion.a>
        </div>

        <div className="flex gap-4 mt-6 text-2xl">
          <motion.a
            href="https://github.com/ritikdolly"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10, color: "#3b82f6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ritik-kumar-0a2728192/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -10, color: "#0e76a8" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>

      {/* Profile Image with 3D tilt and NO border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        whileHover={{
          rotateY: 15,
          rotateX: 5,
          scale: 1.08,
          boxShadow: "0 20px 40px rgba(59,130,246,0.3)",
        }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden mt-10 md:mt-0 bg-transparent"
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      >
        <img
          src="/src/assets/images/ritikKr.png"
          alt="Ritik Kumar"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>
    </section>
  );
}
