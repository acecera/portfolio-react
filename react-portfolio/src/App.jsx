import React, { Component } from 'react';

import './App.css';
import Jumbotron from "./Components/Jumbotron/Jumbotron";
import Navbar from './Components/Navbar/MyNavbar';


class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Navbar /> */}
          <Jumbotron />
      </div>
    );
  }
}

export default App;
