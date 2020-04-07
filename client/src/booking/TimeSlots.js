import React, { useState, useEffect } from 'react';
import "./styling/TimeSlots.css"
import SingleTimeSlot from "./SingleTimeSlot";
import { format } from 'date-fns';
const axios = require('axios').default;


export default function TimeSlots({ currentDate, duration }) {
  const [ times, changeTimes ] = useState({
    8: false,
    8.5: false,
    9: false,
    9.5: false,
    10: true,
    10.5: false,
    11: false,
    11.5: false,
    12: true,
    12.5: false,
    1: false,
    1.5: false,
    2: false,
    2.5: false,
    3: false,
    3.5: true,
    4: true,
    4.5: false,
    5: false
  }); // all 30min timeslots from database
  const [ slots, changeSlots ] = useState({}); // slot where key is start, value is end

  let formattedDate = format(currentDate, 'MM/dd/yyyy');
  
  // useEffect(() => {
  //   axios.get(`/getTimes/${formattedDate}`)
  //   .then(res => changeTimes(res.data))
  //   .catch(err => console.log(err));
  // }, [ formattedDate ]);  

  useEffect(() => { 
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
        changeSlots((prev) => { return {...prev, [tempStart]: tempEnd } });
      }
      // if the time slot if taken
      console.log(time)
      if (times[tempEnd] === true) {
        start = time + 0.5;
      }
    }
  }, [ duration, times ])

  console.log(slots)

  return (
    <div id="outer-timebox">
      <h5>Available TimeSlots</h5>
      <div>
        <SingleTimeSlot start={"8:00"} end={"5:00"} />
      </div>
    </div>
  )
}