import React from 'react'
import logo from '../assets/logo.webp'
import './navbar.css'
import { PiTelegramLogo } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
function Navabar() {
  return (
    <div className='wrapper'>
      <div className="main-img">
      <nav>
        <img src={logo} alt="" />
        <div className="center">
          <p>Home</p>
          <p>Courses</p>
          <p>About</p>
          <div className="search">
          <input type="search" placeholder='Search...' />
          <CiSearch className='search-inp'/>
          </div>
        </div>
        <div className="left">
        <PiTelegramLogo   className='admin' />
        </div>
      </nav>
      </div>

    </div>
  )
}

export default Navabar