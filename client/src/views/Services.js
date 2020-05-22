import React from 'react';
import useData from '../hooks/useData';
import SingleService from './SingleService';

export default function Services() {

  // handles service and date information
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
    </div>
  )
}