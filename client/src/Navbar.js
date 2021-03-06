import React, { useState } from 'react'
import './css/Navbar.css'
import {Link} from "react-router-dom";


export default function Navbar() {
  const [navState, changeNavState] = useState({
    menuDisplay: '',
    infoDisplay: false
  })

  const openCloseNav = function () {
    if (navState.menuDisplay === '') {
      changeNavState((prev) => 
        ({ menuDisplay: 'openNav', 
          infoDisplay: !prev.infoDisplay
        }))
    } else {
      changeNavState((prev) => 
      ({ menuDisplay: '', 
        infoDisplay: !prev.infoDisplay
      }))
    }
  }

  return (
    <nav className={`navbar ${navState.menuDisplay}`}>
      <div id="contents">
        <Link to='/' onClick={() => changeNavState({menuDisplay: '', infoDisplay: false})}>
          <h1 className="company-name" id="navbar-name">CLLECTVE</h1>
        </Link>
          <button onClick={openCloseNav} className="nav-but">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
              <line x1="0" y1="12" x2="100" y2="12"></line>
              <line x1="0" y1="6" x2="100" y2="6"></line>
              <line x1="0" y1="18" x2="100" y2="18"></line>
            </svg>
          </button>
      </div>
      <ul id="menu-items">
        <Link to='/' onClick={openCloseNav}>HOME</Link>
        <Link to='/services' onClick={openCloseNav}>SERVICES</Link>
        <Link to='/contact' onClick={openCloseNav}>CONTACT</Link>
      </ul>
    </nav>
  )
}