import React, { Component } from 'react';

class CheckoutButton extends Component {

    postToDatabase = () => {
        // post to database

        // show a confirmation dialog

        // clear the cart 

        // navigate user back to select view
    }

    render() {
        return (
            <view>
                <button onClick={this.postToDatabase()}>CHECKOUT</button>
            </view>
        )
    }
};

export default CheckoutButton;
