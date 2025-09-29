import React from 'react';
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='logo'>AD Agency</div>
        <ul className='nav-links'>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/testimonial">Testimonial</Link></li>
        </ul>
        <button className='contact-btn'>Contact Us</button>
    </nav>
  );
}