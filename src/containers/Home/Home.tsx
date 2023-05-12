import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VariableSizeList } from 'react-window';
import { Box, Container } from '@mui/material';

import ListFilter from '../ListFilter';
import { Header, SearchField, Loader } from '../../components';
import { AppState, SliceStatus } from '../../store/types';
import { searchSuites } from '../../store/reducers';
import renderRow from './renderSuiteRow';
import { calcItemSize, getRowSize } from './utils';
import { ReactComponent as CollectbaseLogo } from '../../assets/CollectbaseLogo.svg';

const Home = () => {
  const status = useSelector((state: AppState) => state.suitesData.status);
  const suitesData = useSelector((state: AppState) => state.suitesData.suites);
  const suites = suitesData?.suites;

  const dispatch = useDispatch();

  const handleSearchInput = useCallback(
    (inputVal: string) => {
      dispatch(searchSuites(inputVal));
    },
    [dispatch],
  );

  calcItemSize(suitesData?.suites);

  return (
    <>
      <Header>
        <div
          className="flex flex-col items-center"
          style={{ gap: '24px', paddingTop: '24px' }}
        >
          <CollectbaseLogo />
          <SearchField
            onChange={handleSearchInput}
            disabled={status !== SliceStatus.Finished}
          />
        </div>
      </Header>
      <Container maxWidth="sm" sx={{ paddingTop: '51px' }}>
        <Loader isReady={status === SliceStatus.Finished}>
          <Box sx={{ height: '100%' }}>
            <ListFilter />
            <VariableSizeList
              itemData={suites}
              height={600}
              width="100%"
              itemSize={getRowSize}
              itemCount={suites?.length || 0}
              overscanCount={1}
            >
              {renderRow}
            </VariableSizeList>
          </Box>
        </Loader>
      </Container>
    </>
  );
};

export default Home;
