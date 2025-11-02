import React from "react";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa"; // import all icons from react-icons
import { socialLinks } from "../../utils/data";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
      className="mt-24 bg-white/30 dark:bg-gray-900/30 
                 backdrop-blur-2xl border-t border-gray-300/40 dark:border-gray-700/40
                 shadow-[0_-4px_30px_rgba(0,0,0,0.1)] 
                 rounded-t-3xl text-center"
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-wide"
        >
          Designed & Built by{" "}
          <span className="text-blue-600 dark:text-cyan-400 font-bold hover:text-blue-700 dark:hover:text-cyan-300 transition-colors">
            Ritik Kumar
          </span>
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-sm text-gray-600 dark:text-gray-400 mt-3"
        >
          © {new Date().getFullYear()} — Built with{" "}
          <span className="text-blue-600 dark:text-cyan-400 font-medium">
            React
          </span>{" "}
          & a touch of minimalism 🍏
        </motion.p>

        

        {/* Social Links (from data file) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex justify-center gap-8 mt-8"
        >
          {socialLinks.map((social) => {
            const IconComponent = Icons[social.icon];
            return (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  y: -5,
                  color: social.color,
                  textShadow: `0 0 12px ${social.color}`,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-700 dark:text-gray-300 hover:opacity-90 transition-all"
                aria-label={social.label}
              >
                <IconComponent size={22} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Glowing Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 1.2, ease: "easeInOut" }}
          className="mt-10 mx-auto w-32 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        ></motion.div>
      </div>
    </motion.footer>
  );
}
