import React, { useState } from 'react';
import { addDays } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { DatePicker } from "@material-ui/pickers";
import { getLastAddedDate } from '../helpers/getLastAddedDate'


export default function BookingDetails({ changeDate }) {
  const [date, newDate] = useState(addDays(new Date(), 1));
  let lastScheduledDate = getLastAddedDate() ? getLastAddedDate() : new Date();

  function handleDateChange(day) {
    newDate(day);
    changeDate(day);
  }
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={handleDateChange}
        format="MM/dd/yyyy"
        minDate={addDays(new Date(), 1)}
        maxDate={lastScheduledDate} // show available dates
      />
    </MuiPickersUtilsProvider>
  )

}

