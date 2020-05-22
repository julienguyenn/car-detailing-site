import React from 'react';

export default function SingleService({service}) {
  console.log(service)
  return (
    <div>
      <h3>{service.service_name}</h3>
      <p>{service.price}
        <br></br>
        {service.description}</p>
    </div>
  )
}