import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAppSelector } from "store";
import { AppPaths, AuthPath } from "enums";
import { getUserProfile } from "modules/AuthentificationForm/redux";

type PrivateRouteParams = {
  component: React.FC,
  path: string,
  role: string,
}

export const PrivateRoute = ({ component: Component, path, role, ...rest }: PrivateRouteParams) => {
  const RenderedComponent = ({ location, exact, ...props }: any) => {
    const userProfile  = useAppSelector(getUserProfile);
    const roleName = userProfile ? userProfile.role_name : null;

    if (roleName === role) {
      return <Component {...props} />;
    }
    else {
      return (
        <Redirect push to={{ pathname: `${AppPaths.AUTH}${AuthPath.SIGN_IN}`, state: location }} />
      );
    }
  };
  return <Route path={path} component={RenderedComponent} {...rest} />;
};

