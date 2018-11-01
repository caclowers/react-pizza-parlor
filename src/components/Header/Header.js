import React from 'react';
import '../../components/App/App.css';

const Header = ({ headerTitle, order_total = '0.00' }) => {
    return (
        <header className="App-header">
            <img src="images/logo.jpg" alt="pizza_logo" height="120" width="120" />
            <h1 className="App-title">{headerTitle || 'Prime Pizza'}</h1>
            <img src={require('../../images/shopping_cart.png')} alt="shopping cart icon" />
            <p id="totalTag">Total:&nbsp;${order_total}</p>
        </header>
    )
}

export default Header;