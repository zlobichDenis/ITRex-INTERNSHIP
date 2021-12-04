import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAppSelector } from "store";
import { AppScreens, AuthStages } from "const";

type PrivateRouteParams = {
  component: React.FC,
  path: string,
  role: string,
}

export const PrivateRoute = ({ component: Component, path, role, ...rest }: PrivateRouteParams) => {
  const RenderedComponent = ({ location, exact, ...props }: any) => {
    // eslint-disable-next-line react/prop-types
    const { userProfile } = useAppSelector((state) => state.user);
    const roleName = userProfile ? userProfile.role_name : null;

    if (roleName === role) {
      return <Component {...props} />;
    } 
    else {
      return (
        <Redirect push to={{ pathname: `${AppScreens.AUTH}${AuthStages.SIGN_IN}`, state: location }} />
      );
    }
  };  
  return <Route path={path} component={RenderedComponent} {...rest} />;
};

