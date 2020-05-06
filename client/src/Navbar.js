import React from 'react'
import './navBar.sass'
export default function Navbar() {
  return (
    <nav id="navbar">
      <h1 class="company-name" id="navbar-name">CLLECTVE</h1>
      <div id="nav-buttons">
        <button className="nav-but">Services</button>
        <button className="nav-but">About</button>
        <button className="nav-but">Contact</button>
      </div>
    </nav>
  )
}