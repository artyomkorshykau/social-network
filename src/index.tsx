import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {AppStoreType, store} from "./redux/redux-store";
import React from "react";
import StoreContext from "./StoreContext";

export let rerenderDom = (state: AppStoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderDom(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderDom(state)
})

