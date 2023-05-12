import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  GET_SUITES,
  SEARCH_SUITES_BY_KEYWORD,
  SHOW_ALL_SUITES,
  SHOW_ONLY_SELECTED_SUITES,
  TOGGLE_FOLLOW,
} from './constants';
import { InitialStateType, SuitesPayloadResult } from './types';
import { SliceStatus } from '../types';
import { SuiteIdType, SuitesType } from '../../models';

const initialState: InitialStateType = {
  status: SliceStatus.Idle,
  errorMessage: null,
  suites: undefined,
};

const getSuitesSlice = createAction(GET_SUITES);
const suitesToggleFollow = createAction<SuiteIdType>(TOGGLE_FOLLOW);
const showSelectedSuites = createAction(SHOW_ONLY_SELECTED_SUITES);
const showAllSuites = createAction(SHOW_ALL_SUITES);
const searchSuites = createAction<string>(SEARCH_SUITES_BY_KEYWORD);

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
    suitesUpdateAction: (state, action: PayloadAction<SuitesType>) => ({
      ...state,
      suites: action.payload,
    }),
  },
});

export const {
  suitesRequested,
  suitesFinished,
  suitesFailed,
  suitesUpdateAction,
} = suitesSlice.actions;

export {
  getSuitesSlice,
  suitesToggleFollow,
  showSelectedSuites,
  showAllSuites,
  searchSuites,
};

export default suitesSlice.reducer;
