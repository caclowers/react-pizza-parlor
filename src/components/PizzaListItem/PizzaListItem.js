import React, { Component } from 'react';
import {connect} from 'react-redux';


class PizzaListItem extends Component {



addPizzaToOrder = () => {
console.log('addPizzaToOrder');
const action = {
    type: 'ADD_PIZZA_TO_ORDER',
    payload: this.props.pizza 
}
this.props.dispatch(action);

};
    
    render() {
        return (
            <div>
                <li>
                <img src={this.props.pizza.image_path} width="200" height="100" alt="specific pizza"/>
                <b>{this.props.pizza.name}</b>&nbsp;--&nbsp;
                {this.props.pizza.description}&nbsp;--&nbsp;
                ${this.props.pizza.cost}
                </li>
                <button onClick={this.addPizzaToOrder}>Add To Order</button>
            </div>
        );
    }
}

export default connect()(PizzaListItem);