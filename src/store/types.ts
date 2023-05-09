import store, { reducer } from './store';

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof reducer>;

export enum SliceStatus {
  'Idle' = 'Idle',
  'Loading' = 'Loading',
  'Finished' = 'Finished',
  'Failed' = 'Failed',
}

export type SliceStatusType = keyof typeof SliceStatus;
