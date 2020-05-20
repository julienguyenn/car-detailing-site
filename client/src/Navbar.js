import React from 'react'
import './css/Navbar.css'

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="contents">
        <h1 class="company-name" id="navbar-name">CLLECTVE</h1>
          <button className="nav-but">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
              <line x1="0" y1="12" x2="100" y2="12"></line>
              <line x1="0" y1="6" x2="100" y2="6"></line>
              <line x1="0" y1="18" x2="100" y2="18"></line>
            </svg>
          </button>
      </div>
    </nav>
  )
}