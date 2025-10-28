import React from 'react'
import Hero from '../sections/Hero/Hero'
import About from '../sections/About/About'
import Contact from '../sections/Contact/Contact'


export default function Home(){
return (
<div className="space-y-20">
<Hero />
<About/>
<Contact/>
</div>
)
}