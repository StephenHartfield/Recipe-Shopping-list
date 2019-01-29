import axios from 'axios';
import { GET_ITEMS, GET_ITEM, PATCH_ITEM, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';


export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/products')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
};

export const getItem = id => dispatch => {
    dispatch(setItemsLoading());
    var newId = id.slice(10);
    axios
        .get(`/products/${newId}`)
        .then(res => dispatch({
            type: GET_ITEM,
            payload: res.data
        }))
};

export const updateItem = (id, item) => dispatch => {
    axios
        .patch(`/products/${id}`, item)
        .then(res => dispatch({
            type: PATCH_ITEM,
            payload: res.data
        }))
    axios.get('/products')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
};

export const deleteItem = id => dispatch => {
    axios
        .delete(`/products/${id}`)
        .then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
};

export const addItem = (item) => dispatch => {
    axios
        .post('/products', item)
        .then(res => {
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        })
    // axios
    // .get('/products')
    // .then(res => dispatch({
    // 	type: GET_ITEMS,
    // 	payload: res.data
    // }))
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    }
}