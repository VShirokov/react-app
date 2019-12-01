import todo from './todo.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo,
});

export default rootReducer;
