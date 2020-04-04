import React, { useState } from 'react';
import { format} from 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));


export default function RestrictionForm({dates, changeDates, minMaxDates}) {
  const classes = useStyles();

  const [editDate, changeDate] = useState(minMaxDates[0])
  const [startTime, changeStartTime] = useState('')
  const [endTime, changeEndTime] = useState('')

  function correctTimes(start, end) {
    if (start >= 1 && start <= 4.5) {
      start += 12;
    } if (end >= 1 && end <= 5) {
      end += 12;
    }
    return start < end;
  }

  function addRestriction() {
    if (!correctTimes(startTime, endTime)) { // check if the starttime and end time is valid
      console.log("Choose a valid end time")
    } else {
      const dateToEdit = format(editDate, 'MM/dd/yyyy');
      // get the time schedule of the date
      let timeSched = dates[dateToEdit];
      for (let time = startTime; time < endTime; time += .5) {
        timeSched[time] = true;
      }
    }
  }

  return (
    <div>
      <div>Change Availability</div>
       <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          minDate={minMaxDates[0]}
          maxDate={minMaxDates[1]}
          value={editDate}
          onChange={changeDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">From</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={startTime}
          onChange={(event) => changeStartTime(event.target.value)}
        >
          <MenuItem value={8}>8:00</MenuItem>
          <MenuItem value={8.5}>8:30</MenuItem>
          <MenuItem value={9}>9:00</MenuItem>
          <MenuItem value={9.5}>9:30</MenuItem>
          <MenuItem value={10}>10:00</MenuItem>
          <MenuItem value={10.5}>10:30</MenuItem>
          <MenuItem value={11}>11:00</MenuItem>
          <MenuItem value={11.5}>11:30</MenuItem>
          <MenuItem value={12}>12:00</MenuItem>
          <MenuItem value={12.5}>12:30</MenuItem>
          <MenuItem value={1}>1:00</MenuItem>
          <MenuItem value={1.5}>1:30</MenuItem>
          <MenuItem value={2}>2:00</MenuItem>
          <MenuItem value={2.5}>2:30</MenuItem>
          <MenuItem value={3}>3:00</MenuItem>
          <MenuItem value={3.5}>3:30</MenuItem>
          <MenuItem value={4}>4:00</MenuItem>
          <MenuItem value={4.5}>4:30</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">To</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={endTime}
          onChange={(event) => changeEndTime(event.target.value)}
        >
          <MenuItem value={8.5}>8:30</MenuItem>
          <MenuItem value={9}>9:00</MenuItem>
          <MenuItem value={9.5}>9:30</MenuItem>
          <MenuItem value={10}>10:00</MenuItem>
          <MenuItem value={10.5}>10:30</MenuItem>
          <MenuItem value={11}>11:00</MenuItem>
          <MenuItem value={11.5}>11:30</MenuItem>
          <MenuItem value={12}>12:00</MenuItem>
          <MenuItem value={12.5}>12:30</MenuItem>
          <MenuItem value={1}>1:00</MenuItem>
          <MenuItem value={1.5}>1:30</MenuItem>
          <MenuItem value={2}>2:00</MenuItem>
          <MenuItem value={2.5}>2:30</MenuItem>
          <MenuItem value={3}>3:00</MenuItem>
          <MenuItem value={3.5}>3:30</MenuItem>
          <MenuItem value={4}>4:00</MenuItem>
          <MenuItem value={4.5}>4:30</MenuItem>
          <MenuItem value={5}>5:00</MenuItem>
        </Select>
      </FormControl>
      <button onClick={addRestriction}>Add Restriction</button>
    </div>
  )
}