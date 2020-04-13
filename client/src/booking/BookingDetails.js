import React, { useState } from 'react';
import TimeSlots from "./TimeSlots"
import './styling/BookingDetails.css'
import Calendar from './Calendar';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function BookingDetails({ bookingInput, changeDate, changeService, bookSlot }) {
  const classes = useStyles();
  const [serviceID, changeServiceInput] = useState(''); 


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
      <h3>Choose a service</h3>
      <div>
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
        <p>
          {bookingInput.serviceInfo.description}
        </p>
      </div>
      { serviceID !== '' && (
        <div>
          <h1>Booking Information</h1>
          <div id="day-time-box">
            <Calendar changeDate={changeDate}/>
            <TimeSlots slots={bookingInput.timeSlots} bookSlot={bookSlot} />
          </div>
        </div>
      )}
    </div>
  )
}