import React from "react";
import { motion } from "framer-motion";
import * as Icons from "react-icons/fa";
import { socialLinks } from "../../utils/data";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="
        mt-12 sm:mt-20
        bg-white/40 dark:bg-gray-900/40
        backdrop-blur-xl
        border-t border-gray-300/30 dark:border-gray-700/40
        shadow-[0_-4px_24px_rgba(0,0,0,0.1)]
        rounded-t-3xl
        text-center
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            text-lg sm:text-xl md:text-2xl
            font-semibold
            text-gray-900 dark:text-gray-100
            tracking-wide
          "
        >
          Designed & Built by{" "}
          <span className="text-blue-600 dark:text-cyan-400 font-bold">
            Ritik Kumar
          </span>
        </motion.h3>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="
            text-xs sm:text-sm
            text-gray-600 dark:text-gray-400
            mt-2 sm:mt-3
          "
        >
          © {new Date().getFullYear()} — Built with{" "}
          <span className="text-blue-600 dark:text-cyan-400 font-medium">
            React
          </span>{" "}
          & a touch of minimalism 🍏
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="
            flex justify-center
            gap-5 sm:gap-8
            mt-6 sm:mt-8
          "
        >
          {socialLinks.map((social) => {
            const Icon = Icons[social.icon];
            return (
              <motion.a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{
                  scale: 1.2,
                  y: -4,
                  color: social.color,
                  textShadow: `0 0 10px ${social.color}`,
                }}
                transition={{ type: "spring", stiffness: 260 }}
                className="text-gray-700 dark:text-gray-300"
              >
                <Icon size={18} className="sm:size-[22px]" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="
            mt-8 sm:mt-10
            mx-auto
            w-24 sm:w-32
            h-0.5
            bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500
            rounded-full
            shadow-[0_0_12px_rgba(59,130,246,0.5)]
          "
        />
      </div>
    </motion.footer>
  );
}
