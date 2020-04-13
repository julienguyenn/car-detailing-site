import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';


// Handles client personal data
export default function ClientInfo({clientInputs, changeInputs}) {

  // changes state of the inputs for submission
  function changeData(event) {
    const key = event.target.name;
    if (key === "text") {
      changeInputs({...clientInputs, [key]: event.target.checked})
    } else {
      const value = event.target.value;
      changeInputs({...clientInputs, [key]: value})
    }
  }


  return (
    <form noValidate autoComplete="off" className="formInput">
    <TextField required name='first_name' id="standard-basic" label="First Name" onChange={changeData}/>
    <TextField required name='last_name' id="standard-basic" label="Last Name" onChange={changeData}/>
    <TextField required name='email' id="standard-basic" label="Email" onChange={changeData}/>
    <TextField required name='phone' id="standard-basic" label="Phone" onChange={changeData}/>
    <FormControlLabel
      control={<Checkbox checked={clientInputs.text} name="text" onChange={changeData} label="prefer texting"/>}
      label="prefer text messages over calls"
    />
  </form>
  )
}