import {setAuthUserData, setCaptcha} from "./actions/actions";
import {ACTION_TYPE} from "../common/enums/Actions";

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    captcha: null
}

const authReducer = (state: InitialState = initialState, action: Action): InitialState => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER_DATA:
            return {...state, ...action.payload}
        case ACTION_TYPE.SET_CAPTCHA:
            return {...state, ...action.payload}
        default:
            return state
    }
}
export default authReducer

//-------------------------------TYPES-------------------------------
type InitialState = {
    id: null | number;
    email: null | string,
    login: null | string,
    isFetching: boolean
    isAuth: boolean
    captcha: null | string
}
export type Action = ReturnType<typeof setAuthUserData> | ReturnType<typeof setCaptcha>
