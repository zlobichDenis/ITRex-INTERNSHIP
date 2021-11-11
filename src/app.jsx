import React from "react";
import { Provider } from "react-redux";

import { store } from "store";
import { AppRouter } from "routes";
import { GlobalStyles } from "styles";

export const App = () => {
    return  (
        <React.StrictMode>
            <Provider store={store}>
                <AppRouter />
                <GlobalStyles />
            </Provider>
        </React.StrictMode>
    )
};
