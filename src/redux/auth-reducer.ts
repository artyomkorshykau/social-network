import {authAPI} from "../api/api";
import {AppThunk} from "./redux-store";
import {stopSubmit} from "redux-form";

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}
export default authReducer

//-------------------------------ACTION CREATORS TYPES-------------------------------
const SET_USER_DATA = 'SET_USER_DATA'

//-------------------------------ACTION CREATORS-------------------------------
export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) =>
    ({type: SET_USER_DATA, payload: {userId, login, email, isAuth}})

//-------------------------------THUNK CREATORS-------------------------------
export const authMeTC = (): AppThunk => {
    return (dispatch) => {
        authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            })
    }
}
export const LoginTC = (log: string, pass: string, remember: boolean): AppThunk => {
    return (dispatch) => {
        authAPI.login(log, pass, remember)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(authMeTC())
                } else {
                    dispatch(stopSubmit('login', {_error: res.data.messages[0] || 'Some error'}))
                }
            })
    }
}

export const LogoutTC = (): AppThunk => {
    return (dispatch) => {
        authAPI.logout()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
}

//-------------------------------TYPES-------------------------------
type InitialStateType = {
    id: null | string;
    email: null | string,
    login: null | string,
    isFetching: boolean
    isAuth: boolean | null
}
export type AuthActionType = ReturnType<typeof setAuthUserData>
