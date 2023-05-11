import { fetchData } from '../utils';
import { SUITES_URL } from './constants';
import { suitesStub } from './stub';
import { SuiteType, SuitesType, SuiteIdType } from './types';

export const getSuites: () => Promise<SuitesType> = async () => {
  const suites = await fetchData(SUITES_URL);
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
