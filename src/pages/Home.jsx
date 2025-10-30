import React from 'react'
import Hero from '../sections/Hero/Hero'
import About from '../sections/About/About'
import Contact from '../sections/Contact/Contact'
import Projects from '../sections/Projects/Projects'


export default function Home(){
return (
<div className="space-y-10">
<Hero />
<About/>
<Projects/>
<Contact/>
</div>
)
}