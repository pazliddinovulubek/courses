import React, { useState } from 'react';
import logo from '../assets/logo.webp';
import './navbar.css';
import { PiTelegramLogo } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Navabar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className='wrapper'>
      <div className="main-img">
        <nav>
          <img src={logo} alt="Logo" />
          <div className={`center ${isMenuVisible ? 'active' : ''}`}>
            <Link className='nav-p' to={'/'}>Bosh Sahifa</Link>
            <Link className='nav-p' to={'Courses'}>Kurslar</Link>
            <Link className='nav-p' to={'about'}>Platforma xaqida</Link>
            <div className="search">
              <input type="search" placeholder='Search...' />
              <CiSearch className='search-inp' />
            </div>
          </div>
          <div className="left">
            <PiTelegramLogo className='admin' />
            <svg 
              className='menu' 
              xmlns="http://www.w3.org/2000/svg" 
              height="24px" 
              viewBox="0 -960 960 960" 
              width="24px" 
              fill="white"
              onClick={toggleMenu}
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navabar;
