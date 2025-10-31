import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mt-20 border-t border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg shadow-inner transition-colors duration-500"
    >
      <div className="container mx-auto px-6 py-10 text-center">
        {/* Name + Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100"
        >
          Crafted with by{" "}
          <span className="text-blue-600 dark:text-cyan-400 font-bold">
            Ritik Kumar
          </span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm text-gray-600 dark:text-gray-400 mt-2"
        >
          © {new Date().getFullYear()} | Built with{" "}
          <span className="text-blue-600 dark:text-cyan-400 font-medium">
            React
          </span>{" "}
          & Passion
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-6 mt-6"
        >
          {[
            {
              icon: <FaGithub size={22} />,
              link: "https://github.com/ritikdolly",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin size={22} />,
              link: "https://www.linkedin.com/in/ritik-kumar-0a2728192/",
              label: "LinkedIn",
            },
            {
              icon: <FaEnvelope size={22} />,
              link: "mailto:ritik409kumar@gmail.com",
              label: "Email",
            },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.2,
                y: -3,
                color: "#0891b2", // cyan
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom subtle fade line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 1.2, ease: "easeInOut" }}
          className="mt-8 mx-auto w-24 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full"
        ></motion.div>
      </div>
    </motion.footer>
  );
}
