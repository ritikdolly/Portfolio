import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { useTheme } from "../../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors duration-500"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/"
            className="font-bold text-2xl tracking-tight text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            Ritik Kumar
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["projects", "skills", "contact"].map((section, index) => (
            <motion.a
              key={section}
              href={`#${section}`}
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ duration: 0.2 }}
              className="text-gray-700 dark:text-gray-300 font-medium relative group"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <motion.span
                layoutId={`underline-${section}`}
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"
              ></motion.span>
            </motion.a>
          ))}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ rotate: 180, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? (
              <HiOutlineMoon size={20} className="text-gray-700" />
            ) : (
              <HiOutlineSun size={20} className="text-yellow-400" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </motion.button>
      </nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {["projects", "skills", "contact"].map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  whileHover={{ scale: 1.1, color: "#3b82f6" }}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 dark:text-gray-200 text-lg font-medium transition-colors"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.a>
              ))}

              {/* Theme Toggle (Mobile) */}
              <motion.button
                onClick={toggleTheme}
                whileTap={{ rotate: 180, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                aria-label="Toggle theme"
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {theme === "light" ? (
                  <HiOutlineMoon size={22} className="text-gray-700" />
                ) : (
                  <HiOutlineSun size={22} className="text-yellow-400" />
                )}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
