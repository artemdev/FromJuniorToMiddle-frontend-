import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import routes from './routes';

// import { useDispatch, useSelector } from 'react-redux';
// import { authOperations, authSelectors } from 'redux/auth';

import Container from 'component/Container';
import AppBar from 'component/AppBar';
import Loader from 'component/Loader';
// import PrivateRoute from 'component/PrivateRoute';
// import PublicRoute from 'component/PublicRoute';
// import TestPageView from 'views/TestPageView';

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
const MainPageView = lazy(() =>
  import('views/MainPageView' /* webpackChunkName: "UsefulPageView" */),
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
            <Route path={routes.CONTACTS_VIEW}>
              <ContactPageView />
            </Route>

            <Route path={routes.AUTH_VIEW}>
              <AuthPageView />
            </Route>

            <Route path={routes.MAIN_VIEW} exact>
              <MainPageView />
            </Route>

            <Route path={routes.TEST_VIEW}>
              <TestPageView />
            </Route>

            <Route path={routes.USEFUL_INFO_VIEW}>
              <UsefulInfo literature={literature} resources={resources} />
            </Route>

            <Route>
              <NotFoundView />
            </Route>

            {/* </PublicRoute> */}

            {/* <PrivateRoute path="/" exact> */}

            {/* </PrivateRoute> */}

            {/* <PrivateRoute path="/useful-info"> */}

            {/* </PrivateRoute> */}
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
