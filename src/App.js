import { Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import routes from './routes';

// import { useDispatch, useSelector } from 'react-redux';
// import { authOperations, authSelectors } from 'redux/auth';

import Container from 'component/Container';
import AppBar from 'component/AppBar';
import Loader from 'component/Loader';
import PrivateRoute from 'component/PrivateRoute';
import PublicRoute from 'component/PublicRoute';

// import Result from 'component/Results'; // !!!TEMPORARY ADDED

import Footer from 'component/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import UsefulInfo from 'views/UsefulInfo';
import { literature, resources } from './views/UsefulInfo/UsefulInfo.json';
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
  import('views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);

export default function App() {
  return (
    <>
      <AppBar />

      <Container>
        <Suspense fallback={<Loader />}>
          <Switch>
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

            <PublicRoute path={routes.RESULT_VIEW}>
              <ResultPageView />
            </PublicRoute>

            <PublicRoute path={routes.USEFUL_INFO_VIEW}>
              <UsefulInfo literature={literature} resources={resources} />
            </PublicRoute>

            <PublicRoute path={routes.RESULT_VIEW}>
              <ResultPageView />
            </PublicRoute>

            <PublicRoute path={routes.USEFUL_INFO_VIEW}>
              <UsefulInfo literature={literature} resources={resources} />
            </PublicRoute>

            <PublicRoute>
              <NotFoundView />
            </PublicRoute>
          </Switch>
        </Suspense>
        {/* <Result /> */}
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
  );
}
