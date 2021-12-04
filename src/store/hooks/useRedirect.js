import { push } from "connected-react-router";
import { useDispatch } from "react-redux";


export const useRedirect = () => {
  const dispatch = useDispatch();
  const routeToPath = (path) => {
    dispatch(push(path));
  };

  return { routeToPath };
};