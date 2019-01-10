import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';


export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get('/products')
        .then(res => dispatch({
            type: GET_ITEMS,
            payload: res.data
        }))
};

export const deleteItem = id => dispatch => {
    axios.delete(`/products/${id}`)
        .then(res => dispatch({
            type: DELETE_ITEM,
            payload: id
        }))
};

export const addItem = (item, dat) => dispatch => {
    axios.post('/products/', item)
        .then(res => {
            console.log(res.data);
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