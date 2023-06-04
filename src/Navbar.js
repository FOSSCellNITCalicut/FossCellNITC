import React from 'react'
import './Navbar.css'
import {useState} from 'react';
import Logo from './images/Logo.svg'
import {FaTimes,FaBars} from 'react-icons/fa'

const Navbar = () => {
  const [isActive1, setIsActive1] = useState(true);
  const handleClick1 = event => {
    // setIsActive1(current => !current);
    setIsActive1(true);
  };

  const [isActive2, setIsActive2] = useState(false);
  const handleClick2 = event => {
    setIsActive2(true);
  };
  
  const [isActive3, setIsActive3] = useState(false);
  const handleClick3 = event => {
    setIsActive3(true);
  };

  const [isActive4, setIsActive4] = useState(false);
  const handleClick4 = event => {
    setIsActive4(true);
  };

  const [isMobile, setIsMobile] = useState(false)
  const handleClick=()=>{
    if(isMobile)
    setIsMobile(false);
    else
    setIsMobile(true);
  }
  return (
    <>
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='logo' className='logo-resizer'/>
      </div>
      <div className={isMobile ? "nav-items-mobile" : "nav-items"} >
        <li><a href="/" className={isActive1 ? 'active' : ''} onClick={handleClick1}>Home</a></li>
        <li><a href="/" className={isActive2 ? 'active' : ''} onClick={handleClick2}>About Us</a></li>
        <li><a href="/" className={isActive3 ? 'active' : ''} onClick={handleClick3}>Events</a></li>
        <li><a href="/" className={isActive4 ? 'active' : ''} onClick={handleClick4}>Who are we</a></li>
      </div>
      <button className='mobile-menu-icon' onClick={handleClick}>
      {isMobile?
                (<FaTimes size={20} style={{color:"white"}}/>):
                (<FaBars size={20} style={{color:"white"}}/>)
            }
      </button>  
    </div>
    </>
  )
}

export default Navbar
