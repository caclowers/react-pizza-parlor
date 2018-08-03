import React, { Component } from 'react';

class CheckoutButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>CHECKOUT</button>
            </div>
        )
    }
};

export default CheckoutButton;
