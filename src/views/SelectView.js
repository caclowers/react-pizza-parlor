import React, { Component } from 'react';
import axios from 'axios';
import {  Route, NavLink, Redirect, Switch, withRouter } from 'react-router-dom';
import PizzaList from '../components/PizzaList/PizzaList';

class SelectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzaList: []
    };
  }

componentDidMount(){
  this.getPizzas();
}

    getPizzas = () => {
      axios.get('/api/pizza').then((response) => {
        console.log(response);
        this.setState({
          pizzaList: response.data
        })
      })
    }


pizzaClick = () => {
  console.log('next clicked');
  
  // this.props.history.push('/customerinfo')
}


    render() {
      return (
        <main>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Prime Pizza</h1>
              <div>total: </div>
            </header>
            <br />
            <img src="images/pizza_photo.png" alt="pizza_being_served" />
            <h1>Pizza is great!</h1>
            <PizzaList listOfPizzas={this.state.pizzaList} />
            <button onClick={this.pizzaClick}>NEXT</button>
          </div>
        </main>
      );
    };
  }

  export default SelectView;