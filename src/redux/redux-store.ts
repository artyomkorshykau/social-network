import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import authReducer from "./auth-reducer";
import usersReducer from "./usersReducer";
import thunk from "redux-thunk";


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunk))
export type StoreReduxType = typeof store
