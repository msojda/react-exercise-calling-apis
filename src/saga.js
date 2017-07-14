import { call, put, takeLatest } from 'redux-saga/effects';
import blogService from './blogService';

function* fetchPosts() {
  try {
    const posts = yield call(blogService);
    yield put({type: 'POSTS_FETCH_SUCCEEDED', payload: {posts}})
  } catch (error) {
    yield put({type: 'POSTS_FETCH_FAILED', error: error.message})
  }
}


function* postsSaga() {
  yield takeLatest('POSTS_FETCH_REQUESTED', fetchPosts);
}

export default postsSaga;
