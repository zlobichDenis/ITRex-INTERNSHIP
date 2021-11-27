import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history'

import { rootWatcher } from "./rootWatcher";
import { userReducer } from "modules/AuthentificationForm/redux";
import { appointmentsReducer } from "modules/Cabinet/redux";
import { createAppointmentReducer } from "modules/Cabinet/components/AppointmentForm/redux";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const authentificationPersistConfig = {
  key: 'user',
  storage: storage,
};

const createRootReducer = (history) => ({
  router: connectRouter(history),
  user: persistReducer(authentificationPersistConfig, userReducer),
  appointments: appointmentsReducer,
  createdAppointment: createAppointmentReducer,
});



export const store = configureStore({
  reducer: createRootReducer(history),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware, routerMiddleware(history)),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcher);
