import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import logger from 'redux-logger';

import App from './components/App';
import reducers from './reducers';
window.axios = axios;

const store = createStore(reducers, applyMiddleware(reduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
