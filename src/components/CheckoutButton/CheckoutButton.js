import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class CheckoutButton extends Component {

    postToDatabase = ({orderInfo}) => {
        // post to database
        axios.post('/api/order', orderInfo)
        .then(res=>{
            // show a confirmation dialog
            alert('checkout');
            this.props.dispatch({type: 'CLEAR_ORDER'}); // clear the cart 
            // this.props.history.push('/select'); // navigate user back to select view
        })
        .catch(err=>{console.log(err)});
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
