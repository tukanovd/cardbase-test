import { call, put, select } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import {
  SuitesType,
  SuiteType,
  getSuites,
  toggleFollow,
  SuiteIdType,
  getAllSelected,
  updateSuites,
} from '../../models';
import {
  suitesRequested,
  suitesFinished,
  suitesFailed,
  suitesUpdateAction,
} from '../reducers/suites';
import { AppState } from '../types';

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

    yield call(updateSuites, updatedSuites);
    yield put(suitesUpdateAction(updatedSuites));
  } catch (e: any) {
    yield put(suitesFailed({ errorMessage: e }));
  }
}

export function* handleShowSelected() {
  const allSuites: SuitesType = yield select(getStoreSuites);
  try {
    const suites: SuiteType[] = yield call(getAllSelected, allSuites.suites);
    const updatedSuites = { meta: allSuites.meta, suites };
    console.log('selected ', suites);

    yield put(suitesUpdateAction(updatedSuites));
  } catch (e: any) {
    yield put(suitesFailed({ errorMessage: e }));
  }
}

export function* handleShowAll() {
  try {
    const suites: SuitesType = yield call(getSuites);

    yield put(suitesUpdateAction(suites));
  } catch (e: any) {
    yield put(suitesFailed({ errorMessage: e }));
  }
}
