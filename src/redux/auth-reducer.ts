import {setAuthUserData, setCaptcha} from "./actions/actions";
import {ACTIONS_TYPE} from "./actions/actionTypes";

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captcha: null
}

const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA:
        case ACTIONS_TYPE.SET_CAPTCHA:
            return {...state, ...action.payload}
        default:
            return state
    }
}
export default authReducer

//-------------------------------TYPES-------------------------------
type InitialStateType = {
    id: null | number;
    email: null | string,
    login: null | string,
    isFetching: boolean
    isAuth: boolean
    captcha: null | string
}
export type AuthActionType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setCaptcha>
