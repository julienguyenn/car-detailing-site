import React from 'react';

export default function SingleService({service}) {
  let formattedDescription = service.description

  if (service.description) {
    const seperateByDashes = service.description.split('-').slice(1)
    formattedDescription = seperateByDashes.map((point) => {
      return (
        <li>{point}</li>
      )
    })
  }


  return (
    <div className="services-box">
      <div className="row-box">
        <h2>{service.service_name}</h2>
        <p>${service.price}</p>
      </div>
        <p className="description">{formattedDescription}</p>
    </div>
  )
}