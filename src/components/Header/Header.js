import React from 'react';

const Header = ({ headerTitle, order_total }) => {
    return (
        <header>
            {headerTitle || 'Prime Pizza'}
            {order_total}
        </header>
    )
}

export default Header;