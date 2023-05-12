import { SuiteType } from '../../models';

const itemSize = 173;
const rowSize: number[] = [];
const setRowSize = (index: number, count: number) =>
  (rowSize[index] = count * itemSize);

export const getRowSize = (index: number) => rowSize[index];

export const calcItemSize = (suites?: SuiteType[]) => {
  if (!suites) return;
  suites.forEach((item, index) => {
    setRowSize(index, item.seo_suites.length);
  });
};
