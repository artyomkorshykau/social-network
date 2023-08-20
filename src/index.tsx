import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {StatePropsType, store, StoreType} from "./redux/state";
import React from "react";

export let rerenderDom = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderDom(store.getState())
store.subscribe(rerenderDom)

