import React from 'react';

const PizzaList = ({ data }) => {
    // calculate total pizza cost:
    const costs = data.map((pizza)=>{
        return (
            <div>
            {pizza.cost}
            </div>
        )
    })
    const reducer = (sum,current) => sum + current;
    const total = costs.reduce(reducer);

    // map over pizzas and display data in a table
    const pizzaListItems = data.map((pizza) => {
        return (
            <div>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={pizza._id}>
                        <td>{pizza.name}</td>
                        <td>{pizza.cost}</td>
                    </tr>
                </tbody>
            </div>
        )
    });
    return (
        <view>
            {pizzaListItems}
            {total}
        </view>
    )
}

export default PizzaList;