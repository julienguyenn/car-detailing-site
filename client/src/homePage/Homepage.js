import React from 'react'
import '../css/homepage.css'

export default function Homepage() {

  return (
    <div>
      <div className="large-box" id="banner">
        <p className="slogan">Clean. Fast. Reliable.
          <br></br>
          <span className="small-text">Learn more about us</span></p>
      </div>
      <div className="large-box2">
        <button className="visual-button services">SERVICES</button>
        <button className="visual-button contact">CONTACT INFO</button>
      </div>
    </div>
  )
}

