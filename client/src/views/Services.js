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
      <h1>Services</h1>
      {serviceComponents}
      <a href="/contact"className="generic-button longer">Want to book an appointment?</a>
    </div>
  )
}