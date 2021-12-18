import { Redirect, Route } from "react-router-dom";

import { appRoutes } from "./routes";
import { useAppSelector } from "../store";
import { getUserProfile } from "modules/AuthentificationForm/redux";
import React from "react";

type PublicRouteParams = {
  component: React.FC,
  path: string,
  role?: string,
}

export const PublicRoute = ({ component: Component, path, role, ...rest }: PublicRouteParams) => {
  const RenderedComponent = ({ location, exact, ...props }: any) => {
    const userProfile  = useAppSelector(getUserProfile);
    const roleName = userProfile ? userProfile.role_name : null;

    if (roleName) {
      const { path: correctPath }: any = appRoutes.find((route) => route.forRole === roleName)
      return <Redirect from={path} to={{ pathname: `${correctPath}`, state: location }} />
    }
    else {
      return (
        <Component {...props} />
      );
    }
  };
  return <Route path={path} component={RenderedComponent} {...rest} />;
};