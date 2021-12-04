import { appRoutes } from "routes";
import { UserProfile } from "types";

type getCorrectPageParams = UserProfile;

export const getCorrectPage = (userProfile: getCorrectPageParams): string => {
  const { path }: any = appRoutes.find(({ forRole }) => forRole === userProfile.role_name);
  return path;
}
