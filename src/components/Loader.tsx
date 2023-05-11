import React, { ReactElement } from 'react';
import { CircularProgress } from '@mui/material';
import { SliceStatus, SliceStatusType } from '../store/types';

type LoaderType = {
  children: ReactElement;
  status: SliceStatusType;
};

const Loader = ({ status, children }: LoaderType) => {
  if (status === SliceStatus.Loading) {
    return (
      <div className="flex flex-col items-center">
        <CircularProgress />
      </div>
    );
  }
  if (status === SliceStatus.Finished) {
    return children;
  }
  return <>null</>;
};

export default Loader;
