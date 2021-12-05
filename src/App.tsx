import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
import { ConnectedRouter } from "connected-react-router";
import { history } from "store";
import 'react-toastify/dist/ReactToastify.css';
import 'styles/toastContainer.css';

import { store, persistor } from "store";
import { AppRouter } from "routes";
import { GlobalStyles } from "styles";

export function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ConnectedRouter history={history}>
            <AppRouter />
          </ConnectedRouter>
          <GlobalStyles />
        </PersistGate>
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={1}
          />
      </Provider>
    </React.StrictMode>
  );
};
