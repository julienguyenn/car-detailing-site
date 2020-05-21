import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookingForm from './booking/BookingForm';
import AddSchedule from './admin/AddSchedule';
import Homepage from './views/Homepage';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './views/About';
import Contact from './views/Contact';
import Services from './views/Services';

import './css/App.css'


function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route path="/book">
          <BookingForm />
        </Route>
        <Route path="/admin">
          <h1>ADMIN</h1>
          <AddSchedule />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    
      <Footer />
    </div>
    </Router>

  );
}

export default App;
