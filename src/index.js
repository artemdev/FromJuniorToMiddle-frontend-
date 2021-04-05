import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
// import { store, persistor } from './redux/store';
// import Loader from 'component/Loader';

import 'modern-normalize/modern-normalize.css';
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={<Loader />} persistor={persistor}> */}
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
