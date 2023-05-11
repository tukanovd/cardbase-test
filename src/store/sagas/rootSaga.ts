import { takeEvery, takeLatest } from 'redux-saga/effects';
import {
  getSuitesSlice,
  suitesToggleFollow,
  showAllSuites,
  showSelectedSuites,
} from '../reducers/suites';
import {
  handleFollowChange,
  handleGetSuites,
  handleShowSelected,
  handleShowAll,
} from './suites';

export function* watcherSaga() {
  yield takeLatest(getSuitesSlice.type, handleGetSuites);
  yield takeEvery(suitesToggleFollow.type, handleFollowChange);
  yield takeEvery(suitesToggleFollow.type, handleFollowChange);
  yield takeEvery(showAllSuites.type, handleShowAll);
  yield takeEvery(showSelectedSuites.type, handleShowSelected);
}
