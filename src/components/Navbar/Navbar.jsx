import React, { useState } from "react";
import { HiOutlineSun, HiOutlineMoon, HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = ["about", "projects", "skills", "contact"];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="sticky top-4 z-50 mx-auto max-w-5xl px-6"
    >
      <motion.nav
        className="flex justify-between items-center px-6 py-3 rounded-2xl 
        bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl 
        shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-gray-200/30 dark:border-gray-700/30"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* 🍏 Logo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={scrollToTop}
          className="cursor-pointer select-none"
        >
          <span className="font-semibold text-2xl tracking-tight pr-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Ritik Kumar
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              whileHover={{
                scale: 1.1,
                y: -2,
                color: theme === "light" ? "#2563eb" : "#22d3ee",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative text-gray-700 dark:text-gray-300 font-medium group"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 dark:bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileTap={{ rotate: 180, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            aria-label="Toggle theme"
            className="p-2 rounded-xl hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition"
          >
            {theme === "light" ? (
              <HiOutlineMoon size={20} className="text-gray-800" />
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
          className="md:hidden p-2 rounded-xl hover:bg-gray-200/70 dark:hover:bg-gray-800/70 transition"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </motion.button>
      </motion.nav>

      {/* 🍎 Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg border border-gray-200/30 dark:border-gray-700/30 shadow-lg"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  whileHover={{
                    scale: 1.08,
                    color: theme === "light" ? "#2563eb" : "#22d3ee",
                  }}
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
                className="p-2 rounded-lg hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition"
              >
                {theme === "light" ? (
                  <HiOutlineMoon size={22} className="text-gray-800" />
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
