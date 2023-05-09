import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, AppState } from '../store/types';
import { getSuitesSlice } from '../store/reducers';

const InitApp = () => {
  const dispatch: AppDispatch = useDispatch();
  const suites = useSelector((state: AppState) => state.suites);

  useEffect(() => {
    const initData = async () => {
      dispatch(getSuitesSlice());
    };
    console.log('inited ');
    initData();
  }, [dispatch]);

  console.log('ALL SUITES ', suites);
  return null;
};

export default InitApp;
