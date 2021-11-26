import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

import { rootWatcher } from "./rootWatcher";

import { userReducer } from "modules/AuthentificationForm/redux";
import { appointmentsReducer } from "modules/Cabinet/redux";
import { createAppointmentReducer } from "modules/Cabinet/components/AppointmentForm/redux";

const sagaMiddleware = createSagaMiddleware();

const authentificationPersistConfig = {
  key: 'user',
  storage: storage,
};

export const store = configureStore({
  reducer: {
    user: persistReducer(authentificationPersistConfig, userReducer),
    appointments: appointmentsReducer,
    createdAppointment: createAppointmentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootWatcher);
