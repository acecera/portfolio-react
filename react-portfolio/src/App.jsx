import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Navbar from './Components/Navbar/MyNavbar';


class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
            <Navbar />
            <Jumbotron />
            <Route path="/" />
        </div>
      </Router>
    );
  }
}

export default App;
