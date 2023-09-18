import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {AppStateType, store} from "./redux/redux-store";
import React from "react";
import {Provider} from "react-redux";

export let rerenderDom = (state: AppStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderDom(store.getState())
