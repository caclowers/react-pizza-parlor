import React, { Component } from 'react';
import axios from 'axios';
import PizzaList from '../components/PizzaList/PizzaList';
import Header from '../components/Header/Header.js';
import { connect } from 'react-redux';

class SelectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzaList: []
    };
  }

  componentDidMount() {
    this.getPizzas();
  }

  getPizzas = () => {
    axios.get('/api/pizza').then((response) => {
      console.log(response.data);
      this.setState({
        pizzaList: response.data
      })
    })
  }


  pizzaClick = () => {
    console.log('next clicked');

    this.props.history.push('/customerinfo')
  }

  render() {
    return (
      <main>
        <div className="App">
          <Header order_total={this.props.orderTotal} />
          <br />
          <img src="images/logo.jpg" alt="pizza_being_served" />
          <h1>Pizza is great!</h1>
          <PizzaList listOfPizzas={this.state.pizzaList} />
          <button onClick={this.pizzaClick}>NEXT</button>
        </div>
      </main>
    );
  };
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    orderTotal: state.order.order_total
  }
};

export default connect(mapStateToProps)(SelectView);