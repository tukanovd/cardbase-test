import { fetchData, withCache } from '../utils';
import { SUITES_URL } from './constants';
import { suitesStub } from './stub';
import { SuiteType, SuitesType, SuiteIdType } from './types';

const chachedFetch = withCache<Promise<SuitesType>>(fetchData);

export const getSuites: () => Promise<SuitesType> = async () => {
  const suites = await chachedFetch(SUITES_URL);
  return suitesStub;

  // try {
  //   return JSON.parse(suites);
  // } catch (e) {
  //   console.error('Error while parsing data ', e);
  //   return [];
  // }
};

export const toggleFollow: (
  id: SuiteIdType,
  suites: SuiteType[],
) => Promise<SuiteType[]> = async (id, suites) => {
  const updatedSuites = suites.map((suite) => {
    const updatedSeoSuites = suite.seo_suites.map((seoSuite) => {
      if (seoSuite.id === id) {
        return {
          ...seoSuite,
          is_follow: !seoSuite.is_follow,
        };
      }
      return seoSuite;
    });

    return {
      ...suite,
      seo_suites: updatedSeoSuites,
    };
  });

  return await updatedSuites;
};

export const getAllSelected: (
  suites: SuiteType[],
) => Promise<SuiteType[]> = async (suites) => {
  const updatedSuites = suites.map((suite) => {
    const updatedSeoSuites = suite.seo_suites.map((seoSuite) => {
      if (seoSuite.is_follow) {
        return {
          ...seoSuite,
        };
      }
      return seoSuite;
    });

    return {
      ...suite,
      seo_suites: updatedSeoSuites,
    };
  });

  return await updatedSuites;
};
