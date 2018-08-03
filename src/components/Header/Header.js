import React from 'react';

const Header = ({ headerTitle, order_total }) => {
    return (
        <header className="App-header">
            <h1 className="App-title">{headerTitle || 'Prime Pizza'}</h1>
            <img src={require('../../images/shopping_cart.png')} alt="shopping cart icon"/>
            {order_total}
        </header>
    )
}

export default Header;