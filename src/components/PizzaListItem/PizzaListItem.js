import React, { Component } from 'react';
import { connect } from 'react-redux';


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
            <div className="pizzaCard">
                <li>
                    <img src={this.props.pizza.image_path} width="400" height="200" alt="specific pizza" /><br />
                    <span id="pizzaName"><b>{this.props.pizza.name}</b></span>
                    <br />
                    <br />
                    {this.props.pizza.description}<br />
                    <b>${this.props.pizza.cost}</b>
                </li>
                <br />
                <div >
                    <button id="pizzaCardButton" className="Button" onClick={this.addPizzaToOrder}>Add To Order</button>
                </div>
            </div>
        );
    }
}

export default connect()(PizzaListItem);