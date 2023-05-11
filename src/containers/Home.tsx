import React from 'react';
import { useSelector } from 'react-redux';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import { Box, Container } from '@mui/material';

import ListFilter from './ListFilter';
import {
  Header,
  SearchField,
  Loader,
  VirtualizedList,
  SuiteCard,
} from '../components';
import { AppState, SliceStatus } from '../store/types';
import { ReactComponent as CollectbaseLogo } from '../assets/CollectbaseLogo.svg';
import { SeoSuiteType, SuiteType } from '../models';

const itemSize = 173;
const rowSize: number[] = [];
const setRowSize = (index: number, count: number) =>
  (rowSize[index] = count * itemSize);
const getRowSize = (index: number) => rowSize[index];

const renderRow = ({
  index,
  data,
  style,
}: ListChildComponentProps<SuiteType[]>) => {
  const item = data[index];

  const { year, seo_suites } = item;
  return (
    <div style={style}>
      <VirtualizedList<SeoSuiteType>
        header={year}
        data={seo_suites}
        childRenderer={renderCard}
      />
    </div>
  );
};

const renderCard = (data: SeoSuiteType) => {
  return <SuiteCard suiteData={data} />;
};

const calcItemSize = (suites?: SuiteType[]) => {
  if (!suites) return;
  suites.forEach((item, index) => {
    setRowSize(index, item.seo_suites.length);
  });
};

const Home = () => {
  const status = useSelector((state: AppState) => state.suitesData.status);
  const suitesData = useSelector((state: AppState) => state.suitesData.suites);
  const suites = suitesData?.suites;

  calcItemSize(suitesData?.suites);

  return (
    <>
      <Header>
        <div
          className="flex flex-col items-center"
          style={{ gap: '24px', paddingTop: '24px' }}
        >
          <CollectbaseLogo />
          <SearchField disabled={status !== SliceStatus.Finished} />
        </div>
      </Header>
      <Container maxWidth="sm" sx={{ paddingTop: '51px' }}>
        <Loader status={status}>
          <Box sx={{ height: '100vh' }}>
            <ListFilter />
            <VariableSizeList
              itemData={suites}
              height={500}
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
