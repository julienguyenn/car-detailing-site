import React, { useState } from 'react';
import ClientInfo from './ClientInfo';
import BookingDetails from './BookingDetails';
import useAppointmentData from '../hooks/useAppointmentData';


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
  const { bookingInput, changeDate, changeService } = useAppointmentData();
  console.log(bookingInput)

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
      <BookingDetails bookingInput={bookingInput} changeDate={changeDate} changeService={changeService} />
    </div>
  )
}