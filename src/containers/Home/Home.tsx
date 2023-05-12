import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VariableSizeList } from 'react-window';
import { Box, Container } from '@mui/material';

import ListFilter from '../ListFilter';
import { Header, SearchField, Loader } from '../../components';
import { AppState, SliceStatus } from '../../store/types';
import { searchSuites } from '../../store/reducers';
import renderRow from './renderSuiteRow';
import { calcItemSize, getRowSize, itemKey } from './utils';
import { ReactComponent as CollectbaseLogo } from '../../assets/CollectbaseLogo.svg';
import { SuiteType } from '../../models';

const Home = () => {
  const ref = useRef<VariableSizeList<SuiteType[]>>(null);
  const [calcFinished, setCalcFinished] = useState(false);
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

  useEffect(() => {
    calcItemSize(suitesData?.suites).then(() => {
      const list = ref.current;
      list?.resetAfterIndex(0);
      setCalcFinished(true);
    });
  }, [suitesData?.suites]);

  const isReady = calcFinished && status === SliceStatus.Finished;

  return (
    <>
      <Header>
        <div
          className="flex flex-col items-center"
          style={{ gap: '24px', paddingTop: '24px' }}
        >
          <CollectbaseLogo />
          <SearchField onChange={handleSearchInput} disabled={!isReady} />
        </div>
      </Header>
      <Container maxWidth="sm" sx={{ paddingTop: '51px' }}>
        <Loader isReady={isReady}>
          <Box sx={{ height: '100%' }}>
            <ListFilter />
            <VariableSizeList
              ref={ref}
              itemData={suites}
              height={600}
              width="100%"
              itemSize={getRowSize}
              itemCount={suites?.length || 0}
              itemKey={itemKey}
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
