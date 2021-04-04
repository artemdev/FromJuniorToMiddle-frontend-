// import { useSelector } from 'react-redux';
// import { Redirect, Route } from 'react-router-dom';
// import { authSelectors } from 'redux/auth';

// export default function PrivateRoute({
//   children,
//   redirectTo = '/',
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <Redirect to={redirectTo} />}
//     </Route>
//   );
// }
