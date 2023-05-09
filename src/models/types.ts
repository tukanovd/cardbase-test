type SeoSuiteType = {
  id: number;
  image: string | null;
  is_follow: boolean;
  name: string;
  slug: string;
  sport_name: string;
  year: number;
};
export type SuiteType = {
  id: null;
  year: number;
  seo_suites: SeoSuiteType[];
};
export type SuitesType = SuiteType[];
