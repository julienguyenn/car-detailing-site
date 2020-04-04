import React from 'react';
import { addDays } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { DatePicker } from "@material-ui/pickers";
import { getLastAddedDate } from '../helpers/getLastAddedDate'


export default function BookingDetails({ date, changeDate }) {
  let lastScheduledDate = getLastAddedDate() ? getLastAddedDate() : new Date();

  return (
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
    </MuiPickersUtilsProvider>
  )

}

