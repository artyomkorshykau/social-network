import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let rootReducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})

export type AppStoreType = ReturnType<typeof rootReducers>
export let store = createStore(rootReducers)
export type StoreReduxType = typeof store