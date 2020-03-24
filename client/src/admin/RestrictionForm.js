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

  const [editDate, changeDate] = useState(new Date())
  const [startTime, changeStartTime] = useState('')
  const [endTime, changeEndTime] = useState('')

  function addRestriction() {
    const dateToEdit = format(editDate, 'MM/dd/yyyy');
    let timeSched = dates[dateToEdit];
    for (let time in timeSched) {
      console.log(time[0])
    }
  }

  return (
    <div>
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
          <MenuItem value={'8:00'}>8:00</MenuItem>
          <MenuItem value={'8:30'}>8:30</MenuItem>
          <MenuItem value={'9:00'}>9:00</MenuItem>
          <MenuItem value={'9:30'}>9:30</MenuItem>
          <MenuItem value={'10:00'}>10:00</MenuItem>
          <MenuItem value={'10:30'}>10:30</MenuItem>
          <MenuItem value={'11:00'}>11:00</MenuItem>
          <MenuItem value={'11:30'}>11:30</MenuItem>
          <MenuItem value={'12:00'}>12:00</MenuItem>
          <MenuItem value={'12:30'}>12:30</MenuItem>
          <MenuItem value={'1:00'}>1:00</MenuItem>
          <MenuItem value={'1:30'}>1:30</MenuItem>
          <MenuItem value={'2:00'}>2:00</MenuItem>
          <MenuItem value={'2:30'}>2:30</MenuItem>
          <MenuItem value={'3:00'}>3:00</MenuItem>
          <MenuItem value={'3:30'}>3:30</MenuItem>
          <MenuItem value={'4:00'}>4:00</MenuItem>
          <MenuItem value={'4:30'}>4:30</MenuItem>
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
          <MenuItem value={'8:30'}>8:30</MenuItem>
          <MenuItem value={'9:00'}>9:00</MenuItem>
          <MenuItem value={'9:30'}>9:30</MenuItem>
          <MenuItem value={'10:00'}>10:00</MenuItem>
          <MenuItem value={'10:30'}>10:30</MenuItem>
          <MenuItem value={'11:00'}>11:00</MenuItem>
          <MenuItem value={'11:30'}>11:30</MenuItem>
          <MenuItem value={'12:00'}>12:00</MenuItem>
          <MenuItem value={'12:30'}>12:30</MenuItem>
          <MenuItem value={'1:00'}>1:00</MenuItem>
          <MenuItem value={'1:30'}>1:30</MenuItem>
          <MenuItem value={'2:00'}>2:00</MenuItem>
          <MenuItem value={'2:30'}>2:30</MenuItem>
          <MenuItem value={'3:00'}>3:00</MenuItem>
          <MenuItem value={'3:30'}>3:30</MenuItem>
          <MenuItem value={'4:00'}>4:00</MenuItem>
          <MenuItem value={'4:30'}>4:30</MenuItem>
          <MenuItem value={'5:00'}>5:00</MenuItem>
        </Select>
      </FormControl>
      <button onClick={addRestriction}>Add Restriction</button>
    </div>
  )
}