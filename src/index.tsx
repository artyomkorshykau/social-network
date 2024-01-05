import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {AppState, store} from "./redux/store";
import React from "react";
import {Provider} from "react-redux";
import App from "./app/app";

export let rerenderDom = (state: AppState) => {
    ReactDOM.render(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderDom(store.getState())