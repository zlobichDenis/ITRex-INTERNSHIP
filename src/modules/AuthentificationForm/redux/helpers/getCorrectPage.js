import { appRoutes } from "routes";

export const getCorrectPage = (userProfile) => {
  const { path } = appRoutes.find(({ forRole }) => forRole === userProfile.role_name);
  return path 
};
