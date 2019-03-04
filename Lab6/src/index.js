import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from './Store/configureStore';
import rootReducer from './Store/Reducers';


import './index.css';
import App from './App';

// Creating store + apply middleware
const store = configureStore(rootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
