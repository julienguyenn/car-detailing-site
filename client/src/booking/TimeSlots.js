import React, { useState,  } from 'react';
import "./styling/TimeSlots.css"
import SingleTimeSlot from "./SingleTimeSlot";
import { format } from 'date-fns';
const axios = require('axios').default;


export default function TimeSlots({ currentDate }) {
  const [ times, changeTimes ] = useState({});

  let formattedDate = format(currentDate, 'MM/dd/yyyy');
  
  axios.get(`/getTimes/${formattedDate}`)
  .then(res => console.log(res))
  .catch(err => console.log(err));

  return (
    <div id="outer-timebox">
      <h5>Available TimeSlots</h5>
      <div>
        <SingleTimeSlot start={"8:00"} end={"5:00"} />
      </div>
    </div>
  )
}