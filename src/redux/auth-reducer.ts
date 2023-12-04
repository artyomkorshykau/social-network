import {setAuthUserData} from "./actions/actions";
import {ACTIONS_TYPE} from "./actions/actionTypes";

const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_USER_DATA:
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
}
export type AuthActionType = ReturnType<typeof setAuthUserData>
