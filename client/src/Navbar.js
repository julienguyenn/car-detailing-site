import React from 'react'
import './css/Navbar.css'
import {MDCTopAppBar} from '@material/top-app-bar'

export default function Navbar() {
  return (
    <nav id="navbar">
      <div className="contents">
        <h1 class="company-name" id="navbar-name">CLLECTVE</h1>
        <div id="nav-buttons">
          <a className="nav-but">SERVICES</a>
          <a className="nav-but">ABOUT</a>
          <a className="nav-but">CONTACT</a>
        </div>
      </div>
    </nav>
  )
}