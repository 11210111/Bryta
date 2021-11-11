import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function PublicRoute({ component: Component, restricted, ...rest }) {
  const isLogin = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogin && restricted ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export function PrivateRoute({ component: Component, ...rest }) {
  const isLogin = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLogin ? <Redirect to="/login" /> : <Component {...props} />
      }
    />
  );
}
