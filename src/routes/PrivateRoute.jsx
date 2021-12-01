import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

import { AppScreens, AuthStages } from "routes";

export const PrivateRoute = ({ component: Component, path, role, ...rest }) => {
  const RenderedComponent = ({ location, exact, ...props }) => {
    // eslint-disable-next-line react/prop-types
    const { userProfile } = useSelector((state) => state.user);
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

PrivateRoute.propTypes = {
  component: PropTypes.func,
  path: PropTypes.string,
  role: PropTypes.string,
};
