import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "store";
import { AppRouter } from "routes";
import { GlobalStyles } from "styles";

export function App () {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRouter />
          <GlobalStyles />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
};
