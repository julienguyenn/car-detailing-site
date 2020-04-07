import React, { useState, useEffect } from 'react';
import "./styling/TimeSlots.css"
import SingleTimeSlot from "./SingleTimeSlot";
import { format } from 'date-fns';
const axios = require('axios').default;


export default function TimeSlots({ currentDate, duration }) {
  const [ times, changeTimes ] = useState([]); // all 30min timeslots from database
  const [ slots, changeSlots ] = useState({}); // slot where key is start, value is end

  let formattedDate = format(currentDate, 'MM/dd/yyyy');
  
  useEffect(() => {
    axios.get(`/getTimes/${formattedDate}`)
    .then(res => changeTimes(res.data))
    .catch(err => console.log(err));
  }, [ formattedDate ]);  

  useEffect(() => { 
    let start = 8;
    for (let time = 8; time <= 17; time += 0.5) {
      let temp = time;
      // set to 12 hour time if passed 12:30
      if (temp > 12.5) {
       temp -= 12; 
      }
      if (times[temp] === true) {
        start = time;
      } else if (time - start === duration) {
        changeSlots((prev) => { return {...prev, [start]: time } });
        start = time;
      }
    }
  }, [ duration, times ])


  return (
    <div id="outer-timebox">
      <h5>Available TimeSlots</h5>
      <div>
        <SingleTimeSlot start={"8:00"} end={"5:00"} />
      </div>
    </div>
  )
}