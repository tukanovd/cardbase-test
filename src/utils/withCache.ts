interface CacheResolver<T> {
  (key: string): Promise<T>;
}

interface CacheItem {
  value: any;
}

type Cache = { [key: string]: CacheItem };

const cacheKey = '__cache__';
const cache: Cache = JSON.parse(localStorage.getItem(cacheKey) || '{}');

export const withCache = <T>(
  callback: (key: string) => Promise<T>,
): CacheResolver<T> => {
  async function runFuncAndSave(key: string): Promise<T> {
    const result = await callback(key);
    cache[key] = { value: result };
    localStorage.setItem(cacheKey, JSON.stringify(cache));
    return result;
  }

  async function cacheResolver(key: string): Promise<T> {
    const cachedValue = cache[key];

    if (cachedValue) {
      return cachedValue.value;
    }

    return runFuncAndSave(key);
  }

  return cacheResolver;
};

export const updateCache = <T>(key: string, data: T): void => {
  cache[key] = { value: data };
  localStorage.setItem(cacheKey, JSON.stringify(cache));
};

export default withCache;
