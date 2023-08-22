import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {StateType, store} from "./redux/store";
import React from "react";

export let rerenderDom = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                store={store}
                dispatch={store.dispatch.bind(store)}
                state={state}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderDom(store.getState())
store.subscribe(rerenderDom)

