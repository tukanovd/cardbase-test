import { SuiteType } from '../../models';

const muiHTMLbug = 15; // fix for MUIPaper doesn't scale to parent's height
const headerSize = 92;
const itemSize = 173;
const rowSize: number[] = [];
const setRowSize = (index: number, count: number) =>
  (rowSize[index] = count * itemSize + headerSize + muiHTMLbug);

export const getRowSize = (index: number) => {
  console.log('[index] ', index);
  console.log('rowSize[index] ', rowSize[index]);
  return rowSize[index];
};

export const calcItemSize = (suites?: SuiteType[]) => {
  return new Promise((resolve) => {
    if (!suites) {
      resolve(null);
      return;
    }

    suites.forEach((item, index) => {
      setRowSize(index, item.seo_suites.length);
    });
    resolve(null);
  });
};

export const itemKey = (index: number, data: SuiteType[]) => {
  const item = data[index];
  return 'key' + item.year;
};
