import React from 'react';

const Header = ({ headerTitle, order_total }) => {
    return (
        <header>
            {headerTitle || 'Prime Pizza'}
            <img src={require('../../images/shopping_cart.png')}/>
            {order_total}
        </header>
    )
}

export default Header;