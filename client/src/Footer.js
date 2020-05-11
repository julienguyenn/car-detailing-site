import React from 'react'
import './css/Footer.css'


export default function Footer() {
  return (
    <div id="footer">
      <a>
        <img alt="insta" src={require("./images/instagram.png")}></img>
      </a>
      <p>Check out images on our instagram!</p>
    </div>
  )
}