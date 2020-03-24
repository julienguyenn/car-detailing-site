import React, { useState } from 'react';
import { addDays,
  format,
   getDay } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
const axios = require('axios').default;

const DEFAULT = {
  '8:00': false, '8:30': false, '9:00': false, '9:30': false, '10:00': false,
  '10:30': false, '11:00': false, '11:30': false,'12:00': false,'12:30': false,'1:00': false,
  '1:30': false,'2:00': false,'2:30': false,'3:00': false,'3:30': false,'4:00': false,
  '4:30': false, '5:00': false,
}
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
          [formattedDate]: DEFAULT
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
