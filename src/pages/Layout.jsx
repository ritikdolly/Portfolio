import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'


export default function Layout(){
return (
<div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-500 dark:from-gray-700 dark:to-gray-800">
<Navbar />
<main className="flex-1 container mx-auto px-4 py-10">
<Outlet />
</main>
<Footer />
</div>
)
}