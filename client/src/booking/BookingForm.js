import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


// import Grid from '@material-ui/core/Grid';
const axios = require('axios').default;



// This handles the form to book an appointment
// still need to do validations

export default function BookingForm() {
  const [inputs, changeInputs] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    text: false,
  })


  // changes state of the inputs for submission
  function changeData(event) {
    const key = event.target.name;
    if (key === "text") {
      changeInputs({...inputs, [key]: event.target.checked})
    } else {
      const value = event.target.value;
      changeInputs({...inputs, [key]: value})
    }
  }

  // sends data to the backend to book appointment
  function send(e) {
    e.preventDefault();

    axios.post('/addData', inputs)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <form noValidate autoComplete="off" onSubmit={send}>
        <TextField required name='first_name' id="standard-basic" label="First Name" onChange={changeData}/>
        <TextField required name='last_name' id="standard-basic" label="Last Name" onChange={changeData}/>
        <TextField required name='email' id="standard-basic" label="Email" onChange={changeData}/>
        <TextField required name='phone' id="standard-basic" label="Phone" onChange={changeData}/>
        <FormControlLabel
          control={<Checkbox checked={inputs.text} name="text" onChange={changeData} label="prefer texting"/>}
          label="prefer texting"
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>

          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            // value={selectedDate}
            // onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />

        </MuiPickersUtilsProvider>

      <Button type="submit" variant="contained">Submit</Button>
    </form>
  )
}