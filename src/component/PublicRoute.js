// import { useSelector } from 'react-redux';
// import { Redirect, Route } from 'react-router-dom';
// import { authSelectors } from 'redux/auth';

// export default function PublickRoute({
//   children,
//   redirectTo = '/',
//   restricted = false,
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldredirect = isLoggedIn && restricted;

//   return (
//     <Route {...routeProps}>
//       {shouldredirect ? <Redirect to={redirectTo} /> : children}
//     </Route>
//   );
// }
