import React, { useState } from 'react';
import { format, startOfToday } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { DatePicker } from "@material-ui/pickers";




export default function BookingDetails({}) {
  const [date, changeDate] = useState('')

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
          minDate={new Date()}
          maxDate={new Date(2020, 4, 20)}
        />
        </MuiPickersUtilsProvider>
    </div>
  )
}