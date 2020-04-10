import React from 'react';
import "./styling/TimeSlots.css"
import SingleTimeSlot from "./SingleTimeSlot";


export default function TimeSlots({ slots, bookSlot }) {

  const example = slots.map((ex) => {
    return (
      <SingleTimeSlot 
        key={Object.keys(ex)[0]}
        start={Object.keys(ex)[0]}
        end={Object.values(ex)[0]}
        bookSlot={bookSlot} />
    );
  });

  return (
    <div id="outer-timebox">
      <h5>Available TimeSlots</h5>
      <div>
        {example}
      </div>
    </div>
  )
}