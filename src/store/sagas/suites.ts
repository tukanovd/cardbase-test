import { call, put } from 'redux-saga/effects';
import { SuitesType, getSuites } from '../../models';
import {
  suitesRequested,
  suitesFinished,
  suitesFailed,
} from '../reducers/suites';

export function* handleGetSuites() {
  yield put(suitesRequested());
  try {
    const suites: SuitesType = yield call(getSuites);
    console.log('SUITES SAGA ', suites);
    yield put(suitesFinished({ suites }));
  } catch (e: any) {
    yield put(suitesFailed({ errorMessage: e }));
  }
}
