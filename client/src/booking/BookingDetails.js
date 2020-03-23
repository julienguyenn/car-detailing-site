import React, { useState } from 'react';
import { addDays,
         getDay } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { DatePicker } from "@material-ui/pickers";




export default function BookingDetails({}) {
  const [date, changeDate] = useState(new Date())

  
  console.log(getDay(date))

  return (
    <div>
      <h1>Booking Information</h1>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          autoOk
          orientation="landscape"
          variant="static"
          openTo="date"
          value={date}
          onChange={changeDate}
          format="MM/dd/yyyy"
          minDate={addDays(new Date(), 1)}
          maxDate={addDays(new Date(), 15)} // Can book up to two weeks from the date
        />
        </MuiPickersUtilsProvider>
    </div>
  )
}