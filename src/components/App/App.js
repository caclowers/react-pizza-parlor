import React, { Component } from 'react';
import axios from 'axios';
import AdminView from '../../views/AdminView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AdminView />
      </div>
    );
  }
}

export default App;
