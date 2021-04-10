import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { getLoggedIn } from 'redux/auth/auth-selectors';
import routes from 'routes';

export default function PrivateRoute({
  children,
  redirectTo = routes.AUTH_VIEW,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
