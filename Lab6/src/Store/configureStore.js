// Redux packages
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Axios middleware
import { multiClientMiddleware } from 'redux-axios-middleware';
import { clients } from './axiosClients';

const enhancedComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = applyMiddleware(
  thunk,
  multiClientMiddleware(clients)
);

export default rootReducer => createStore(
  rootReducer(),
  enhancedComposer(middleware)
);
