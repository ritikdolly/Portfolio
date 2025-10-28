import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-10 text-gray-800 dark:text-gray-100 transition-colors duration-500">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
