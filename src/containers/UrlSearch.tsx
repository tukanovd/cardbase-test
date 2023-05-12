import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { searchSuites } from '../store/reducers';

const UrlSearch = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (document) {
      const urlParams = searchParams.get('query');

      dispatch(searchSuites(urlParams || ''));
    }
  }, [searchParams, dispatch]);
  return null;
};

export default UrlSearch;
