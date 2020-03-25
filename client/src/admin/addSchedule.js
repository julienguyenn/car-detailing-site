import React, { useState } from 'react';
import { addDays,
        format } from 'date-fns';
import RestrictionForm from './RestrictionForm'
const axios = require('axios').default;

// Default schedule shows 8 to 9 is free (false means free time)
const DEFAULT = {
  '8:00': false, '8:30': false, '9:00': false, '9:30': false, '10:00': false,
  '10:30': false, '11:00': false, '11:30': false,'12:00': false,'12:30': false,'1:00': false,
  '1:30': false,'2:00': false,'2:30': false,'3:00': false,'3:30': false,'4:00': false,
  '4:30': false, '5:00': false,
}
export default function AddSchedule() {

  const [dates, changeDates] = useState({})
  const [minMaxDates, changeMinMax] = useState([])

  function addSchedule() {
    axios.post('/addSchedule', dates);
  }

  // Adds dates with default times
  function addDates() {
    let date = new Date();
    changeMinMax([date])
    for (let count = 0; count <= 14; count++) {
      if (count === 14) {
        // eslint-disable-next-line no-loop-func
        changeMinMax((prev) => {return [...prev, date]})
      }
      const formattedDate = format(date, 'MM/dd/yyyy');
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
      { Object.keys(dates).length !== 0 && 
      <RestrictionForm dates={dates} changeDates={changeDates} minMaxDates={minMaxDates} /> }
      <button onClick={addSchedule}>Submit</button>
    </div>
  )
}
