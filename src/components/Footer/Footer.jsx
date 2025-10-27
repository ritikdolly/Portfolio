import React from 'react'


export default function Footer(){
return (
<footer className="border-t py-8 mt-12">
<div className="container mx-auto px-4 text-center text-sm">© {new Date().getFullYear()} Ritik Kumar. Built with React.</div>
</footer>
)
}