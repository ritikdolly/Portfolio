import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useTheme } from '../../hooks/useTheme'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-30 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm transition-colors duration-500">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-semibold text-2xl tracking-tight text-gray-800 dark:text-gray-100"
        >
          Ritik Kumar
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="hidden md:inline hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hidden md:inline hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hidden md:inline hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            Contact
          </a>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === 'light' ? (
              <HiOutlineMoon size={20} />
            ) : (
              <HiOutlineSun size={20} />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
