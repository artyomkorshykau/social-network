import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer, {DialogsActions} from "./dialogs-reducer";
import profileReducer, {ProfileActions} from "./profile-reducer";
import authReducer, {AuthActions} from "./auth-reducer";
import usersReducer, {UserActions} from "./users-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer, stopSubmit} from 'redux-form'
import appReducer, {AppActions} from "./app-reducer";
import {chatReducer} from "./chat-reducer";


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    chat: chatReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppState = ReturnType<typeof rootReducer>
export type AppRootState = typeof store.getState
export type AppThunk = ThunkAction<Promise<void>, AppState, unknown, AppActionType>
export type AppActionType =
    | AppActions
    | AuthActions
    | DialogsActions
    | ProfileActions
    | ReturnType<typeof stopSubmit>
    | UserActions

// @ts-ignore
window.store = store
