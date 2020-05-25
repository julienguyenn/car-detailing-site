import React from 'react';
import '../css/Contact.css';

export default function Contact() {
  window.scrollTo(0, 0);

  return (
    <div className="info-body">
      <h1>Contact Info</h1>
      <p className="info">Call or message to book an appointment or ask questions.</p>
      <p className="info"><span>Tommy Nguyen</span>
        <br>
        </br>
        Call & Text: (226) 789 0576
        <br>
        </br>
        E-mail: nguyentommy62@outlook.com
        <br>
        </br>
        Waterloo, Ontario
      </p>
    </div>
  )
}