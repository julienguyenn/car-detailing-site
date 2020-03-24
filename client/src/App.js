import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookingForm from './booking/BookingForm';
import AddSchedule from './admin/AddSchedule'


function App() {

  return (
    <Router>
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/book">Book</Link>

      <Switch>
        <Route path="/book">
          <BookingForm />
        </Route>
        <Route path="/admin">
          <h1>ADMIN</h1>
          <AddSchedule />
        </Route>
        <Route path="/">
          <h1>HOMEPAGE</h1>
        </Route>
      </Switch>
    
    </div>
    </Router>

  );
}

export default App;
