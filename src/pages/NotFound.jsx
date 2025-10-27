import React from 'react'
import { Link } from 'react-router-dom'


export default function NotFound(){
return (
<div className="text-center py-20">
<h1 className="text-6xl font-bold">404</h1>
<p className="mt-4">Page not found.</p>
<Link to="/" className="mt-6 inline-block underline">Back home</Link>
</div>
)
}