import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

import { AppScreens, AuthStages } from "routes";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const renderedComponent = ({ location, ...props }) => {
    // eslint-disable-next-line react/prop-types
    const isAuthentificated = localStorage.getItem("access_token");
    const { pathname } = location;
    if (isAuthentificated) {
      return <Component {...props} />;
    } else {
      return (
        <Redirect
          from={pathname}
          to={`${AppScreens.AUTH}${AuthStages.SIGN_UP}`}
        />
      );
    }
  };

  return <Route {...rest} component={renderedComponent} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
};
