import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <header>
    <h1>Roysambu Action Hub</h1>
    <nav className='nav'>
        <ul className='nav_ul'>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/#manifesto">MANIFESTO</Link></li>
            <li><Link to="/#pillars">PILLARS</Link></li>
             <li><Link to="/#archive">ARCHIVE</Link></li>
            <li><Link to="/#involve">GET INVOLVED</Link></li>
           
        </ul>
    </nav>
   </header>
  )
}

export default Navbar
