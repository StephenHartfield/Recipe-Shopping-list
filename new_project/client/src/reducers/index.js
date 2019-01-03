//in store.js file, this index.js file is omitted because by a shortcut, but is where rootReducer comes from
import { combineReducers} from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
	item: itemReducer
});
