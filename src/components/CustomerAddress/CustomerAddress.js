import React from 'react';

const CustomerAddress = ({ customerInfo }) => {
    return (
        <div>
            <p>{customerInfo.name}<br />
                {customerInfo.street_address}<br />
                {customerInfo.city}, MN {customerInfo.zip}</p>
        </div>
    )
}

export default CustomerAddress;