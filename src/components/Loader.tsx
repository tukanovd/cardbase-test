import React, { ReactElement } from 'react';
import { CircularProgress } from '@mui/material';

type LoaderType = {
  children: ReactElement;
  isReady: boolean;
};

const Loader = ({ isReady, children }: LoaderType) => {
  if (!isReady) {
    return (
      <div className="flex flex-col items-center">
        <CircularProgress />
      </div>
    );
  }
  if (isReady) {
    return children;
  }
  return <>null</>;
};

export default Loader;
