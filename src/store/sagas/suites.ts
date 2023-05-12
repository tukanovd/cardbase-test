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
  search,
} from '../../models';
import {
  suitesRequested,
  suitesFinished,
  suitesFailed,
  suitesUpdateAction,
} from '../reducers/suites';
import { AppState } from '../types';
import { ActionErrorMessage } from '../reducers/types';
import { handleError } from '../../utils';

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

export function* handleSearchSuites(action: PayloadAction<string>) {
  const searchKeyword = action.payload;
  try {
    const allSuites: SuitesType = yield call(getSuites);
    const suites: SuiteType[] = yield call(
      search,
      searchKeyword,
      allSuites.suites,
    );
    console.log('suites search ', suites);

    yield put(suitesUpdateAction({ meta: allSuites.meta, suites }));
  } catch (e: any) {
    yield put(suitesFailed({ errorMessage: e }));
  }
}

export function* handleErrors(action: PayloadAction<ActionErrorMessage>) {
  const { errorMessage } = action.payload;

  yield handleError(errorMessage || '');
}
