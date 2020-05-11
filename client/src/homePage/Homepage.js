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
          <p className="description">At <span className="name">CLLCTIVE</span> we promise a high quality process and result to make sure your car looks its best, take a look at what we can offer for your vehicle.</p>
        </div>
        <button className="visual-button services"><span className="generic-button">Our Services</span></button>
        <div className="description-box">
          <p className="description">Whether its questions about our practices or to book an appointment, don't be shy to contact us.</p>
          <p className="subtitle category">Have questions? Get in touch.</p>
        </div>
        <button className="visual-button contact"><span className="generic-button">Contact Info</span></button>
      </div>
    </div>
  )
}

