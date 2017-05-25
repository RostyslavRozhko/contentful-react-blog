import { call, put, takeEvery } from "redux-saga/effects";
import { getAllEntries } from "../api";

import {
  REQUEST_POSTS_STARTED,
  REQUEST_POSTS_SUCCEEDED,
  REQUEST_POSTS_FAILED
} from "../constans";

function* fetchPosts(action) {
  try {
    const posts = yield call(getAllEntries);
    yield put({ type: REQUEST_POSTS_SUCCEEDED, posts: posts });
  } catch (e) {
    yield put({ type: REQUEST_POSTS_FAILED, message: e.message });
  }
}

export function* saga() {
  yield takeEvery(REQUEST_POSTS_STARTED, fetchPosts);
}
