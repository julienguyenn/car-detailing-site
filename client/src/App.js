import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
