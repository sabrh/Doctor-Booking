import React, { useState } from 'react'
import { NavLink, Link } from 'react-router'
import LoginModal from '../pages/auth/LoginModal';

import Logo from '../assets/logo.png'

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
    return (
      <>
    <div className="navbar bg-gray-200 shadow-sm px-0 md:px-12 lg:px-20">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/bookings'>My-Bookings</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
                <li><Link to='/contact'>ContactUs</Link></li>
              </ul>
            </div>
              <img src={Logo} alt='logo icon' className='w-8 h-8 mr-1.5' />
              <Link to='/' className="font-bold text-2xl">Doctor Booking</Link>
          </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink className={({ isActive }) => (isActive ? 'underline' : '')} end to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'underline' : '')} end to='/bookings'>My-Bookings</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'underline' : '')} end to='/faq'>FAQ</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'underline' : '')} end to='/contact'>ContactUs</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button onClick={() => setShowLogin(true)} className="btn btn-primary btn-outline mr-2 rounded-full">Login/ Signup</button>
          <Link to='/emergency'><button className="btn btn-primary rounded-full">Emergency</button>
          </Link>
        </div>
    </div>
    <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
    )
}

export default Navbar