import { fetchData, withCache, updateCache } from '../utils';
import { SUITES_URL } from './constants';
import { suitesStub } from './stub';
import { SuiteType, SuitesType, SuiteIdType } from './types';

const cachedFetch = withCache<Promise<SuitesType>>(fetchData);

export const getSuites: () => Promise<SuitesType> = async () => {
  const suites = await cachedFetch(SUITES_URL);

  try {
    if (typeof suites === 'string') {
      return JSON.parse(suites as unknown as string);
    } else if (!!suites) return suites;
  } catch (e) {
    console.error('Error while parsing data ', e);
  }

  // return stub data
  return Promise.resolve(suitesStub).then((suites) => {
    updateCache(SUITES_URL, suites);
    return suites;
  });
};

export const updateSuites: (suites: SuitesType) => void = (suites) => {
  updateCache(SUITES_URL, suites);
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
  const selectedSuites: SuiteType[] = [];

  for (const suite of suites) {
    const selectedSeoSuites = suite.seo_suites.filter(
      (seoSuite) => seoSuite.is_follow,
    );
    if (selectedSeoSuites.length > 0) {
      selectedSuites.push({
        ...suite,
        seo_suites: selectedSeoSuites,
      });
    }
  }

  return selectedSuites;
};
