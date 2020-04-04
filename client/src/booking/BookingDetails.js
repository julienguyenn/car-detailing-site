import React, { useState } from 'react';
import { addDays,
        format,
         getDay } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { DatePicker } from "@material-ui/pickers";
import TimeSlots from "./TimeSlots"
import './styling/BookingDetails.css'
import { getLastAddedDate } from '../helpers/getLastAddedDate'



export default function BookingDetails() {
  const [date, changeDate] = useState(new Date());

  let lastScheduledDate = getLastAddedDate() ? getLastAddedDate() : new Date();

  return (
    <div>
      <h1>Booking Information</h1>
      <div id="day-time-box">
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
            maxDate={lastScheduledDate} // show available dates
          />
          <TimeSlots />
        </MuiPickersUtilsProvider>
      </div>
    </div>
  )
}