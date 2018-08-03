import React, { Component } from 'react';
import Header from '../components/Header/Header.js';
import { connect } from 'react-redux';
import CustomerAddress from '../components/CustomerAddress/CustomerAddress.js';
import PizzaListAndTotal from '../components/PizzaListAndTotal/PizzaListAndTotal.js';
import CheckoutButton from '../components/CheckoutButton/CheckoutButton.js';

class CheckoutView extends Component {
    render() {
        return (
            <main>
                <Header />
                <h2>Step 3: Checkout</h2>
                <CustomerAddress customerInfo={this.props.customerData}/>
                <h2>{this.props.type}</h2>
                <PizzaListAndTotal pizzaInfo={this.props.pizzas}/>
                <CheckoutButton orderInfo={this.props.state}/>
            </main>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        pizzas: state.order.pizzas,
        customerData: state.order.customer,
        type: state.order.type
    }
};

export default connect(mapStateToProps)(CheckoutView);
