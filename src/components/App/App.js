import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import CustomerInfoView from '../../views/CustomerInfoView';


class App extends Component {
  render() {
    return (
      <div>
          <CustomerInfoView/>
      </div>
    );
  }
}

export default App;
