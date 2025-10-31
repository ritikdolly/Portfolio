import React from 'react'
import Hero from '../sections/Hero/Hero'
import About from '../sections/About/About'
import Contact from '../sections/Contact/Contact'
import Projects from '../sections/Projects/Projects'
import Skills from '../sections/Skills/Skills'


export default function Home(){
return (
<div className="space-y-20">
<Hero />
<About/>
<Skills/>
<Projects/>
<Contact/>
</div>
)
}