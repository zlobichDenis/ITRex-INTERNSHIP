import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { userReducer, getUserDataWatcher } from 'modules/AuthentificationForm/redux';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(getUserDataWatcher);

