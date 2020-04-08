import React, { useState, useEffect } from 'react';
import TimeSlots from "./TimeSlots"
import './styling/BookingDetails.css'
import Calendar from './Calendar';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


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


export default function BookingDetails({ bookingInput, changeBooking }) {
  const classes = useStyles();
  const [date, changeDate] = useState(new Date());
  const [services, addServices] = useState([])
  const [duration, changeDuration] = useState('');

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

  // changes booking information when changing service
  function handleServiceChange(event) {
    changeBooking({
      date: '', 
      startTime: '', 
      endTime: '', 
      service: event.target.value})
  }

  // creates the menu item for selection
  let allServices = services.map((info) => {
    return (
    <MenuItem key={info.id} value={info}>{info.service_name}</MenuItem>
    )
  })

  return (
    <div>
      <h1>Available Services</h1>
      <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Services</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bookingInput.service}
          onChange={handleServiceChange}
        >
          {allServices}
        </Select>
      </FormControl>
      { bookingInput.service !== "" && 
      <div>
        <h1>Booking Information</h1>
        <div id="day-time-box">
          <Calendar date={date} changeDate={changeDate}/>
          <TimeSlots currentDate={date} duration={2} changeBooking={changeBooking} />
        </div>
      </div> }
    </div>
  )
}