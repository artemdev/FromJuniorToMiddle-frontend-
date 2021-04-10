import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import routes from 'routes';
import { getLoggedIn } from 'redux/auth/auth-selectors';

export default function PublickRoute({
  children,
  redirectTo = routes.MAIN_VIEW,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(getLoggedIn);
  const shouldredirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldredirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
