import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  GET_SUITES,
  SHOW_ALL_SUITES,
  SHOW_ONLY_SELECTED_SUITES,
  TOGGLE_FOLLOW,
} from './constants';
import { InitialStateType, SuitesPayloadResult } from './types';
import { SliceStatus } from '../types';
import { SuiteIdType } from '../../models';

const initialState: InitialStateType = {
  status: SliceStatus.Idle,
  errorMessage: null,
  suites: undefined,
};

const getSuitesSlice = createAction(GET_SUITES);
const suitesToggleFollow = createAction<SuiteIdType>(TOGGLE_FOLLOW);
const showSelectedSuites = createAction(SHOW_ONLY_SELECTED_SUITES);
const showAllSuites = createAction(SHOW_ALL_SUITES);

const suitesSlice = createSlice({
  name: 'suites',
  initialState,
  reducers: {
    suitesRequested: (state) => ({
      ...state,
      status: SliceStatus.Loading,
    }),
    suitesFinished: (state, action: PayloadAction<SuitesPayloadResult>) => ({
      ...state,
      status: SliceStatus.Finished,
      suites: action.payload.suites,
    }),
    suitesFailed: (state, action: PayloadAction<SuitesPayloadResult>) => ({
      ...state,
      status: SliceStatus.Failed,
      error: action.payload.errorMessage,
    }),
    suitesUpdate: (state, action: PayloadAction<SuitesPayloadResult>) => ({
      ...state,
      suites: action.payload.suites,
    }),
  },
});

export const { suitesRequested, suitesFinished, suitesFailed, suitesUpdate } =
  suitesSlice.actions;

export {
  getSuitesSlice,
  suitesToggleFollow,
  showSelectedSuites,
  showAllSuites,
};

export default suitesSlice.reducer;
