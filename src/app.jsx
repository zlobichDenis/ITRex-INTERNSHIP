import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

import { AppRouter } from "./routes/index";

export const App = () => {
    return  (
        <React.StrictMode>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </React.StrictMode>
    )
};
