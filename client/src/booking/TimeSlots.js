import React, { useState, useEffect } from 'react';
import "./styling/TimeSlots.css"
import SingleTimeSlot from "./SingleTimeSlot";
import { format } from 'date-fns';
const axios = require('axios').default;


export default function TimeSlots({ currentDate, duration }) {
  const [ times, changeTimes ] = useState({}); // all 30min timeslots from database
  const [ slots, changeSlots ] = useState({}); // slot where key is start, value is end

  let formattedDate = format(currentDate, 'MM/dd/yyyy');
  
  useEffect(() => {
    axios.get(`/getTimes/${formattedDate}`)
    .then(res => changeTimes(res.data))
    .catch(err => console.log(err));
  }, []);  

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
      if (times[tempEnd] === true) {
        start = time + 0.5;
      }
    }
  }, [])

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