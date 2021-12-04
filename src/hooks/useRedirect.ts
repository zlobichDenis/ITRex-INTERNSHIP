import { push } from "connected-react-router";
import { useAppDispatch } from "store";


export const useRedirect = () => {
  const dispatch = useAppDispatch();
  const routeToPath = (path: string) => {
    dispatch(push(path));
  };

  return { routeToPath };
};