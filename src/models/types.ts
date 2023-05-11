export type SuiteIdType = number;

export type SeoSuiteType = {
  id: SuiteIdType;
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
export type SuitesType = {
  meta: { total_cards_count: number };
  suites: SuiteType[];
};
