import React from 'react'
import './Navbar.css'
import {useState} from 'react';
import Logo from '../Svgs/Logo.svg'

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


  return (
    <>
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='nav-items'>
        <li><a href="/" className={isActive1 ? 'active' : ''} onClick={handleClick1}>Home</a></li>
        <li><a href="/" className={isActive2 ? 'active' : ''} onClick={handleClick2}>About Us</a></li>
        <li><a href="/" className={isActive3 ? 'active' : ''} onClick={handleClick3}>Events</a></li>
        <li><a href="/" className={isActive4 ? 'active' : ''} onClick={handleClick4}>Who are we</a></li>
      </div>  
    </div>
    </>
  )
}

export default Navbar
