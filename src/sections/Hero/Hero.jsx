import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


export default function Hero(){
return (
<section id="hero" className="flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} className="text-4xl md:text-6xl font-extrabold">Hi, I'm Ritik — a Software Developer</motion.h1>
<p className="mt-4 max-w-xl">I build web apps, tools, and experiments focused on performance and delightful UX.</p>
<div className="mt-6 flex gap-4">
<a href="#projects" className="btn">See projects</a>
<a href="/resume.pdf" className="btn-outline" target="_blank">Resume</a>
</div>
<div className="mt-6 flex gap-3 items-center">
<a aria-label="GitHub" href="https://github.com/ritikdolly" target="_blank"><FaGithub/></a>
<a aria-label="LinkedIn" href="https://www.linkedin.com/in/ritik-kumar-0a2728192/" target="_blank"><FaLinkedin/></a>
</div>
</div>
<div className="w-48 h-48 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
<img src="/src/assets/images/ritik.png" alt="profile" className="w-full h-full object-center"/>
</div>
</section>
)
}