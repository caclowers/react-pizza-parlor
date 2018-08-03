import React, { Component } from 'react';
// import axios from 'axios';
// import { connect } from 'react-redux'
import CustomerForm from '../components/CustomerForm/CustomerForm';

class CustomerInfoView extends Component {
    render() {
        return (
            <main>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Prime Pizza</h1>
                    </header>
                    <br />
                    <img src="images/pizza_photo.png" />
                    <CustomerForm />
                </div>
            </main>
        );
    }
}

export default CustomerInfoView;