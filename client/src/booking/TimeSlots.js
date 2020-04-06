import React from 'react';
import "./styling/TimeSlots.css"
import SingleTimeSlot from "./SingleTimeSlot";

export default function TimeSlots({ currentDate }) {
  
  return (
    <div id="outer-timebox">
      <div>
        <SingleTimeSlot start={"8:00"} end={"5:00"} />
      </div>
    </div>
  )
}