import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return <>
  
    <nav className='bg-gray-300'>
  <div className="container">
    <div>
      <ul className='flex py-2 text-2xl items-center justify-around'>
        <li> <NavLink to="">Home</NavLink></li>
        <li> <NavLink to="about">About</NavLink></li>
        <li> <NavLink to="gallery">Gallery</NavLink></li>
        <li> <NavLink to="parent">Parent</NavLink></li>
        
      </ul>
    </div>
  </div>
    </nav>
  </>
}
