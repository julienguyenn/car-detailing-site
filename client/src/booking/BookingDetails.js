import React, { useState } from 'react';
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


export default function BookingDetails({ bookingInput, changeDate, changeService }) {
  const classes = useStyles();
  const [serviceID, changeServiceInput] = useState(1); 


  // changes booking information when changing service
  function handleServiceChange(event) {
    changeServiceInput(event.target.value);
    changeService(event.target.value);
  }

  // creates the menu item for selection
  let allServices = bookingInput.allServices.map((info) => {
    return (
    <MenuItem key={info.id} value={info.id}>{info.service_name}</MenuItem>
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
          value={serviceID}
          onChange={handleServiceChange}
        >
          {allServices}
        </Select>
      </FormControl>
        <h1>Booking Information</h1>
        <div id="day-time-box">
          <Calendar date={bookingInput.date} changeDate={changeDate}/>
          <TimeSlots currentDate={bookingInput.date} duration={bookingInput.serviceInfo.time} />
        </div>
    </div>
  )
}