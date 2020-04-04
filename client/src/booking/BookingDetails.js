import React, { useState } from 'react';
import TimeSlots from "./TimeSlots"
import './styling/BookingDetails.css'
import Calendar from './Calendar'



export default function BookingDetails() {
  const [date, changeDate] = useState(new Date());

  return (
    <div>
      <h1>Booking Information</h1>
      <div id="day-time-box">
        <Calendar date={date} changeDate={changeDate}/>
        <TimeSlots />
      </div>
    </div>
  )
}