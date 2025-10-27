import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useTheme } from '../../hooks/useTheme'


export default function Navbar(){
const { theme, toggleTheme } = useTheme()


return (
<header className="bg-white/60 backdrop-blur sticky top-0 z-30">
<nav className="container mx-auto px-4 py-3 flex items-center justify-between">
<Link to="/" className="font-bold text-xl">Ritik Kumar</Link>
<div className="flex items-center gap-4">
<a href="#projects" className="hidden md:inline">Projects</a>
<a href="#skills" className="hidden md:inline">Skills</a>
<a href="#contact" className="hidden md:inline">Contact</a>
<button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded">
{theme === 'light' ? <HiOutlineMoon size={18}/> : <HiOutlineSun size={18}/>}
</button>
</div>
</nav>
</header>
)
}