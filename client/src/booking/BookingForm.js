import React, { useState } from 'react';
import ClientInfo from './ClientInfo';
import BookingDetails from './BookingDetails';
import useAppointmentData from '../hooks/useAppointmentData';
import Button from '@material-ui/core/Button';


export default function BookingForm() {
  const [clientInputs, changeInputs] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    text: false,
  })

  // handles service and date information
  const { bookingInput, 
          changeDate, 
          changeService, 
          bookSlot, 
          bookAppointment } = useAppointmentData();

  // sends data to the backend to book appointment
  function send(e) {
    e.preventDefault();
    const formattedData = {
      clientInputs,
      bookingInput
    }
    bookAppointment(formattedData);
  }

  return (
    <div>
      <ClientInfo clientInputs={clientInputs} changeInputs={changeInputs}/>
      <BookingDetails 
        bookingInput={bookingInput} 
        changeDate={changeDate} 
        changeService={changeService}
        bookSlot={bookSlot} />
      <Button onClick={send} variant="contained">Submit</Button>
    </div>
  )
}