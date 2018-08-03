import React from 'react';

const CustomerAddress = ({ data }) => {
    return (
        <view>
            <p>{data.name}<br />
                {data.street_address}<br />
                {data.city}, MN {data.zip}</p>
        </view>
    )
}

export default CustomerAddress;