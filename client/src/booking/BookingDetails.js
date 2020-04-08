import React, { useState, useEffect } from 'react';
import TimeSlots from "./TimeSlots"
import './styling/BookingDetails.css'
import Calendar from './Calendar';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const axios = require('axios').default;

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function BookingDetails({ changeBooking }) {
  const classes = useStyles();
  const [date, changeDate] = useState(new Date());
  const [services, addServices] = useState([])

  // changed state based on date
  useEffect(() => {
    changeBooking((prev) => {
      return {...prev, startTime: '', endTime: '', date}
    });
  }, [ date, changeBooking ]);

  useEffect(() => {
    axios.get('/getServices')
    .then((res) => addServices(res.data))
    .catch(err => console.log(err));
  }, [])

  function handleServiceChange(event) {
    
  }
  return (
    <div>
      <h1>Available Services</h1>
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Services</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={''}
          onChange={handleServiceChange}
          // inputProps={{
          //   name: 'age',
          //   id: 'age-native-simple',
          // }}
        >
          {/* <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option> */}
        </Select>
      </FormControl>
      <h1>Booking Information</h1>
      <div id="day-time-box">
        <Calendar date={date} changeDate={changeDate}/>
        <TimeSlots currentDate={date} duration={2} changeBooking={changeBooking} />
      </div>
    </div>
  )
}