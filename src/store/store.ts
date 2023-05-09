import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { suitesSliceReducer } from './reducers';
import rootSaga from './sagas';

type RootReducerType = {
  suites: ReturnType<typeof suitesSliceReducer>;
};

const reducer = combineReducers<RootReducerType>({
  suites: suitesSliceReducer,
});
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export { reducer };
export default store;
