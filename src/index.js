import React from "react";
import { App } from './old structure/App';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./core/store/store";
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>
    ,document.getElementById('root')
);




