import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {AppStateType, store} from "./redux/store";
import React from "react";
import {Provider} from "react-redux";
import App from "./app/App";

export let rerenderDom = (state: AppStateType) => {
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
