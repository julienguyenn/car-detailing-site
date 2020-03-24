import React, { useState } from 'react';
import { addDays,
  format,
   getDay } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
const axios = require('axios').default;


export default function AddSchedule({}) {
  const [dates, changeDates] = useState({})

  // const date = format(new Date(), 'mm/dd/yyyy');

  function addSchedule() {
    axios.post('/addSchedule', dates);
  }


  function addDates() {
    let date = new Date();
    for (let count = 0; count <= 14; count++) {
      const formattedDate = format(date, 'mm/dd/yyyy');
      changeDates((prev) => {
        return {
          ...prev,
          [formattedDate]: 'default'
        }});
      date = addDays(date, 1)
    }
  }
  
  return (
    <div>
      <button onClick={addDates}>Add two weeks</button>
      <div>Change Availability</div>
      <button onClick={addSchedule}>Submit</button>
    </div>
  )
}
