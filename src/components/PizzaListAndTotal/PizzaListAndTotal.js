import React from 'react';

const PizzaList = ({ pizzaInfo, total }) => {
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