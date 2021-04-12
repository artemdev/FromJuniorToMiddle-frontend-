import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import routes from 'routes';
import { authSelectors } from 'redux/auth';

export default function PublickRoute({
  children,
  redirectTo = routes.MAIN_VIEW,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const shouldredirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldredirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
