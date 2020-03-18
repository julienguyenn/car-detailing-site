import React from 'react';


export default function BookingForm() {
  function send() {
    fetch("http://localhost:8080/addData", {
      method:'POST'
    })
    
  }
  return (
    <button onClick={send}>Add Data</button>
  )
}