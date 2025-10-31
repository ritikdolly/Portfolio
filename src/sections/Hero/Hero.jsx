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
  const fullText = "Foull Stack Developer | Java | Spring Boot | React |";

  useEffect(() => {
    let index = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen px-10 py-20
                 bg-gradient-to-br from-gray-100/90 via-white/80 to-gray-200/80 
                 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-gray-900/70
                 backdrop-blur-2xl border border-white/20 dark:border-gray-700/40
                 shadow-[0_8px_40px_rgba(0,0,0,0.15)] rounded-2xl 
                 text-gray-900 dark:text-gray-100 transition-all duration-700 ease-in-out"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 50px rgba(255,255,255,0.1)",
      }}
      transition={{ duration: 1.2, type: "spring" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Left Content */}
      <motion.div
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight"
          whileHover={{ scale: 1.05 }}
        >
          Hi, I’m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
            Ritik Kumar
          </span>
        </motion.h1>

        <motion.h2
          className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 flex items-center 
                     gap-2 bg-white/20 dark:bg-gray-800/30 px-4 py-2 rounded-xl backdrop-blur-md border border-gray-300/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FaCode className="text-blue-500 text-xl" />
          <span className="whitespace-pre tracking-wide text-blue-700 dark:text-blue-400">
            {displayText}
          </span>
          <span className="border-r-4 border-blue-600 animate-pulse ml-1"></span>
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          I design elegant interfaces and architect robust backends — blending
          creativity, logic, and precision to deliver seamless web experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-5 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="#projects"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px rgba(59,130,246,0.6)",
            }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-500 
                       text-white rounded-full font-medium shadow-lg hover:opacity-90"
          >
            <FaBriefcase /> Projects
          </motion.a>

          <motion.a
            href="/resume.pdf"
            target="_blank"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255,255,255,0.2)",
            }}
            className="flex items-center gap-2 px-6 py-3 border border-gray-400/40 dark:border-gray-600/40 
                       text-gray-800 dark:text-gray-200 rounded-full font-medium hover:bg-gray-100/40 dark:hover:bg-gray-700/40"
          >
            <FaFileAlt /> Resume
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(34,197,94,0.6)",
            }}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-full font-medium"
          >
            <MdContactMail /> Contact
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <div className="flex gap-8 mt-8 text-3xl">
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

      {/* Right Image — Clean, No Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: 10 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        whileHover={{
          rotateY: 10,
          rotateX: 5,
          scale: 1.05,
          boxShadow: "0 30px 50px rgba(0,0,0,0.25)",
        }}
        transition={{ duration: 1 }}
        className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden mt-10 md:mt-0"
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      >
        <img
          src="/src/assets/images/ritikKr.png"
          alt="Ritik Kumar"
          className="w-full h-full object-cover rounded-3xl"
        />
      </motion.div>
    </motion.section>
  );
}
