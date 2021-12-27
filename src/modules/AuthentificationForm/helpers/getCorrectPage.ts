import { appRoutes } from 'routes';
import { UserProfile } from 'types';

export const getCorrectPage = (userProfile: UserProfile): string => {
  const { path }: any = appRoutes.find(({ forRole }) => forRole === userProfile.role_name);
  return path;
}
