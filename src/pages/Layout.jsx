import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Layout() {
  return (
    <div
      className="
        min-h-screen
        flex flex-col
        bg-gradient-to-b
        from-gray-50 to-gray-200
        dark:from-gray-900 dark:to-gray-800
        transition-colors duration-500
      "
    >
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main
        className="
          flex-1
          w-full
          max-w-screen-xl
          mx-auto
          px-4 sm:px-6 lg:px-10
          py-6 sm:py-10
          text-gray-800 dark:text-gray-100
          transition-colors duration-500
        "
      >
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
