import React, { Component } from 'react';
import Header from '../components/Header/Header.js';
import { connect } from 'react-redux';
import CustomerAddress from '../components/CustomerAddress/CustomerAddress.js';
import PizzaListAndTotal from '../components/PizzaListAndTotal/PizzaListAndTotal.js';
import CheckoutButton from '../components/CheckoutButton/CheckoutButton.js';
import axios from 'axios';

class CheckoutView extends Component {

    postToDatabase = () => {
        // post to database
        axios.post('/api/order', this.props.totalorder)
        .then(res=>{
            // show a confirmation dialog
            alert('checkout');
            this.props.dispatch({type: 'CLEAR_ORDER'}); // clear the cart 
            this.props.history.push('/select'); // navigate user back to select view
        })
        .catch(err=>{console.log(err)});
    }

    render() {
        return (
            <main>
                <Header />
                <br />
                <img src="images/pizza_photo.png" alt="pizza_being_served"  />
                <h2>Step 3: Checkout</h2>
                <CustomerAddress customerInfo={this.props.customerData}/>
                <h2>{this.props.type}</h2>
                <PizzaListAndTotal pizzaInfo={this.props.pizzas} total={this.props.totalOrder.order_total}/>
                <CheckoutButton onClick={this.postToDatabase}/>
            </main>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        totalOrder: state.order,
        pizzas: state.order.pizzas,
        customerData: state.order.customer,
        type: state.order.type
    }
};

export default connect(mapStateToProps)(CheckoutView);
