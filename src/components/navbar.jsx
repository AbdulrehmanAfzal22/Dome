import React from 'react'
import './navbar.css'
import { FaMoon, FaGlobe } from 'react-icons/fa'

function navbar() {
  return (
    <div>
        <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
      <img 
              alt="DOME Logo" 
              loading="lazy" 
             
              decoding="async" 
              className="logo" 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DOME_TRANSPARENT%20LOGO_2%20copy%202-EU5RvRk0AFRvEp0iNgoH9y9iWUiChY.png"
            />
          <span className='bold'>DOME</span>
        </div>
        <ul className="nav-links">
          <li><a href="#">Products</a></li>
          <li><a href="#">Coming Soon</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
  <div><FaMoon/>&nbsp;&nbsp;<FaGlobe/>&nbsp;&nbsp;

        <button className="get-started-btn">Get Started</button>
      </div> 
      </div>
    </nav>
    </div>
  )
}

export default navbar
