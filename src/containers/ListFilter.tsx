import React, { useState } from 'react';
import { Button, Typography, Divider, Badge } from '@mui/material';
import { useDispatch } from 'react-redux';
import { showAllSuites, showSelectedSuites } from '../store/reducers';

const FILTER_IDS = {
  ALL: 'ALL',
  SELECTED: 'SELECTED',
};

const ListFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState(FILTER_IDS.ALL);
  const dispatch = useDispatch();

  const handleSelectAll = () => {
    dispatch(showAllSuites());
    setSelectedFilter(FILTER_IDS.ALL);
  };
  const handleSelectSelectedOnly = () => {
    dispatch(showSelectedSuites());
    setSelectedFilter(FILTER_IDS.SELECTED);
  };

  return (
    <div className="flex content-center">
      <Button variant="text" onClick={handleSelectAll}>
        <Typography
          variant="button"
          color="text.primary"
          fontWeight={selectedFilter === FILTER_IDS.ALL ? '600' : '400'}
        >
          All
        </Typography>
      </Button>
      <Divider orientation="vertical" flexItem />
      <Button
        variant="text"
        style={{ display: 'flex', alignItems: 'center' }}
        onClick={handleSelectSelectedOnly}
      >
        <Typography
          variant="button"
          color="text.primary"
          fontWeight={selectedFilter === FILTER_IDS.SELECTED ? '600' : '400'}
        >
          Selected
        </Typography>
        <Badge badgeContent={3} color="primary" sx={{ marginLeft: '16px' }} />
      </Button>
    </div>
  );
};

export default ListFilter;
