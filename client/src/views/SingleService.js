import React from 'react';

export default function SingleService({service}) {
  return (
    <div className="services-box">
      <div className="row-box">
        <h2>{service.service_name}</h2>
        <p>${service.price}</p>
      </div>
        <p className="description">{service.description}</p>
    </div>
  )
}