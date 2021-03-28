import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

let initialState = {};

export const store = createStore(reducers, initialState, applyMiddleware(thunk));
 