import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

import { AppScreens, AuthStages } from "routes";

export const PrivateRoute = ({ component: Component, path, role, ...rest }) => {
  const renderedComponent = ({ location, exact, ...props }) => {
    // eslint-disable-next-line react/prop-types
    const user = useSelector((state) => state.user);
    console.log(user, role)
    if (user.userProfile.role_name === role) {
      return <Component {...props} />;
    } else {
      return (
        <Redirect to={{ pathname: `${AppScreens.AUTH}${AuthStages.SIGN_IN}`, state: location }} />
      );
    }
  };  
  return <Route path={path} component={renderedComponent} {...rest} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string,
  role: PropTypes.string,
};
