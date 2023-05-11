interface CacheResolver<T> {
  (key: string): T;
}

interface CacheItem {
  value: any;
}

type Cache = Map<string | number, CacheItem>;

const cache: Cache = new Map();

export const withCache = <T>(
  callback: (key: string) => T,
): CacheResolver<T> => {
  function runFuncAndSave(key: string): T {
    const result = callback(key);
    cache.set(key, { value: result });
    return result;
  }

  function cacheResolver(key: string) {
    const cachedValue = cache.get(key);

    if (!!cachedValue) {
      return cachedValue.value;
    }

    return runFuncAndSave(key);
  }

  return cacheResolver;
};

export const updateCache = <T>(key: string, data: T): void => {
  if (cache.has(key)) {
    cache.set(key, { value: data });
  }
};

export default withCache;
