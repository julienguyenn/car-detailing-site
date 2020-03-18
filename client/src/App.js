import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function send() {
    fetch("http://localhost:8080/addData", {
      method:'POST'
    })
    
  }
  return (
    <div className="App">
      <button onClick={send}>Add Data</button>
    </div>
  );
}

export default App;
