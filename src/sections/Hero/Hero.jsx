import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa";
import { socialLinks } from "../../utils/data";
import { FaFileAlt, FaBriefcase, FaCode } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

export default function Hero() {
  const fullText = "Fiull Stack Developer | Java | Spring Boot | React | DevOps";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 55);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="hero"
      className="
        min-h-screen w-full
        flex flex-col-reverse md:flex-row
        items-center justify-center
        gap-14
        px-6 sm:px-10 lg:px-20
        py-24
        rounded-2xl
        bg-gradient-to-br from-gray-100 via-white to-gray-200
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        text-gray-900 dark:text-gray-100
        transition-colors duration-700
      "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-6 max-w-xl text-center md:text-left">
        <motion.h1
          className="
            text-4xl sm:text-5xl lg:text-6xl
            font-extrabold leading-tight
          "
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
            Ritik Kumar
          </span>
        </motion.h1>

        <div
          className="
            inline-flex items-center gap-2
            px-4 py-2
            rounded-xl
            bg-white/60 dark:bg-gray-800/50
            border border-gray-300/20
            backdrop-blur
            text-sm sm:text-base
            font-semibold
            justify-center md:justify-start
          "
        >
          <FaCode className="text-blue-500" />
          <span className="tracking-wide text-blue-700 dark:text-blue-400">
            {displayText}
          </span>
          <span className="ml-1 w-[2px] h-5 bg-blue-600 animate-pulse" />
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          I build clean user interfaces and scalable backend systems — focusing
          on performance, clarity, and real-world impact.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-6">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.07 }}
            className="
              flex items-center gap-2
              px-6 py-3
              rounded-full
              bg-gradient-to-r from-blue-600 to-purple-500
              text-white font-medium
              shadow-lg
            "
          >
            <FaBriefcase /> Projects
          </motion.a>

          <motion.a
            href="https://drive.google.com/drive/folders/1u-sdqVC9FhCa6XBG-mcJ7J0P_pTIJ0Jf?usp=sharing"
            target="_blank"
            whileHover={{ scale: 1.07 }}
            className="
              flex items-center gap-2
              px-6 py-3
              rounded-full
              border border-gray-400/40
              text-gray-800 dark:text-gray-200
              hover:bg-gray-100/40 dark:hover:bg-gray-700/40
            "
          >
            <FaFileAlt /> Resume
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07 }}
            className="
              flex items-center gap-2
              px-6 py-3
              rounded-full
              bg-gradient-to-r from-green-600 to-emerald-500
              text-white font-medium
            "
          >
            <MdContactMail /> Contact
          </motion.a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-2xl justify-center md:justify-start pt-4">
          {socialLinks.map((social) => {
            const Icon = Icons[social.icon];
            return (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.25,
                  color: social.color,
                }}
                className="transition-colors text-gray-700 dark:text-gray-300"
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="
          w-56 h-56
          sm:w-72 sm:h-72
          lg:w-96 lg:h-96
          rounded-3xl
          overflow-hidden
          shadow-xl
        "
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/src/assets/images/ritik.png"
          alt="Ritik Kumar"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </motion.section>
  );
}
