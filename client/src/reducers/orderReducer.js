import {
    GET_ORDER,
    GET_ORDERS,
    ADD_ORDER,
    PATCH_ORDER,
    POST_TOTAL,
    MINUS_TOTAL,
    _TOTAL
} from '../actions/types'

const initialState = {
    order: {},
    orders: [],
    total: [0],
    msg: 'Cart not updated'
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ORDER:
            return {
                ...state,
                order: action.payload
            };
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            };
        case ADD_ORDER:
            return {
                ...state,
                orders: state.orders.concat(action.payload)
            }
        case PATCH_ORDER:
            return {
                ...state,
                orders: state.orders.map((order, i) => i === 0 ?
                    action.payload : order),
                msg: 'Added to cart!'
            }
        case POST_TOTAL:
            return {
                ...state,
                total: parseFloat([state.total, action.payload].reduce((a, b) => a + b))
            }
        case MINUS_TOTAL:
            return {
                ...state,
                total: parseFloat(state.total) - action.payload
            }
        default:
            return state;
    }
}