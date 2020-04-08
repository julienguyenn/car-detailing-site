import React, { useState, useEffect } from 'react';
import "./styling/TimeSlots.css"
import SingleTimeSlot from "./SingleTimeSlot";
import { format } from 'date-fns';
const axios = require('axios').default;


export default function TimeSlots({ currentDate, duration, changeBooking }) {
  const [ times, changeTimes ] = useState({}); // all 30min timeslots from database
  const [ slots, changeSlots ] = useState([]); // slot where key is start, value is end

  // gets the times from database
  useEffect(() => {
    let formattedDate = format(currentDate, 'MM/dd/yyyy');
    axios.get(`/getTimes/${formattedDate}`)
    .then(res => changeTimes(res.data))
    .catch(err => console.log(err));

  }, [ currentDate ]);  

  // calculates the available timeslots for duration
  useEffect(() => {
    changeSlots([]); 
    let start = 8;
    for (let time = 8; time <= 17; time += 0.5) {
      let tempEnd = time;
      if (tempEnd > 12.5) {
        tempEnd -= 12;
      }
      if (time - duration >= start) {
        let tempStart = time - duration;
        if (tempStart > 12.5) {
          tempStart -= 12;
        }
        changeSlots((prev) => { return [...prev, {[tempStart]: tempEnd } ]});
      }
      // if the time slot if taken
      if (times[tempEnd] === true) {
        start = time + 0.5;
      }
    }

  }, [duration, times])

  function selectTimeSlot(e) {
    const selectedTime = e.target.value.split("-");
    changeBooking((prev) => {
      return {...prev, 
              startTime: selectedTime[0],
              endTime: selectedTime[1]}
                })
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