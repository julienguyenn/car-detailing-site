import React from 'react';
import useData from '../hooks/useData';
import SingleService from './SingleService';
import '../css/Service.css'

export default function Services() {
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
      <p className="disclaimer">*These are minimum prices ( excluding add-ons ), all prices increase for larger vehicles.
      <br></br>
       *For any specific work i.e just stain removal, seat shampoo, carpet shampoo, etc. please <a href="/contact"className="underlined">contact</a> for special pricing.*</p>
        {regularServices}
       <h1>Add-ons / Other Services</h1>
        {extraServices}
      <a href="/contact"className="generic-button longer">Want to book an appointment?</a>
    </div>
  )
}