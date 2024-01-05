import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer, stopSubmit} from 'redux-form'
import dialogsReducer, {DialogsActions} from "../reducers/dialogs-reducer";
import profileReducer, {ProfileActions} from "../reducers/profile-reducer";
import usersReducer, {UserActions} from "../reducers/users-reducer";
import authReducer, {AuthActions} from "../reducers/auth-reducer";
import appReducer, {AppActions} from "../reducers/app-reducer";
import {chatReducer} from "../reducers/chat-reducer";


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
