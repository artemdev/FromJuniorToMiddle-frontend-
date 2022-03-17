import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import routes from 'routes';

export default function PrivateRoute({
  children,
  redirectTo = routes.AUTH_VIEW,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
