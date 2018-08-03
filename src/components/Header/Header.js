import React from 'react';

const Header = ({ headerTitle, order_total = '0.00' }) => {
    return (
        <header className="App-header">
            <h1 className="App-title">{headerTitle || 'Prime Pizza'}</h1>
            <img src={require('../../images/shopping_cart.png')} alt="shopping cart icon"/>
            <p>${order_total}</p>
        </header>
    )
}

export default Header;