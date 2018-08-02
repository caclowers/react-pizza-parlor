import React, { Component } from 'react';
import axios from 'axios';


class AdminView extends Component {

  componentDidMount(){
    this.getOrders();
  }

  getOrders(){
    axios.get('/api/order')
    .then(response => console.log(response.data));
  }

  render(){
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

          </tbody>
        </table>
      </main>
    )
  }
}

export default AdminView;