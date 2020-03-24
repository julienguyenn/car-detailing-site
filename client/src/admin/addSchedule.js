import React, { useState } from 'react';
import { addDays,
  format,
   getDay } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
const axios = require('axios').default;


export default function AddSchedule({}) {
  const [dates, changeDates] = useState({})

  // const date = format(new Date(), 'mm/dd/yyyy');

  // function addTwoWeeks() {
  //   axios.post('/addSchedule', {date})
  // }

  function addDates() {
    let date = new Date();
    
  }
  
  return (
    <div>
      <button onClick={addDates}>Add two weeks</button>
      <div>Change Availability</div>

    </div>
  )
}
