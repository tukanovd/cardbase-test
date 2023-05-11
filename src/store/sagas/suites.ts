import { call, put, select } from 'redux-saga/effects';
import {
  SuitesType,
  SuiteType,
  getSuites,
  toggleFollow,
  SuiteIdType,
} from '../../models';
import {
  suitesRequested,
  suitesFinished,
  suitesFailed,
  suitesUpdate,
} from '../reducers/suites';
import { AppState } from '../types';
import { PayloadAction } from '@reduxjs/toolkit';

export function* handleGetSuites() {
  yield put(suitesRequested());
  try {
    const suites: SuitesType = yield call(getSuites);

    yield put(suitesFinished({ suites }));
  } catch (e: any) {
    yield put(suitesFailed({ errorMessage: e }));
  }
}

const getStoreSuites = (state: AppState) => state.suitesData.suites;

export function* handleFollowChange(action: PayloadAction<SuiteIdType>) {
  const id = action.payload;
  const allSuites: SuitesType = yield select(getStoreSuites);
  try {
    const suites: SuiteType[] = yield call(toggleFollow, id, allSuites.suites);
    const updatedSuites = { meta: allSuites.meta, suites };

    yield put(suitesUpdate({ suites: updatedSuites }));
  } catch (e: any) {
    yield put(suitesFailed({ errorMessage: e }));
  }
}
