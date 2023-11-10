import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {DialogsActionType} from "./dialogsReducer";
import profileReducer, {ProfileActionType} from "./profileReducer";
import authReducer, {AuthActionType} from "./auth-reducer";
import usersReducer, {UsersActionType} from "./usersReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'


let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer, applyMiddleware(thunk))
export type StoreReduxType = typeof store
export type AppDispatchType = ThunkDispatch<AppStateType, any, AnyAction>
export type AppThunk = ThunkAction<void, AppStateType, unknown, AppActionType>
export type AppActionType =
    | AuthActionType
    | DialogsActionType
    | ProfileActionType
    | UsersActionType

// @ts-ignore
window.store = store
