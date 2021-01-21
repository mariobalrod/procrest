import { useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const useQuery = () => {
  const { search } = useLocation();
  const { push } = useHistory();
  const queryParams = new URLSearchParams(search);
  const updateQueryParams = useCallback(
    (params) => push({ search: params.toString() }),
    [push]
  );

  return { queryParams, updateQueryParams };
};

export default useQuery;