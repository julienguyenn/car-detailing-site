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
    .then((res) => {
      changeTimes(res.data);
    //   let time = 8;
    //   let start = 8;
    //   let end = 8;
    //   while (time <= 5) {
    //     if (time === 13) {
    //       time = 1;
    //     } else if ({

    //     }
    //   }
    })
    .catch(err => console.log(err));
  }, []);  

  console.log(times)
  return (
    <div id="outer-timebox">
      <h5>Available TimeSlots</h5>
      <div>
        <SingleTimeSlot start={"8:00"} end={"5:00"} />
      </div>
    </div>
  )
}