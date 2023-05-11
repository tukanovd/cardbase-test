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

const headerStub = {
  id: null,
  seo_suites: null,
  year: 2023,
};
const stub = {
  id: 51361,
  image:
    'https://getcardbase-pic.s3.us-east-2.amazonaws.com/7vzpc08afpc2916lxkh8g1gz2w9l?response-content-disposition=inline%3B%20filename%3D%222021_baseball_topps_gypsy_queen.jpg%22%3B%20filename%2A%3DUTF-8%27%272021_baseball_topps_gypsy_queen.jpg&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2GD36W2EZ6AM72WL%2F20230510%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20230510T134150Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=ba9d505e2e68a12c2e2feeb5512fd9d52f490510e65874f5759f53d5d5c2993d',
  is_follow: true,
  name: '2021 Topps Gypsy Queen',
  slug: '2021-topps-gypsy-queen',
  sport_name: 'Baseball',
  year: 2021,
};

const _suitesData = [
  {
    ...headerStub,
    seo_suites: [
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
      stub,
    ],
  },
  { ...headerStub, seo_suites: [stub, stub, stub, stub] },
  { ...headerStub, seo_suites: [stub, stub, stub, stub] },
  { ...headerStub, seo_suites: [stub, stub, stub, stub] },
  { ...headerStub, seo_suites: [stub, stub, stub, stub] },
  { ...headerStub, seo_suites: [stub, stub, stub, stub] },
];

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
  console.log('data ', data);
  return <SuiteCard suiteData={data} />;
};

const Home = () => {
  const suitesData = useSelector((state: AppState) => state.suites);
  const { status, suites } = suitesData;

  _suitesData.forEach((item, index) => {
    console.log('suites index ', index);
    console.log('suites item ', item);
    setRowSize(index, item.seo_suites.length);
  });
  console.log('suites ', rowSize);
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
              itemData={_suitesData}
              height={500}
              width="100%"
              itemSize={getRowSize}
              itemCount={_suitesData.length}
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
