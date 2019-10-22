import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const middlewaresList = [thunk, logger];
const enhancers = applyMiddleware(...middlewaresList);

const store = createStore(reducer, enhancers);

export default store;
