import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
  FaBriefcase,
  FaCode,
} from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");

  // ✅ Declare fullText outside of useEffect (and not as dependency)
  const fullText = "Fiull Stack Developer | Java | Spring Boot | React |";

  useEffect(() => {
    let index = 0;
    setDisplayText(""); // clear text first

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);

    // cleanup
    return () => clearInterval(timer);
  }, []); // ✅ empty dependency array — run once only

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-8 py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex-1 space-y-6"
      >
        {/* Name */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white"
        >
          Hi, I’m{" "}
          <span className="text-blue-600 dark:text-blue-400">Ritik Kumar</span>
        </motion.h1>

        {/* Typewriter Role */}
        <motion.h2
          className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center justify-center md:justify-start gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <FaCode className="text-blue-500 text-xl" />
          <span className="whitespace-pre text-blue-700 dark:text-blue-400 tracking-wide">
            {displayText}
          </span>
          <span className="border-r-4 border-blue-600 animate-pulse ml-1"></span>
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I craft seamless web experiences with scalable backend logic and
          interactive frontend designs — bringing ideas to life with precision
          and creativity.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 20px rgba(59,130,246,0.6)",
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700"
          >
            <FaBriefcase /> Projects
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 20px rgba(255,255,255,0.4)",
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 px-6 py-3 border border-gray-400 dark:border-gray-600 
            text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <FaFileAlt /> Resume
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 20px rgba(34,197,94,0.6)",
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700"
          >
            <MdContactMail /> Contact
          </motion.a>
        </motion.div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-8 text-2xl">
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

          <motion.a
            href="mailto:ritik409kumar@gmail.com"
            whileHover={{ scale: 1.2, rotate: 10, color: "#22c55e" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </motion.div>

      {/* Right Image */}
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
        className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mt-10 md:mt-0 bg-transparent"
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
