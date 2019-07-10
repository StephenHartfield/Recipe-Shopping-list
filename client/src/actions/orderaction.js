import axios from 'axios';
import { GET_ORDER, GET_ORDERS, PATCH_ORDER, ADD_ORDER, POST_TOTAL, MINUS_TOTAL } from './types';

export const getOrder = (id) => dispatch => {
    axios
        .get(`/orders/${id}`)
        .then(res => dispatch({
            type: GET_ORDER,
            payload: res.data
        }))
};

export const getOrders = () => dispatch => {
    axios
        .get('/orders')
        .then(res => dispatch({
            type: GET_ORDERS,
            payload: res.data
        }))
}

export const addOrder = (product) => dispatch => {
    axios
        .post('/orders', product)
        .then(res => dispatch({
            type: ADD_ORDER,
            payload: res.data
        }))
};

export const updateOrder = (id, product) => dispatch => {
    axios
        .patch(`/orders/${id}`, product)
        .then(res => dispatch({
            type: PATCH_ORDER,
            payload: res.data
        }))
};

export const postTotal = (add) => dispatch => {
    return dispatch({
        type: POST_TOTAL,
        payload: add
    })
}

export const minusTotal = (sub) => dispatch => {
    return dispatch({
        type: MINUS_TOTAL,
        payload: sub
    })
}