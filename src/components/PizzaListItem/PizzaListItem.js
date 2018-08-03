import React, { Component } from 'react';


class PizzaListItem extends Component {



addPizzaToOrder = () => {

};
    
    render() {
        return (
            <div>
                <li>
                <b>{this.props.pizza.name}</b>&nbsp;--&nbsp;
                {this.props.pizza.description}&nbsp;--&nbsp;
                ${this.props.pizza.cost}
                </li>
                <button onClick={this.addPizzaToOrder}>Add To Order</button>
            </div>
        );
    }
}

export default PizzaListItem;