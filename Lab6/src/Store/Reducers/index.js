import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import userDetailsReducer from './userDetailsReducer';
import statisticsReducer from './statisticsReducer';

export default () => combineReducers({
  homeReducer,
  userDetailsReducer,
  statisticsReducer,
});
