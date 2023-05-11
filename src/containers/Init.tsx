import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/types';
import { getSuitesSlice } from '../store/reducers';

const InitApp = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const initData = async () => {
      dispatch(getSuitesSlice());
    };

    initData();
  }, [dispatch]);

  return null;
};

export default InitApp;
