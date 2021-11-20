import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { userReducer } from 'modules';
import { getUserDataWatcher } from 'modules';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(getUserDataWatcher );

