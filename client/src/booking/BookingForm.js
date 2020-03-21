import React, { useState } from 'react';
import { startOfToday } from 'date-fns';
import ClientInfo from './ClientInfo';


const axios = require('axios').default;


// This handles the form to book an appointment
// still need to do validations

export default function BookingForm() {
  const [clientInputs, changeInputs] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    text: false,
  })

  console.log(startOfToday())


  // sends data to the backend to book appointment
  function send(e) {
    e.preventDefault();

    axios.post('/addData', clientInputs)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      <ClientInfo clientInputs={clientInputs} changeInputs={changeInputs} send={send}/>
    </div>
  )
}