import React, { Component } from 'react';
import PizzaListItem from '../PizzaListItem/PizzaListItem';

class PizzaList extends Component {
  render() {

    let pizzaListArray = this.props.listOfPizzas.map((pizza, index) => {
      return <PizzaListItem pizza={pizza} key={index} />
    });
    return (
      <ul className="App-intro">
        {pizzaListArray}
      </ul>
    );

  };
};


export default PizzaList;