import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


// This handles the form to book an appointment
// still need to do validations

export default function BookingForm() {
  const [inputs, changeInputs] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
  })


  // changes state of the inputs for submission
  function changeData(event) {
    const key = event.target.name;
    const value = event.target.value;
    changeInputs(prev => { return {...prev, [key]: value}})
  }

  // sends data to the backend to book appointment
  function send(e) {
    e.preventDefault();

    fetch("http://localhost:8080/addData", {
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      data: null,
      body: JSON.stringify(inputs)
    })
  }

  return (
    <form noValidate autoComplete="off" onSubmit={send}>
        <TextField required name='first_name' id="standard-basic" label="First Name" onChange={changeData}/>
        <TextField required name='last_name' id="standard-basic" label="Last Name" onChange={changeData}/>
        <TextField required name='email' id="standard-basic" label="Email" onChange={changeData}/>
        <TextField required name='phone' id="standard-basic" label="Phone" onChange={changeData}/>
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  )
}