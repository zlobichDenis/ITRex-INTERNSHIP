import React from "react";
import { App } from "./components/app/app";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./store/store";


const rootContainer = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootContainer
);




