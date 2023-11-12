import {authAPI} from "../api/api";
import {AppDispatchType, AppThunk} from "./store";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

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
    return async (dispatch) => {
        try {
            const res = await authAPI.authMe();
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(setAuthUserData(id, login, email, true));
            }
        } catch (error) {
            // Обработка ошибки
        }
    };
};

export const LoginTC = (log: string, pass: string, remember: boolean): AppThunk => {
    return async (dispatch) => {
        try {
            const res = await authAPI.login(log, pass, remember);
            if (res.data.resultCode === 0) {
                await dispatch(authMeTC());
            } else {
                dispatch(stopSubmit('login', {_error: res.data.messages[0] || 'Some error'}));
            }
        } catch (error) {
            // Обработка ошибки
        }
    };
};

export const LogoutTC = (): AppThunk => {
    return async (dispatch) => {
        try {
            const res = await authAPI.logout();
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        } catch (error) {
            // Обработка ошибки
        }
    };
};

//-------------------------------TYPES-------------------------------
type InitialStateType = {
    id: null | string;
    email: null | string,
    login: null | string,
    isFetching: boolean
    isAuth: boolean | null
}
export type AuthActionType = ReturnType<typeof setAuthUserData>
