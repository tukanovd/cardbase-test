import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GET_SUITES } from './constants';
import { InitialStateType, SuitesPayloadResult } from './types';
import { SliceStatus } from '../types';

const initialState: InitialStateType = {
  status: SliceStatus.Idle,
  errorMessage: null,
  suites: [],
};

const getSuitesSlice = createAction(GET_SUITES);

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
  },
});

export const { suitesRequested, suitesFinished, suitesFailed } =
  suitesSlice.actions;

export { getSuitesSlice };

export default suitesSlice.reducer;
