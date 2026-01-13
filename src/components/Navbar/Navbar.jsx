import React, { useState } from "react";
import { HiOutlineSun, HiOutlineMoon, HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

const navLinks = ["about", "projects", "skills", "contact"];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-3 z-50 w-full px-4 sm:px-6"
    >
      {/* NAV BAR */}
      <motion.nav
        className="
          mx-auto max-w-6xl
          flex items-center justify-between
          px-5 py-3
          rounded-2xl
          bg-white/60 dark:bg-gray-900/60
          backdrop-blur-xl
          border border-gray-200/30 dark:border-gray-700/30
          shadow-[0_6px_25px_rgba(0,0,0,0.1)]
        "
        initial={{ scale: 0.96 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* LOGO */}
        <motion.div
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer select-none"
        >
          <span className="
            text-xl sm:text-2xl
            font-semibold tracking-tight
            bg-gradient-to-r from-blue-500 to-cyan-400
            bg-clip-text text-transparent
          ">
            Ritik Kumar
          </span>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((section) => (
            <motion.a
              key={section}
              href={`#${section}`}
              whileHover={{
                y: -2,
                color: theme === "light" ? "#2563eb" : "#22d3ee",
              }}
              transition={{ type: "spring", stiffness: 260 }}
              className="
                relative font-medium
                text-gray-700 dark:text-gray-300
                group
              "
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              <span className="
                absolute -bottom-1 left-0
                w-0 h-0.5
                bg-blue-500 dark:bg-cyan-400
                transition-all duration-300
                group-hover:w-full
              " />
            </motion.a>
          ))}

         
        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          onClick={() => setMenuOpen((p) => !p)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
          className="
            md:hidden p-2
            rounded-xl
            hover:bg-gray-200/70 dark:hover:bg-gray-800/70
            transition
          "
        >
          {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </motion.button>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden
              mx-auto max-w-6xl
              mt-3
              rounded-2xl
              bg-white/70 dark:bg-gray-900/70
              backdrop-blur-xl
              border border-gray-200/30 dark:border-gray-700/30
              shadow-lg
            "
          >
            <div className="flex flex-col items-center py-5 space-y-4">
              {navLinks.map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  whileHover={{ scale: 1.05 }}
                  onClick={closeMenu}
                  className="
                    text-lg font-medium
                    text-gray-800 dark:text-gray-200
                  "
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.a>
              ))}

              {/* MOBILE THEME TOGGLE */}
              <motion.button
                onClick={toggleTheme}
                whileTap={{ rotate: 180, scale: 0.9 }}
                aria-label="Toggle theme"
                className="
                  p-2 rounded-xl
                  hover:bg-gray-100/70 dark:hover:bg-gray-800/70
                  transition
                "
              >
                
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
