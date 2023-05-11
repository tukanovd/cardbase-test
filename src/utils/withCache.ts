interface CacheResolver<T> {
  (url: string): T;
}

interface CacheItem {
  value: any;
}

type Cache = Map<string | number, CacheItem>;

export const withCache = <T>(
  callback: (url: string) => T,
): CacheResolver<T> => {
  const cache: Cache = new Map();

  function runFuncAndSave(url: string): T {
    const result = callback(url);
    cache.set(url, { value: result });
    return result;
  }

  function cacheResolver(url: string) {
    const cachedValue = cache.get(url);

    if (!!cachedValue) {
      return cachedValue.value;
    }

    return runFuncAndSave(url);
  }

  return cacheResolver;
};

export default withCache;
