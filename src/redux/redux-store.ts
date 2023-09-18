import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import {usersReducer} from "./UsersReducer";

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)
export type StoreReduxType = typeof store