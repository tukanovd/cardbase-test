import { takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import {
  getSuitesSlice,
  suitesToggleFollow,
  showAllSuites,
  showSelectedSuites,
  searchSuites,
  suitesFailed,
} from '../reducers';
import {
  handleFollowChange,
  handleGetSuites,
  handleShowSelected,
  handleShowAll,
  handleSearchSuites,
  handleErrors,
} from './suites';

export function* watcherSaga() {
  yield takeLatest(getSuitesSlice.type, handleGetSuites);
  yield takeEvery(suitesToggleFollow.type, handleFollowChange);
  yield takeEvery(suitesToggleFollow.type, handleFollowChange);
  yield takeEvery(showAllSuites.type, handleShowAll);
  yield takeEvery(showSelectedSuites.type, handleShowSelected);
  yield throttle(700, searchSuites.type, handleSearchSuites);
  yield takeEvery(suitesFailed.type, handleErrors);
}
