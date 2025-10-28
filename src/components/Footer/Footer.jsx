import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-inner transition-colors duration-500">
      <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()}
        <span className="font-semibold text-gray-900 dark:text-gray-100">
          {' '}Ritik Kumar
        </span>. Built with{' '}
        <span className="text-blue-600 dark:text-cyan-400 font-medium">
          React
        </span>.
      </div>

      {/* Optional: Add social links */}
      <div className="flex justify-center gap-6 pb-4">
        <a
          href="https://github.com/ritikdolly"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ritik-kumar-0a2728192/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
