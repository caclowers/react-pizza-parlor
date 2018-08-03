import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import SelectView from '../../views/SelectView.js';
import CheckoutView from '../../views/CheckoutView.js';
import AdminView from '../../views/AdminView.js';
import CustomerInfoView from '../../views/CustomerInfoView.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Redirect exact from="/" to="select" />
            <Route path="/select" component={SelectView} />
            <Route path="/checkout" component={CheckoutView} />
            <Route path="/customerinfo" component={CustomerInfoView} />
            <Route path="/admin" component={AdminView} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
