import { fetchData } from '../utils';
import { SUITES_URL } from './constants';
import { SuitesType } from './types';

export const getSuites: () => Promise<SuitesType> = async () => {
  const suites = await fetchData(SUITES_URL);

  try {
    return JSON.parse(suites);
  } catch (e) {
    console.error('Error while parsing data ', e);
    return [];
  }
};
