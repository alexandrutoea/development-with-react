import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import homeReducer from './homeReducer';
import userDetailsReducer from './userDetailsReducer';
import statisticsReducer from './statisticsReducer';
import settingsReducer from './settingsReducer';

export default () => combineReducers({
  form: formReducer,
  homeReducer,
  userDetailsReducer,
  statisticsReducer,
  settingsReducer,
});
