import React from 'react';

const PizzaList = ({ pizzaInfo, total }) => {
    // map over pizzas and display data in a table
    const pizzaListItems = pizzaInfo.map((pizza) => {
        return (
            <tr key={pizza._id}>
                <td>{pizza.name}</td>
                <td>{pizza.cost}</td>
            </tr>
        )
    });

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzaListItems}
                </tbody>
            </table>
            {total}
        </div>
    )
}

export default PizzaList;