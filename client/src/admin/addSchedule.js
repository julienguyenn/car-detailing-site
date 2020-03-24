import React from 'react';
const axios = require('axios').default;


export default function AddSchedule({}) {

  function addTwoWeeks() {
    axios.post('/addSchedule')
  }
  return (
    <div>
      <button onClick={addTwoWeeks}>Add two weeks</button>
      <div>Change Availability</div>

    </div>
  )
}
