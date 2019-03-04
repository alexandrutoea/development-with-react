import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import userDetailsReducer from './userDetailsReducer';

export default () => combineReducers({
  homeReducer,
  userDetailsReducer,
});
