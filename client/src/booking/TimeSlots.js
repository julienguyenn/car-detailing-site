import React from 'react';
import "./styling/TimeSlots.css"
import SingleTimeSlot from "./SingleTimeSlot";


export default function TimeSlots({ slots }) {

  // change selected time slot for appointment
  function selectTimeSlot(e) {
    console.log("selected")
    // const selectedTime = e.target.value.split("-");
    // changeBooking((prev) => {
    //   return {...prev, 
    //           startTime: selectedTime[0],
    //           endTime: selectedTime[1]}
    // })
  }

  const example = slots.map((ex) => {
    return (
      <SingleTimeSlot 
        key={Object.keys(ex)[0]}
        start={Object.keys(ex)[0]}
        end={Object.values(ex)[0]}
        selectTimeSlot={selectTimeSlot} />
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