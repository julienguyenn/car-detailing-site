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
          <p className="description">At <span className="name">CLLECTVE</span> we promise a high quality process and result to make sure your car looks its best, take a look at what we can offer for your vehicle.</p>
          <div className="button-links">
            <a className="visual-button">
              <img src={require("../images/services.jpeg")} />
              <span className="button-text">Our Services</span>
            </a>
            <div></div>
            <a className="visual-button">
              <img src={require("../images/contactInfo.jpg")} />
              <span className="button-text">Contact Info</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

