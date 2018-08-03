import React, { Component } from 'react';
import axios from 'axios';


class AdminView extends Component {

  state = {
    orders: []
  }

  componentDidMount(){
    this.getOrders();
  }

  getOrders(){
    axios.get('/api/order')
    .then(response => {
      this.setState({ orders: response.data });
    })
    .catch(err => console.log(err));
  }

  renderTableRows(){
    return this.state.orders.map(order => (
      <tr key={order._id}>
        <td>{order.customer.name}</td>
        <td>{order.time}</td>
        <td>{order.type}</td>
        <td>{order.order_total}</td>
      </tr>
    ))
  }

  render(){
    console.log(this.state)
    return (
      <main>
        <header>Header</header>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time Order Placed</th>
              <th>Type</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            { this.renderTableRows() }
          </tbody>
        </table>
      </main>
    )
  }
}

export default AdminView;