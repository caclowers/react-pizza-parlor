const order = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PIZZAS':
            return state;
        case 'ADD_PIZZA_TO_ORDER':
            return state;
        case 'REMOVE_PIZZA_FROM_ORDER':
            return state;
        case 'ADD_CUSTOMER_INFO':
            return state;
        case 'CLEAR_ORDER':
            return state;
        default:
            return state;
    }
}

export default order;