import React from 'react';
import useData from '../hooks/useData';
import SingleService from './SingleService';
import '../css/Service.css'

export default function Services() {

  // handles grabs all service info in database
  const { services } = useData();

  const serviceComponents = services.map((s) => {
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
      <p className="disclaimer">*These are minimum prices, all prices increase for larger vehicles.
      <br></br>
       *For any specific work i.e just stain removal, seat shampoo, carpet shampoo, etc. please <a href="/contact"className="underlined">contact</a> for special pricing.*</p>
      {serviceComponents}
      <a href="/contact"className="generic-button longer">Want to book an appointment?</a>
    </div>
  )
}