import React from 'react'
import '../css/homepage.css'

export default function Homepage() {

  return (
    <div>
      <div className="large-box" id="banner">
        <p className="subtitle">Clean and Reliable.</p>
        <button className="generic-button">Learn more</button>
      </div>
      <div className="large-box2">
        <div className="description-box">
          <p className="subtitle category">What can we do to help?</p>
          <p className="description">Cllctve will try our best to make sure we can help maintain the quality of your car.</p>
        </div>
        <button className="visual-button services">SERVICES</button>
        <div className="description-box"></div>
        <button className="visual-button contact">CONTACT INFO</button>
      </div>
    </div>
  )
}

