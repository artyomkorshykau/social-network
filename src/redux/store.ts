import {AnyAction, applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer, {DialogsAction} from "./dialogs-reducer";
import profileReducer, {ProfileAction} from "./profile-reducer";
import authReducer, {AuthAction} from "./auth-reducer";
import usersReducer, {UsersAction} from "./users-reducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer, stopSubmit} from 'redux-form'
import appReducer, {InitializedAction} from "./app-reducer";


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type AppState = ReturnType<typeof rootReducer>
export type AppRootState = typeof store.getState
export type AppThunk = ThunkAction<Promise<void>, AppState, unknown, AppActionType>
export type AppActionType =
    | AuthAction
    | DialogsAction
    | ProfileAction
    | UsersAction
    | ReturnType<typeof stopSubmit>
    | InitializedAction

// @ts-ignore
window.store = store
