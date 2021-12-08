import { useCallback } from 'react';
import { push } from 'connected-react-router';

import { useAppDispatch } from 'store';

type UseRedirectReturnValue = {
  routeToPath(path: string): void,
}

export const useRedirect = (): UseRedirectReturnValue => {
  const dispatch = useAppDispatch();
  const routeToPath = useCallback((path: string) => {
    dispatch(push(path));
  }, [dispatch]);

  return { routeToPath };
};