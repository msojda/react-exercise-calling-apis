import React from 'react'
import ReactDOM from 'react-dom'
import Blog from './Blog'
import initialState from './initialState';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import postsSaga from './saga';

function reducer(state, action) {
  if (action.type === 'POSTS_FETCH_SUCCEEDED') {
    const nextState = { ...state };
    nextState.posts = action.payload.posts;

    return nextState;
  }

  return state;
}

const sagaMiddleware = createSagaMiddleware();

const myStore = createStore(reducer, {posts: []}, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(postsSaga);

ReactDOM.render(
  <Provider store={myStore}>
    <Blog />
  </Provider>,
  document.getElementById('root'))
