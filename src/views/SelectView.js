import React, { Component } from 'react';
import axios from 'axios';
import PizzaList from '../components/PizzaList/PizzaList';

class SelectView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzaList: []
    };
  }

componentDidMount(){
  this.getPizzas();
}

    getPizzas = () => {
      axios.get('/api/pizza').then((response) => {
        console.log(response);
        this.setState({
          pizzaList: response.data
        })

      })
    }


    render() {
      return (
        <main>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Prime Pizza</h1>
            </header>
            <br />
            <img src="images/pizza_photo.png" alt="pizza_being_served" />
            <p>Pizza is great.</p>
            <PizzaList listOfPizzas={this.state.pizzaList} />
          </div>
        </main>
      );
    };
  }

  export default SelectView;