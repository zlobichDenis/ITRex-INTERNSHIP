import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { rootWatcher } from "./rootWatcher";

import { errorReducer } from "./errorSlice";
import { userReducer } from "modules/AuthentificationForm/redux";
import { appointmentsReducer } from "modules/Cabinet/redux";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userReducer,
    appointments: appointmentsReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootWatcher);
