import { takeEvery, takeLatest } from 'redux-saga/effects';
import { getSuitesSlice, suitesToggleFollow } from '../reducers/suites';
import { handleFollowChange, handleGetSuites } from './suites';

export function* watcherSaga() {
  yield takeLatest(getSuitesSlice.type, handleGetSuites);
  yield takeEvery(suitesToggleFollow.type, handleFollowChange);
}
