import { combineReducers } from 'redux';
import crudReducer from './crudReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  crud: crudReducer,
  filter: filterReducer,
});

export default rootReducer;
