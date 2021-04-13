import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { literature, resources } from './views/UsefulInfo/UsefulInfo.json';

// import { useDispatch, useSelector } from 'react-redux';
// import { authOperations, authSelectors } from 'redux/auth';

import Container from './component/Container';
import AppBar from './component/AppBar';
import Google from './views/Google';
import Loader from './component/Loader';
import Footer from './component/Footer';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';

// import Result from 'component/Results'; // !!!TEMPORARY ADDED

// import UsefulInfo from 'views/UsefulInfo';

import { authOperations } from './redux/auth';
import { authSelectors } from './redux/auth';

import('typeface-montserrat');

const ContactPageView = lazy(() =>
  import(
    'views/ContactPageView/ContactPageView' /* webpackChunkName: "ContactPageView" */
  ),
);
const AuthPageView = lazy(() =>
  import(
    'views/AuthPageView/AuthPageView' /*AuthPageViewChunkName: "AuthPageView" */
  ),
);
const TestPageView = lazy(() =>
  import('./views/TestPageView' /* webpackChunkName: "TestPageView" */),
);
const ResultPageView = lazy(() =>
  import('./views/ResultPageView' /* webpackChunkName: "TestPageView" */),
);
const MainPageView = lazy(() =>
  import('views/MainPageView' /* webpackChunkName: "MainPageView" */),
);
const UsefulInfo = lazy(() =>
  import('views/UsefulInfo' /* webpackChunkName: "UsefulPageView" */),
);
const NotFoundView = lazy(() =>
  import(
    'views/NotFoundView/NotFoundView' /* webpackChunkName: "NotFoundView" */
  ),
);

export default function App() {
  const isRefreshingCurrentUser = useSelector(
    authSelectors.isRefreshingCurrentUser,
  );
  const dispatch = useDispatch();

  console.log('isRefreshingCurrentUser', isRefreshingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshingCurrentUser ? (
        <div>
          <Loader />
        </div>
      ) : (
        <>
          <AppBar />
          <Container>
            <Suspense fallback={<Loader />}>
              <Switch>
                <PublicRoute exact path={routes.GOOGLE_AUTH_VIEW}>
                  <Google />
                </PublicRoute>
                <PublicRoute path={routes.CONTACTS_VIEW}>
                  <ContactPageView />
                </PublicRoute>
                <PublicRoute path={routes.AUTH_VIEW} restricted>
                  <AuthPageView />
                </PublicRoute>
                <PrivateRoute
                  path={routes.MAIN_VIEW}
                  exact
                  redirectTo={routes.AUTH_VIEW}
                >
                  <MainPageView />
                </PrivateRoute>
                <PrivateRoute path={routes.TEST_VIEW}>
                  <TestPageView />
                </PrivateRoute>
                <PrivateRoute path={routes.RESULT_VIEW}>
                  <ResultPageView />
                </PrivateRoute>
                <PrivateRoute path={routes.USEFUL_INFO_VIEW}>
                  <UsefulInfo literature={literature} resources={resources} />
                </PrivateRoute>
                <PublicRoute>
                  <NotFoundView />
                </PublicRoute>
              </Switch>
            </Suspense>

            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </Container>
          <Footer />
        </>
      )}
    </>
  );
}
