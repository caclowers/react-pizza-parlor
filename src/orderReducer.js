const initialState = {
    customer: {
        name: '',
        street_address: '',
        city: '',
        zip: 0
    },
    pizzas: [
        // _id: '',
        // name: '',
        // description: '',
        // cost: '',
        // quantity: ''
    ],
    time: '',
    order_total: 0,
    type: ''
}

const order = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_ORDER':
        return { 
            ...state,
            pizzas: [
                ...state.pizzas, action.payload
            ],
            order_total: state.order_total + action.payload.cost 
        };
        case 'REMOVE_PIZZA_FROM_ORDER':
            const pizzaMatch = pizza => pizza._id !== action.payload._id;
            return {...state, pizzas:state.pizzas.filter(pizzaMatch)};
        case 'ADD_CUSTOMER_INFO':
            return { ...state, customer: action.payload };
        case 'CLEAR_ORDER':
            state = initialState;
            return state;
        default:
            return state;
    }
}

export default order;