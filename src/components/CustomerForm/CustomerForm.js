import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';

const blankCustomer = {
    name: '',
    street_address: '',
    city: '',
    zip: '',
}

class CustomerForm extends Component {

    constructor(props) {
        super(props);

        this.state = blankCustomer
    }
    
    handleChangeFor = (propertyName) => {
        return (event) => {
            this.setState({
                ...this.state,
                [propertyName] : event.target.value
            })
        }
    }
    
    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        this.props.dispatch({type: 'ADD_CUSTOMER_INFO', payload: this.state})
            this.props.history.push('/checkout')
    }
    
    render() {
        return (
            <div>
                <h2>Step 2: Customer Information</h2>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" onChange={this.handleChangeFor('name')} />
                    <input type="text" placeholder="Street Address" onChange={this.handleChangeFor('street_address')} />
                    <input type="text" placeholder="City" onChange={this.handleChangeFor('city')} />
                    <input type="number" placeholder="Zip" onChange={this.handleChangeFor('zip')} />
                    <div>
                        <input type="radio" id="pickup" name="type" />
                        <label for="pickup">Pick-up</label>
                    </div>
                    <div>
                        <input type="radio" id="delivery" name="type" />
                        <label for="delivery">Delivery</label>
                    </div>
                    <button type="submit" >NEXT</button>
                </form>
            </div>
        );
    }
}

export default connect() (CustomerForm);