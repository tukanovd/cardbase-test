import { takeLatest } from 'redux-saga/effects';
import { getSuitesSlice } from '../reducers/suites';
import { handleGetSuites } from './suites';

export function* watcherSaga() {
  yield takeLatest(getSuitesSlice.type, handleGetSuites);
}
