import React from 'react';
import useData from '../hooks/useData';
import SingleService from './SingleService';
import '../css/Service.css';
import {Link} from "react-router-dom";

export default function Services() {
  window.scrollTo(0, 0);
  // handles grabs all service info in database
  const { bookingOptions } = useData();

  const regularServices = bookingOptions.regularServices.map((s) => {
    return (
      <SingleService
        key={s.id}
        service={s}
      />
    )
  })

  const extraServices = bookingOptions.extraServices.map((s) => {
    return (
      <SingleService
        key={s.id}
        service={s}
      />
    )
  })

  return (
    <div className="info-body">
      <h1>Car Detailing Services</h1>
      <p className="disclaimer">*These are minimum prices, all prices increase for larger vehicles (excluding add-ons).
      <br></br>
       *For any specific work i.e just stain removal, seat shampoo, carpet shampoo, etc. please <Link to="/contact"className="underlined">contact</Link> for special pricing.*</p>
        {regularServices}
       <h1>Add-ons / Other Services</h1>
        {extraServices}
      <Link to="/contact"className="generic-button longer">Want to book an appointment?</Link>
    </div>
  )
}