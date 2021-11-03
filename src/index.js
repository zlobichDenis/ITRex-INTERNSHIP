import React from "react";
import { App } from "./components/app/app";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router } from 'react-router-dom';
import { AppScreens } from "./common/const";


const rootContainer = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router >
                <App />
        </Router>
    </Provider>
    ,
    rootContainer
);




