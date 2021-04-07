import { Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { Suspense } from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { authOperations, authSelectors } from 'redux/auth';

import Container from 'component/Container';
import AppBar from 'component/AppBar';
import Loader from 'component/Loader';
// import PrivateRoute from 'component/PrivateRoute';
// import PublicRoute from 'component/PublicRoute';

import Result from 'component/Results'; // !!!TEMPORARY ADDED
import Footer from 'component/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const MainPageView = lazy(() =>
  import('views/MainPageView' /* webpackChunkName: "MainPageView" */),
);
// const UsefulPageView = lazy(() =>
//   import('views/UsefulPageView' /* webpackChunkName: "UsefulPageView" */),
// );
// const NotFoundView = lazy(() =>
//   import('views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
// );

export default function App() {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<Loader />}>
          <Switch>
            {/* <PublicRoute path="/contacts"> */}
            <ContactPageView path="/contacts" />
            {/* </PublicRoute> */}

            {/* <PublicRoute path="/auth"> */}
            <AuthPageView path="/auth" />
            {/* </PublicRoute> */}

            {/* <PrivateRoute path="/" exact> */}
            <MainPageView path="/" exact />
            {/* </PrivateRoute> */}

            {/* <PrivateRoute path="/useful-info"> */}
            {/* <UsefulPageView /> */}
            {/* </PrivateRoute> */}

            {/* <PublicRoute> */}
            {/* <NotFoundView /> */}
            {/* </PublicRoute> */}
          </Switch>
        </Suspense>
        <Result />
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
