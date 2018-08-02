import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CheckoutView from '../../views/CheckoutView.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        <CheckoutView />
      </div>
    );
  }
}

export default App;
