import React, { useState, useEffect } from 'react';
import TimeSlots from "./TimeSlots"
import './styling/BookingDetails.css'
import Calendar from './Calendar';
const axios = require('axios').default;




export default function BookingDetails({ changeBooking }) {
  const [date, changeDate] = useState(new Date());
  const [services, addServices] = useState([])

  // changed state based on date
  useEffect(() => {
    changeBooking((prev) => {
      return {...prev, startTime: '', endTime: '', date}
    });
  }, [ date, changeBooking ]);

  useEffect(() => {
    axios.get('/getServices')
    .then((res) => console.log(res))
    .catch(err => console.log(err));
  }, [])

  return (
    <div>
      <h1>Available Services</h1>
      <h1>Booking Information</h1>
      <div id="day-time-box">
        <Calendar date={date} changeDate={changeDate}/>
        <TimeSlots currentDate={date} duration={2} changeBooking={changeBooking} />
      </div>
    </div>
  )
}