import React from 'react'
import ReactDOM from 'react-dom'
import Blog from './Blog'
import initialState from './initialState';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

function reducer(state, action) {
  return state;
}

const myStore = createStore(reducer, initialState, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={myStore}>
    <Blog />
  </Provider>,
  document.getElementById('root'))
