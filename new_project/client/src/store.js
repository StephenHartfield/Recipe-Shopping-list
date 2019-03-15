import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//rootReducer comes from './reducers/index.js' but index.js can be omitted because it is index.js
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : a => a
));

export default store;