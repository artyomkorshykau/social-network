import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, state, StatePropsType, subscribe} from "./redux/state";
import React from "react";

export let rerenderDom = (state: StatePropsType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
rerenderDom(state)
subscribe(rerenderDom)

