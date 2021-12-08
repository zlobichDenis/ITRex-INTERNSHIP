import { useCallback } from 'react';
import { push } from 'connected-react-router';

import { useAppDispatch } from 'store';


export const useRedirect = () => {
  const dispatch = useAppDispatch();
  const routeToPath = useCallback((path: string) => {
    dispatch(push(path));
  }, [dispatch]);

  return { routeToPath };
};