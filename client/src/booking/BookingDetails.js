import React, { useState, useEffect } from 'react';
import TimeSlots from "./TimeSlots"
import './styling/BookingDetails.css'
import Calendar from './Calendar'



export default function BookingDetails({ changeBooking }) {
  const [date, changeDate] = useState(new Date());

  useEffect(() => {
    changeBooking((prev) => {return {...prev, startTime: '', endTime: '', date}});
  }, [ date ])

  return (
    <div>
      <h1>Booking Information</h1>
      <div id="day-time-box">
        <Calendar date={date} changeDate={changeDate}/>
        <TimeSlots currentDate={date} duration={2} changeBooking={changeBooking} />
      </div>
    </div>
  )
}