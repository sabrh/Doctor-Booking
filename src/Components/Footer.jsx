import React from 'react'
import { NavLink, Link } from 'react-router'
import { FaFacebook } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Logo from '../assets/logo.png'

const Footer = () => {
    return(
      <footer className="footer footer-horizontal footer-center bg-white text-base-content rounded p-10">
        <div className='flex'>
          <img src={Logo} alt='logo icon' className='w-8 h-8 mr-1' />
          <Link to='/' className="font-bold text-2xl">Phudu</Link>
        </div>
        <nav className="grid grid-flow-col gap-4">
          
          <NavLink className={({ isActive }) => (isActive ? 'underline' : '')} end to='/'>Home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'underline' : '')} end to='/bookings'>My-Bookings</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'underline' : '')} end to='/faq'>FAQ</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'underline' : '')} end to='/contact'>ContactUs</NavLink>
          
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href='https://www.facebook.com/sabrinahaque114' target='_blank' className='text-2xl'><FaFacebook /></a>
            <a href='https://www.linkedin.com/in/sabrina-haque-07453b252/' target='_blank' className='text-2xl'><FaLinkedin /></a>
            <a href='https://github.com/sabrh' target='_blank' className='text-2xl'><FaGithub /></a>
            <a href='https://www.youtube.com' target='_blank' className='text-2xl'><FaYoutube /></a>
          </div>
        </nav>

      </footer>
    )
}

export default Footer