import React, { useState } from 'react';
import ClientInfo from './ClientInfo';
import BookingDetails from './BookingDetails';
import useData from '../hooks/useData';
import Button from '@material-ui/core/Button';
import { format, getYear } from 'date-fns';
import numToTime from '../helpers/numToTime';
import './styling/BookingForm.css';



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
          bookAppointment } = useData();

  // sends data to the backend to book appointment
  function send(e) {
    e.preventDefault();
    const formattedData = {
      clientInputs,
      serviceId: bookingInput.serviceInfo.id,
      startTime: bookingInput.startTime,
      endTime: bookingInput.endTime,
      date: format(bookingInput.date, 'MM/dd/yyyy'),
      year: getYear(bookingInput.date)
    }
    bookAppointment(formattedData);
  }
  console.log(bookingInput)
  return (
    <div className="bookingPage">
      <h2>Book an appointment</h2>
      <ClientInfo clientInputs={clientInputs} changeInputs={changeInputs}/>
      <BookingDetails 
        bookingInput={bookingInput} 
        changeDate={changeDate} 
        changeService={changeService}
        bookSlot={bookSlot} />
        <h2>{clientInputs.first_name && 
            <span> Booking { bookingInput.serviceInfo.service_name } for { clientInputs.first_name } {clientInputs.last_name }
            { bookingInput.serviceInfo.service_name && 
              <span> on {format(bookingInput.date, 'MM/dd/yyyy')} 
              {bookingInput.startTime && 
                <span> at {numToTime(bookingInput.startTime)} to {numToTime(bookingInput.endTime)}?</span>}
              </span>}
            </span>
          }
        </h2>
      <p>By clicking 'Book Appointment' your information will be submitted and you confirm that the above statement is correct.</p>
      <Button onClick={send} variant="contained">Book Appointment</Button>
    </div>
  )
}