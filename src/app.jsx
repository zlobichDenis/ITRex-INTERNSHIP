import React from "react";
import { Provider } from "react-redux";
import Loader from "react-loader-spinner";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "store";
import { AppRouter } from "routes";
import { GlobalStyles } from "styles";

export const App = () => {
  
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor} loader={Loader}>
          <AppRouter />
          <GlobalStyles />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};
