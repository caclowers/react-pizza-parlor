import React, { Component } from 'react';
import { connect } from 'react-redux'
import CustomerForm from '../components/CustomerForm/CustomerForm';
import Header from '../components/Header/Header.js';
class CustomerInfoView extends Component {
    render() {
        return (
            <main>
                <div className="App">
                    <Header order_total={this.props.orderTotal} />
                    <br />
                    <CustomerForm />
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
      orderTotal: state.order.order_total
    }
  };

export default connect(mapStateToProps)(CustomerInfoView);