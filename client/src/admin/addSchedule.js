import React, { useState } from 'react';
import { addDays,
        format } from 'date-fns';
import RestrictionForm from './RestrictionForm'
const axios = require('axios').default;

// Default schedule shows 8 to 9 is free (false means free time)
const DEFAULT = {
  8: false, 8.5: false, 9: false, 9.5: false, 10: false,
  10.5: false, 11: false, 11.5: false, 12: false, 12.5: false, 1: false,
  1.5: false, 2: false, 2.5: false, 3: false, 3.5: false, 4: false,
  4.5: false, 5: false,
}
export default function AddSchedule() {

  const [dates, changeDates] = useState({})
  const [minMaxDates, changeMinMax] = useState([])

  function addSchedule() {
    axios.post('/addSchedule', dates);
  }

  // Adds dates with default times
  function addDates() {
    let date = new Date(); // creates a date (which is today), will change this later
    changeMinMax([date]) // adds today's date as start date

    // add the next 14 days to availability
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
