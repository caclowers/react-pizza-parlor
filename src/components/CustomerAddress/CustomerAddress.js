import React from 'react';

const CustomerAddress = ({ customerInfo }) => {
    return (
        <view>
            <p>{customerInfo.name}<br />
                {customerInfo.street_address}<br />
                {customerInfo.city}, MN {customerInfo.zip}</p>
        </view>
    )
}

export default CustomerAddress;