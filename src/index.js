import React from "react";
import { App } from "./components/app/app";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    ,document.getElementById('root')
);




