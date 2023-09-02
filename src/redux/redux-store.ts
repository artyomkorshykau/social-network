import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)
export type StoreReduxType = typeof store