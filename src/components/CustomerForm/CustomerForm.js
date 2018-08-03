import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const customer = {
    name: '',
    street_address: '',
    city: '',
    zip: '',
}

class CustomerForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customer,
            orderType: ''
        }
    }
    
    handleChangeFor = (propertyName) => {
        return (event) => {
            this.setState({
                ...this.state,
                customer: {
                    ...this.state.customer,
                    [propertyName]: event.target.value
                }
            })
        }
    }

    handleRadioChange = event => {
        this.setState({ ...this.state, orderType: event.target.value });
    }
    
    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        this.props.dispatch({type: 'ADD_CUSTOMER_INFO', payload: this.state.customer, orderType: this.state.orderType})
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
                        <input 
                            type="radio" 
                            id="pickup" 
                            name="type" 
                            value="pickup" 
                            onChange={this.handleRadioChange}
                        />
                        <label htmlFor="pickup">Pick-up</label>
                    </div>
                    <div>
                        <input 
                            type="radio" 
                            id="delivery" 
                            name="type" 
                            value="delivery" 
                            onChange={this.handleRadioChange}
                        />
                        <label htmlFor="delivery">Delivery</label>
                    </div>
                    <button type="submit" >NEXT</button>
                </form>
            </div>
        );
    }
}

export default withRouter(connect() (CustomerForm));