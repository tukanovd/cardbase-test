import { SeoSuiteType, SuitesType } from './types';

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

const getStubData: () => SeoSuiteType = () => ({
  ...stub,
  id: Math.floor(Math.random() * 1000),
});

export const _suitesData = [
  {
    ...headerStub,
    seo_suites: [
      { ...getStubData(), name: '2222 ToppsTopps Topps' },
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
      getStubData(),
    ],
  },
  {
    ...headerStub,
    seo_suites: [getStubData(), getStubData(), getStubData(), getStubData()],
  },
  {
    ...headerStub,
    seo_suites: [getStubData(), getStubData(), getStubData(), getStubData()],
  },
  {
    ...headerStub,
    seo_suites: [getStubData(), getStubData(), getStubData(), getStubData()],
  },
  {
    ...headerStub,
    seo_suites: [getStubData(), getStubData(), getStubData(), getStubData()],
  },
  {
    ...headerStub,
    seo_suites: [getStubData(), getStubData(), getStubData(), getStubData()],
  },
];

export const suitesStub: SuitesType = {
  meta: { total_cards_count: 22222 },
  suites: _suitesData,
};
