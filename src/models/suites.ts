import { fetchData } from '../utils';
import { SUITES_URL } from './constants';
import { SuitesType } from './types';

export const getSuites: () => Promise<SuitesType> = () => {
  return fetchData(SUITES_URL);
};
